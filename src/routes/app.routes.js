import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { View, Text } from "react-native";
import Home from "../pages/Home";
import New from "../pages/New";
import Logout from "../pages/Logout";

export default function AppRoutes() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,

        drawerStyle: {
          backgroundColor: "#fff",
          paddingTop: 20,
        },

        drawerActiveBackgroundColor: "#3b3dbf",
        drawerActiveTintColor: "#fff",
        

        drawerInactiveBackgroundColor:"#f0f2ff",
        drawerInactiveTintColor:'#121212'
      }}


    >
      <Drawer.Screen name="Home" component={Home}  />
      <Drawer.Screen name="Registrar" component={New} />
      <Drawer.Screen name="Meu Perfil" component={Logout} />
    </Drawer.Navigator>
  );
}
