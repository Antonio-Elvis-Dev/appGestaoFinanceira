import { View, Text } from "react-native";
import React, { useMemo } from "react";
import { Label, Container, Balance } from "./styles";
export default function BalanceItem({ data }) {
  // console.log(data)
  const labelName = useMemo(() => {
    if (data.tag === "saldo") {
      return {
        label: "Saldo atual",
        color: "3b3dbf",
      };
    } else if (data.tag === "receita") {
      return {
        label: "Entradas de hoje",
        color: "00B94A",
      };
    } else if (data.tag === "despesa") {
      return {
        label: `Saídas de hoje`,
        color: "EF463A",
      };
    }
  }, [data]);
  return (
    <Container bg={labelName.color}>
      <Label>{labelName.label}</Label>
      <Balance>R$ {data.saldo}</Balance>
    </Container>
  );
}
