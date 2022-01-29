import { NativeBaseProvider, Box, Text, Badge } from "native-base";
import {
  Image,
  Dimensions,
  ImageBackground,
  StyleSheet,
  Pressable,
} from "react-native";
import { theme } from "../theme";
import { useState, useEffect } from "react";
import { rupiah } from "../helpers/currencyFormatter";
import { useQuery } from "@apollo/client";
import { GET_PRODUCT_DETAIL } from "../queries";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Loading from "../components/Loading";
import Error from "../components/Error";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const DetailScreen = ({ route, navigation }) => {
  const { id } = route.params;
  const { loading, error, data } = useQuery(GET_PRODUCT_DETAIL, {
    variables: { productId: id },
  });
  const [displayImage, setDipslayImage] = useState("none");

  useEffect(() => {
    if (data) {
      setDipslayImage(data.product.mainImg);
    }
  }, [data]);

  const changeImage = (imageUrl) => {
    setDipslayImage(imageUrl);
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  if (data) {
    return (
      <NativeBaseProvider theme={theme}>
        <Box>
          <ImageBackground
            source={{ uri: displayImage }}
            resizeMode="cover"
            style={styles.image}
          >
            <Box flex="1" p="5">
              <Pressable onPress={() => navigation.goBack()}>
                <MaterialCommunityIcons
                  name="arrow-left-bold"
                  size={50}
                  style={{ color: "#9e8ffc" }}
                />
              </Pressable>
            </Box>
            <Box></Box>
            <Box
              flex="2"
              justifyContent="center"
              alignItems="flex-end"
              shadow="7"
            >
              <Box h="400" w="90%" bgColor="white" borderLeftRadius="30">
                <Box justifyContent="flex-end" p="7">
                  <Box justifyContent="space-between" height="100%">
                    <Box>
                      <Box flexDirection="row" mb="4">
                        <Box flex={1} h="100%">
                          <Text fontSize="xl" fontWeight="bold">
                            {data.product.name}
                          </Text>
                          <Text fontSize="lg" fontWeight="semibold">
                            Rp {rupiah(data.product.price)}
                          </Text>
                          <Text>By: {data.product.creator}</Text>
                        </Box>
                        <Box
                          alignItems="center"
                          justifyContent="center"
                          flex={0.3}
                        >
                          <Badge bgColor="base.primary" borderRadius={10}>
                            <Text color="white" fontSize="md" p="1">
                              {data.product.Category.name}
                            </Text>
                          </Badge>
                        </Box>
                      </Box>
                      <Box>
                        <Text fontSize="md" fontWeight="semibold" mb="1">
                          Description:
                        </Text>
                        <Text fontSize="sm">{data.product.description}</Text>
                      </Box>
                    </Box>
                    <Box>
                      <Text fontSize="md" mb="3" fontWeight="bold">
                        Images:
                      </Text>
                      <Box flexDirection="row" justifyContent="space-evenly">
                        <Pressable
                          onPress={() => changeImage(data.product.mainImg)}
                        >
                          <Image
                            style={{ width: 75, height: 75 }}
                            source={{ uri: data.product.mainImg }}
                          ></Image>
                        </Pressable>
                        {data.productImages &&
                          data.productImages.map((image) => {
                            return (
                              <Pressable
                                key={image.id}
                                onPress={() => changeImage(image.imgUrl)}
                              >
                                <Image
                                  style={{ width: 75, height: 75 }}
                                  source={{ uri: image.imgUrl }}
                                ></Image>
                              </Pressable>
                            );
                          })}
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </ImageBackground>
        </Box>
      </NativeBaseProvider>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: windowWidth,
    height: windowHeight,
    zIndex: -1,
    opacity: 1,
  },
});

export default DetailScreen;
