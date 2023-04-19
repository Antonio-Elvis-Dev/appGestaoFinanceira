import { Alert, TouchableWithoutFeedback, View,Text } from "react-native";
import React from "react";
import { Container, Tipo, IconView, TipoText, ValorText } from "./styles";

import Icon from "@expo/vector-icons/Feather";

export default function HistoricoList({ data, deleteItem }) {
  function handleDeleteItem() {
    Alert.alert("Atenção", "Você deseja deletar esse registro?", [
      {
        text: "Cancelar",
        style: "cancel",
      },
      {
        text: "Continuar",
        onPress: () => deleteItem(data.id), // passando o id do item clicado para a função handleDelete
      },
    ]);
  }

  return (
    <TouchableWithoutFeedback onLongPress={handleDeleteItem}>
      <Container>
        <View style={{ marginRight: 12 }}>
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
        </View>
        <View style={{justifyContent:"center", alignItems:"flex-start"}}>
          <Text style={{fontSize:18}}>Descrição</Text>
          <Text style={{fontSize:20, fontWeight:"bold"}}>{data.description}</Text>
        </View>
      </Container>
    </TouchableWithoutFeedback>
  );
}
