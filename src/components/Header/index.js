import { View, Text } from "react-native";
import React from "react";

import { useNavigation } from "@react-navigation/native";

import { Container, Title, ButtonMenu } from "./styles";
import Icon from "@expo/vector-icons/Feather";

export default function Header({ title }) {
  const navigation = useNavigation();

  return (
    <Container>
      <ButtonMenu onPress={() => navigation.openDrawer()}>
        <Icon name="menu" size={35} color="#121212" />
      </ButtonMenu>
      {title && <Title>{title}</Title>}
    </Container>
  );
}
