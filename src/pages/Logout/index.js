import React, { useContext } from "react";
import { View, Text, Button } from "react-native";

import { AuthContext } from "../../contexts/auth";
import Header from "../../components/Header";

export default function Logout() {
  const { signOut } = useContext(AuthContext);
  return (
    <View>
        <Header title ="Meu Perfil"/>

      <Button title="Sair" onPress={() => signOut()} />
    </View>
  );
}
