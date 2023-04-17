import {} from "react-native";
import React from "react";
import { Container, Text, Tipo, IconView, TipoText, ValorText } from "./styles";

import Icon from "@expo/vector-icons/Feather";

export default function HistoricoList({ data }) {
  //   console.log(data.type)
  return (
    <Container>
      <Tipo>
        <IconView tipo={data.type}>
          <Icon
            name={data.type === "despesa" ? "arrow-down" : "arrow-up"}
            size={20}
            color="#fff"
          />
          <TipoText>{data.type}</TipoText>
        </IconView>
      </Tipo>
      <ValorText>{data.value}</ValorText>
    </Container>
  );
}
