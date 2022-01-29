import { NativeBaseProvider, Box } from "native-base";
import LottieView from "lottie-react-native";

const Loading = () => {
  return (
    <NativeBaseProvider>
      <Box safeArea h="100%" bg="white">
        <LottieView
          source={require("../animation/loading.json")}
          autoPlay
          loop
        />
      </Box>
    </NativeBaseProvider>
  );
};

export default Loading;
