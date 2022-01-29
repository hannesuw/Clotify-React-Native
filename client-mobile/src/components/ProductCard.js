import { Image, Dimensions } from "react-native";
import { Box, Pressable, Text } from "native-base";
import { rupiah } from "../helpers/currencyFormatter";
import { useNavigation } from "@react-navigation/native";
const navigation = useNavigation();

export default function ProductCard({ item }) {
  //   const { width } = Dimensions.get("window");

  return (
    <Box flex={1} p="5">
      <Pressable onPress={() => navigation.push("Detail", { id: item.id })}>
        <Box mb="5" borderWidth={2} style={{ width: "100%" }}>
          <Image
            source={{ uri: item.mainImg }}
            style={{ width: "100%", height: 200, borderRadius: 10 }}
          ></Image>
        </Box>
      </Pressable>

      <Box flex={1}>
        <Text textAlign="center" mb="1">
          {item.name}
        </Text>
        <Text textAlign="center">Rp {rupiah(item.price)}</Text>
      </Box>
    </Box>
  );
}
