import React, { useContext, useState } from "react";
import {
  StyleSheet,
  Platform,
  StatusBar,
  Keyboard,
  ActivityIndicator,
} from "react-native";
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
  const { loadingAuth,signIn } = useContext(AuthContext);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();



function handleLogin(){
  signIn(email, password)
}

  return (
    <Background>
      <Container behavior={Platform.OS === "ios" ? "padding" : ""} enabled>
        <Logo source={require("../../assets/logo.png")} />

        <AreaInput>
          <Input
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </AreaInput>
        <AreaInput>
          <Input
            placeholder="Senha"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </AreaInput>

        <SubmitButton activeOpacity={0.8}  onPress={handleLogin}>
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
            <SubmitText>Não possui cadastro?</SubmitText>
          )}
        </Link>
      </Container>
    </Background>
  );
}
