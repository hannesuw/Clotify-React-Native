import { StyleSheet, Dimensions } from "react-native";
import { NativeBaseProvider, Box, Text, Button } from "native-base";
import { theme } from "../theme";
import LottieView from "lottie-react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const HomeScreen = ({ navigation }) => {
  return (
    <NativeBaseProvider theme={theme}>
      <Box
        safeArea
        h="100%"
        bg="white"
        justifyContent="center"
        alignItems="center"
      >
        <Box flex={1} alignItems="center" justifyContent="flex-end">
          <Text fontSize="4xl" color="base.primary" fontWeight="bold">
            Clotify
          </Text>
          <Text fontSize="md" color="base.primary">
            A style for every story
          </Text>
        </Box>
        <Box flex={1}></Box>
        <LottieView source={require("../animation/cat.json")} autoPlay loop />
        <Box flex={1}>
          <Button
            bgColor="base.primary"
            onPress={() => navigation.navigate("Products")}
          >
            <Text color="white" fontSize="lg" p="1">
              Take a sneak peek
            </Text>
          </Button>
        </Box>
      </Box>
    </NativeBaseProvider>
    // <NativeBaseProvider theme={theme}>
    //   <Box flex={1} bg="#fff">
    //     <ImageBackground
    //       source={{
    //         uri: "https://i.pinimg.com/564x/70/f1/81/70f181979ff554f6eea8342baaeddb35.jpg",
    //       }}
    //       resizeMode="cover"
    //       style={styles.image}
    //     >
    //       <Box
    //         style={{ backgroundColor: "rgba(225,225,225,0.8)" }}
    //         p="8"
    //         borderRadius="3xl"
    //       >
    //         <Text textAlign="center" color="black" fontSize="4xl">
    //           Clotify
    //         </Text>
    //         <Text textAlign="center" color="black" fontSize="xl" mb="8">
    //           Wear better, Look better
    //         </Text>
    //         <Button
    //           w="2/3"
    //           mx="auto"
    //           colorScheme="blue"
    //           size="lg"
    //           p="3"
    //           onPress={() => navigation.navigate("ProductsNavigator")}
    //         >
    //           <Text fontSize="lg" color="white">
    //             Take a sneak peek
    //           </Text>
    //         </Button>
    //       </Box>
    //     </ImageBackground>
    //   </Box>
    // </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: windowWidth,
    height: windowHeight,
  },
});

export default HomeScreen;
