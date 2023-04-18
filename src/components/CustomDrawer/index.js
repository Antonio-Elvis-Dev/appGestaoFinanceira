import React, { useContext } from "react";
import { View, Image, Text } from "react-native";
import {
  DrawerItemList,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";

import { AuthContext } from "../../contexts/auth";
import Icon from '@expo/vector-icons/Feather'
export default function CustomDrawer(props) {
  const { user, signOut } = useContext(AuthContext);

  return (
    <DrawerContentScrollView>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: 25,
        }}
      >
        <Image
          source={require("../../assets/logo.png")}
          style={{ width: 90, height: 90 }}
          resizeMode="contain"
        />
        <Text style={{ fontSize: 18, marginTop: 18 }}>Bem-Vindo!</Text>
        <Text
          numberOfLines={1}
          style={{ fontSize: 17, fontWeight: "bold", marginBottom: 14 }}
        >
          {user && user.name}
        </Text>
      </View>

      <DrawerItemList {...props} />

      <DrawerItem label="Sair" 
      labelStyle={{color:'#121212'}}
      style={{borderColor:'#C62C36', borderWidth:2, }}
      icon={({color,size})=><Icon name="log-out" size={size} color={color}/>}
      onPress={()=>signOut()}
      />
    </DrawerContentScrollView>
  );
}
