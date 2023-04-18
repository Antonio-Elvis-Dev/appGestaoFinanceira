import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { View, Text } from "react-native";
import Home from "../pages/Home";
import New from "../pages/New";
import Profile from "../pages/Profile";
import CustomDrawer from "../components/CustomDrawer";

export default function AppRoutes() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator


    drawerContent={(props)=><CustomDrawer {...props}/>}
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
      <Drawer.Screen name="Perfil" component={Profile} />
    </Drawer.Navigator>
  );
}
