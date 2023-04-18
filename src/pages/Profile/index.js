import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../contexts/auth";
import Header from "../../components/Header";
import {
  Container,
  Message,
  Name,
  LogoutText,
  LogoutButton,
  NewText,
  NewLink,
} from "./styles";

export default function Profile() {
  const { signOut, user } = useContext(AuthContext);

  const navigation = useNavigation();

  return (
    <Container>
      <Header title="Meu Perfil" />

      <Message>Bem-Vindo de volta!</Message>
      <Name numberOfLines={1}>{user && user.name}</Name>

      <NewLink onPress={()=>navigation.navigate("Registrar")}>
        <NewText>Fazer Registro</NewText>
      </NewLink>

      <LogoutButton onPress={() => signOut()}>
        <LogoutText>Sair</LogoutText>
      </LogoutButton>
    </Container>
  );
}
