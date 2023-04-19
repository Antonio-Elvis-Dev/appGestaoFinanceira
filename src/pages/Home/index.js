import React, { useContext, useEffect, useState } from "react";
import { TouchableOpacity, Modal } from "react-native";

// import { AuthContext } from "../../contexts/auth";
import { Background, ListBalance, Area, Title, List } from "./styles";
import Header from "../../components/Header";

import api from "../../services/api";

import { useIsFocused } from "@react-navigation/native";

import { format } from "date-fns";
import BalanceItem from "../../components/BalanceItem";

import Icon from "@expo/vector-icons/MaterialIcons";
import HistoricoList from "../../components/HistoricoList";
import CalendarModal from "../../components/CalendarModal";

export default function Home() {
  const isFocused = useIsFocused();

  const [listBalance, setListBalance] = useState([]);
  const [dateMovements, setDateMovements] = useState(new Date());
  const [movements, setMovements] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    let isActive = true; //TODO: melhora o desempenho: monta os dados ao abrir d tela

    async function getMovements() {
      let date = new Date(dateMovements);
      let onlyDate = date.valueOf() + date.getTimezoneOffset() * 60 * 1000;
      let dateFormated = format(onlyDate, "dd/MM/yyyy");
      const receives = await api.get("/receives", {
        // pega as movimentações
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
        setMovements(receives.data); //TODO: salva as movimentações em Movements
      }

    }
    getMovements();

    return () => {
      isActive = false; // melhora o desempenho: desmonta os dados ao mudar de tela
    };
  }, [isFocused, dateMovements]); //TODO: quando do dateMovements é atualizado o useefect faz uma nova requisição a api

  async function handleDelete(id) {
    // TODO: função que deleta um registro sondo passada como propriedade no HistoricoList
    try {
      await api.delete("/receives/delete", {
        params: {
          item_id: id,
        },
      });
      setDateMovements(new Date()); //TODO: seta uma nova data para datemovements
    } catch (error) {
      console.log(error);
    }
  }

  function filterDateMovements(dateSelected) {
    setDateMovements(dateSelected);
  }
  // console.log(dateMovements)
  return (
    <Background>
      <Header title="Minhas Movimentações" />

      <ListBalance
        data={listBalance}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtrator={(item) => item.tag}
        renderItem={({ item }) => <BalanceItem data={item}  />}
      />

      <Area>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Icon name="event" size={30} color="#121212" />
        </TouchableOpacity>
        <Title>Ultimas Movimentações</Title>
      </Area>

      <List
        data={movements}
        keyExtrator={(item) => item.id}
        renderItem={({ item }) => (
          <HistoricoList data={item} deleteItem={handleDelete} />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBotton: 20 }}
      />
      <Modal visible={modalVisible} animationType="slide" transparent>
        <CalendarModal
          setVisible={() => setModalVisible(false)}
          handleFilter={filterDateMovements}
        />
      </Modal>
    </Background>
  );
}
