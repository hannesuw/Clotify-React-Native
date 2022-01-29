import {
  NativeBaseProvider,
  Box,
  Text,
  Pressable,
  ScrollView,
} from "native-base";
import {
  FlatList,
  View,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
} from "react-native";
import { theme } from "../theme";
import { rupiah } from "../helpers/currencyFormatter";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../queries";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Loading from "../components/Loading";
import Error from "../components/Error";

export const ProductsScreen = ({ navigation }) => {
  const { loading, error, data: products } = useQuery(GET_PRODUCTS);

  const toDetail = (id) => {
    navigation.navigate("Detail", { id });
  };

  const { width } = Dimensions.get("window");

  const ProductCard = ({ item }) => {
    return (
      <Box p="5" style={{ width: width / 2 }}>
        <Pressable onPress={() => toDetail(item.id)}>
          <Box mb="2">
            <Image
              source={{ uri: item.mainImg }}
              style={{ width: "100%", height: 200, borderRadius: 10 }}
            ></Image>
          </Box>
        </Pressable>

        <Box flex={1}>
          <Text textAlign="center" mb="1" fontWeight="bold">
            {item.name}
          </Text>
          <Text textAlign="center">Rp {rupiah(item.price)}</Text>
        </Box>
      </Box>
    );
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <NativeBaseProvider theme={theme}>
      <Box bgColor="white" h="100%" safeArea>
        <ScrollView>
          <Box
            p="5"
            justifyContent="space-between"
            flexDirection="row"
            alignItems="center"
          >
            <Box>
              <Text fontSize="3xl" fontWeight="bold" color="base.primary">
                Clotify
              </Text>
              <Text fontSize="lg">Explore the new shirts</Text>
            </Box>
            <Box flexDirection="row" alignItems="center">
              <Box mr="5">
                <MaterialCommunityIcons
                  name="shopping-outline"
                  size={35}
                  style={{ color: "#7f6df3" }}
                />
              </Box>
              <Box>
                <MaterialCommunityIcons
                  name="heart-outline"
                  size={35}
                  style={{ color: "#7f6df3" }}
                />
              </Box>
            </Box>
          </Box>
          <Box>
            <Box>
              <FlatList
                numColumns={2}
                data={products.products}
                renderItem={ProductCard}
                keyExtractor={(item) => item.id}
              />
            </Box>
          </Box>
        </ScrollView>
      </Box>
    </NativeBaseProvider>
  );
};

export default ProductsScreen;
