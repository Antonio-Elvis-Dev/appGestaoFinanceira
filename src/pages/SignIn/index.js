import React, { useContext } from "react";
import { StyleSheet, Platform, StatusBar, Keyboard } from "react-native";
import { useNavigation } from "@react-navigation/native";

import {
  AreaInput,
  Container,
  Input,
  Background,
  Logo,
  Link,
  SubmitButton,
  SubmitText,
  TextLink,
} from "./styles";

import { AuthContext } from "../../contexts/auth";

export default function SignIn() {
  const navigation = useNavigation();

  const { loadingAuth } = useContext(AuthContext);
  
  return (
    <Background>
      <Container behavior={Platform.OS === "ios" ? "padding" : ""} enabled>
        <Logo source={require("../../assets/logo.png")} />

        <AreaInput>
          <Input
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </AreaInput>
        <AreaInput>
          <Input placeholder="Senha" secureTextEntry />
        </AreaInput>

        <SubmitButton activeOpacity={0.8}>
          <SubmitText>Acessar</SubmitText>
        </SubmitButton>

        <Link
          onPress={() => {
            navigation.navigate("SignUp");
          }}
        >
          {loadingAuth ? (
            <ActivityIndicator size={20} color="#FFF" />
          ) : (
            <SubmitText>Cadastrar</SubmitText>
          )}
        </Link>
      </Container>
    </Background>
  );
}
