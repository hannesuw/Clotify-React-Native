import {
  Box,
  NativeBaseProvider,
  Input,
  Stack,
  TextArea,
  FormControl,
  Select,
  ScrollView,
  Heading,
  Button,
  Text,
  Alert,
  HStack,
  VStack,
} from "native-base";
import { useMutation, useQuery } from "@apollo/client";
import { GET_CATEGORIES } from "../queries";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { theme } from "../theme";
import { useEffect, useState } from "react";
import { CREATE_PRODUCT } from "../mutation";
import { GET_PRODUCTS } from "../queries";

const ProductForm = ({ navigation }) => {
  const { loading, error, data: categories } = useQuery(GET_CATEGORIES);

  const [
    createProduct,
    { loading: loadingProduct, error: errorProduct, data: product },
  ] = useMutation(CREATE_PRODUCT, {
    refetchQueries: [GET_PRODUCTS],
  });

  const [inputData, setInputData] = useState({
    name: "",
    price: 0,
    mainImg: "",
    categoryId: 0,
    description: "",
  });

  const [invalidInput, setInvalidInput] = useState(false);

  const handleInputChange = (e, field) => {
    if (field === "price" || field === "categoryId") {
      setInputData({
        ...inputData,
        [field]: +e,
      });
    } else {
      setInputData({
        ...inputData,
        [field]: e,
      });
    }
  };

  const submitForm = () => {
    if (
      !inputData.name ||
      !inputData.price ||
      !inputData.mainImg ||
      !inputData.categoryId ||
      !inputData.description ||
      typeof inputData.price !== "number"
    ) {
      setInvalidInput(true);
    } else {
      createProduct({ variables: { newProduct: inputData } });

      setInputData({
        name: "",
        price: "",
        mainImg: "",
        categoryId: "",
        description: "",
      });

      setInvalidInput(false);

      delete inputData.image1;
      delete inputData.image2;
      delete inputData.image3;
    }
  };

  useEffect(() => {
    if (product) {
      navigation.navigate("ProductsScreen");
    }
  }, [product, errorProduct]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  if (categories) {
    return (
      <NativeBaseProvider theme={theme}>
        <Box safeArea bgColor="#fff">
          <ScrollView>
            <FormControl p="8">
              <Stack mb="10">
                <Heading>Add a new product</Heading>
              </Stack>
              <Stack space={5}>
                <Stack>
                  <FormControl.Label>Name</FormControl.Label>
                  <Input
                    p={2}
                    value={inputData.name}
                    borderRadius="md"
                    onChange={(event) =>
                      handleInputChange(event.nativeEvent.text, "name")
                    }
                  />
                </Stack>
                <Stack>
                  <FormControl.Label>Price</FormControl.Label>
                  <Input
                    variant="underlined"
                    p={2}
                    borderRadius="md"
                    value={inputData.price}
                    onChange={(event) =>
                      handleInputChange(event.nativeEvent.text, "price")
                    }
                  />
                </Stack>
                <Stack>
                  <FormControl.Label>Main Image</FormControl.Label>
                  <Input
                    variant="underlined"
                    p={2}
                    borderRadius="md"
                    value={inputData.mainImg}
                    onChange={(event) =>
                      handleInputChange(event.nativeEvent.text, "mainImg")
                    }
                  />
                </Stack>
                <Stack>
                  <FormControl.Label>Additional Image 1</FormControl.Label>
                  <Input
                    variant="underlined"
                    p={2}
                    borderRadius="md"
                    value={inputData.image1}
                    onChange={(event) =>
                      handleInputChange(event.nativeEvent.text, "image1")
                    }
                  />
                </Stack>
                <Stack>
                  <FormControl.Label>Additional Image 2</FormControl.Label>
                  <Input
                    variant="underlined"
                    p={2}
                    borderRadius="md"
                    value={inputData.image2}
                    onChange={(event) =>
                      handleInputChange(event.nativeEvent.text, "image2")
                    }
                  />
                </Stack>
                <Stack>
                  <FormControl.Label>Additional Image 3</FormControl.Label>
                  <Input
                    variant="underlined"
                    p={2}
                    borderRadius="md"
                    value={inputData.image3}
                    onChange={(event) =>
                      handleInputChange(event.nativeEvent.text, "image3")
                    }
                  />
                </Stack>
                <Stack>
                  <FormControl.Label>Category</FormControl.Label>
                  <Select
                    minWidth={200}
                    accessibilityLabel="Select category"
                    placeholder="Select category"
                    value={inputData.categoryId}
                    onValueChange={(id) => handleInputChange(id, "categoryId")}
                    borderRadius="md"
                  >
                    {categories.categories.map(({ id, name }) => {
                      return (
                        <Select.Item
                          label={name}
                          value={id.toString()}
                          key={id}
                        />
                      );
                    })}
                  </Select>
                </Stack>
                <Stack mb="10">
                  <FormControl.Label>Description</FormControl.Label>
                  <TextArea
                    h={20}
                    placeholder="Description here..."
                    value={inputData.description}
                    onChange={(event) =>
                      handleInputChange(event.nativeEvent.text, "description")
                    }
                  />
                </Stack>
                <Stack>
                  {invalidInput && (
                    <Alert w="100%" status="error">
                      <VStack space={2} flexShrink={1} w="100%">
                        <HStack
                          flexShrink={1}
                          space={2}
                          justifyContent="space-between"
                        >
                          <HStack space={2} flexShrink={1}>
                            <Alert.Icon mt="1" />
                            <Text fontSize="md" color="coolGray.800">
                              Invalid input
                            </Text>
                          </HStack>
                        </HStack>
                      </VStack>
                    </Alert>
                  )}
                </Stack>
                <Stack>
                  {!loadingProduct && (
                    <Button
                      bgColor="base.primary"
                      borderRadius={30}
                      onPress={submitForm}
                    >
                      <Text color="white">Add</Text>
                    </Button>
                  )}
                  {loadingProduct && (
                    <Button
                      bgColor="base.primary"
                      borderRadius={30}
                      isLoading
                      isLoadingText="Submitting"
                    >
                      Button
                    </Button>
                  )}
                </Stack>
              </Stack>
            </FormControl>
          </ScrollView>
        </Box>
      </NativeBaseProvider>
    );
  }
};

export default ProductForm;
