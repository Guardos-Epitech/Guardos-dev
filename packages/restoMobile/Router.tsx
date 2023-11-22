import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddPage from "./src/pages/AddPage/AddPage";
import MyRestaurant from "./src/components/RestaurantCard"
import QRCodeEngin from "./src/pages/QRCodeEngin/QRCodeEngin";
import HomeScreen from "src/pages/HomeScreen/HomeScreen";
import EditRestaurant from "src/pages/EditRestaurant/EditRestaurant";
import AddRestaurant from "src/pages/AddRestaurant/AddRestaurant";

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MyRestaurant"
          component={HomeScreen}
          options={{ headerShown: false}}
          />
        <Stack.Screen 
        name="AddRestaurant" 
        component={AddRestaurant}
        options={{ headerShown: false}}
        />
        <Stack.Screen 
        name="EditRestaurant" 
        component={EditRestaurant}
        options={{ headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
