import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HomeScreen from "./src/screens/HomeScreen";
import ProductsScreen from "./src/screens/ProductsScreen";
import DetailScreen from "./src/screens/DetailScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ApolloProvider } from "@apollo/client";
import client from "./config/apolloClient";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProductForm from "./src/screens/ProductForm";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Products = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="ProductsScreen"
        component={ProductsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "Products") {
                iconName = focused ? "tshirt-crew" : "tshirt-crew-outline";
              } else if (route.name === "New Product") {
                iconName = focused ? "plus" : "plus-outline";
              }

              return (
                <MaterialCommunityIcons
                  name={iconName}
                  size={size}
                  color={color}
                />
              );
            },
            headerShown: false,
            tabBarActiveTintColor: "#7f6df3",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{ tabBarVisible: false }}
          />
          <Tab.Screen
            name="Products"
            component={Products}
            tabBarLabel="Products"
          />
          <Tab.Screen name="New Product" component={ProductForm} />
        </Tab.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
