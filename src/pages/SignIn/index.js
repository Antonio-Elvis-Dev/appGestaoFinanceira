import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React from "react";
import {
  AreaImagem,
  AreaInput,
  Button,
  Container,
  Input,
  TextButton,
  TextSignOut,
} from "./styles";

export default function SignIn() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container style={styles.AndroidSafeArea}>
        <AreaImagem>
          <Image
            source={require("../../assets/logo.png")}
            style={{ height: 150, width: 184 }}
          />
        </AreaImagem>
        <AreaInput>
          <Input 
          placeholder="Email"  
          keyboardType='email-address' 
          autoCapitalize="none" />
          <Input 
          placeholder="Senha" 
          secureTextEntry />
        </AreaInput>
        <Button>
          <TextButton>Acessar</TextButton>
        </Button>
        <TouchableOpacity>
          <Text style={{textAlign:"center"}}>Criar conta gratuita</Text>
        </TouchableOpacity>
      </Container>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
