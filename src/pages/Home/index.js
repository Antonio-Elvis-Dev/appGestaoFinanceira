import React, { useContext, useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";

// import { AuthContext } from "../../contexts/auth";
import { Background, ListBalance, Area, Title, List } from "./styles";
import Header from "../../components/Header";

import api from "../../services/api";

import { useIsFocused } from "@react-navigation/native";

import { format } from "date-fns";
import BalanceItem from "../../components/BalanceItem";

import Icon from "@expo/vector-icons/MaterialIcons";
import HistoricoList from "../../components/HistoricoList";

export default function Home() {
  const isFocused = useIsFocused();

  const [listBalance, setListBalance] = useState([]);
  const [dateMovements, setDateMovements] = useState(new Date());
  const [movements, setMovements] = useState([]);

  useEffect(() => {
    let isActive = true; // melhora o desempenho: monta os dados ao abrir d tela

    async function getMovements() {
      let dateFormated = format(dateMovements, "dd/MM/yyyy");

      const receives = await api.get("/receives", { // pega as movimentações
        params: {
          date: dateFormated,
        },
      });

      const balance = await api.get("/balance", {
        params: {
          date: dateFormated,
        },
      });
      if (isActive) {
        setListBalance(balance.data);
        setMovements(receives.data); // salva as movimentações em Movements
      }
    }
    getMovements();

    return () => {
      isActive = false; // melhora o desempenho: desmonta os dados ao mudar de tela
    };
  }, [isFocused]);

  return (
    <Background>
      <Header title="Minhas Movimentações" />

      <ListBalance
        data={listBalance}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtrator={(item) => item.tag}
        renderItem={({ item }) => <BalanceItem data={item} />}
      />

      <Area>
        <TouchableOpacity>
          <Icon name="event" size={30} color="#121212" />
        </TouchableOpacity>
        <Title>Ultimas Movimentações</Title>
      </Area>
      <List
        data={movements}
        keyExtrator={item => item.id}
        renderItem={({ item }) => <HistoricoList data={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBotton:20}}
      />
    </Background>
  );
}
