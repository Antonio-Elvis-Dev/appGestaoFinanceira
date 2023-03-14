import React, { useContext, useState } from "react";
import { Text } from "react-native";
import {
  AreaInput,
  Background,
  Container,
  Input,
  SubmitButton,
  SubmitText,
} from "../SignIn/styles";

import { AuthContext } from "../../contexts/auth";

export default function SignUp() {
  const { user, signUp } = useContext(AuthContext);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignUp() {
    signUp(nome, email, password);
  }
  handleSignUp()
  return (
    <Background>
      <Container>
        <AreaInput>
          <Input
            placeholder="Nome"
            value={nome}
            onChangeText={(text) => setNome(text)}
          />
        </AreaInput>
        <AreaInput>
          <Input
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={(text) => {
              setEmail(text);
            }}
          />
        </AreaInput>
        <AreaInput>
          <Input
            placeholder="Senha"
            secureTextEntry
            autoCapitalize="none"
            value={password}
            onChangeText={(text) => {
              setPassword(text);
            }}
          />
        </AreaInput>
        <SubmitButton >
          <SubmitText>Cadastrar</SubmitText>
        </SubmitButton>
      </Container>
    </Background>
  );
}
