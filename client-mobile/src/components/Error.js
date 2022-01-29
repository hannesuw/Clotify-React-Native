import { NativeBaseProvider, Box } from "native-base";
import LottieView from "lottie-react-native";

const Error = () => {
  return (
    <NativeBaseProvider>
      <Box safeArea h="100%" bg="white">
        <LottieView source={require("../animation/error.json")} autoPlay loop />
      </Box>
    </NativeBaseProvider>
  );
};

export default Error;
