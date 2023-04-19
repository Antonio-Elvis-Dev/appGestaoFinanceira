import { View, Text } from "react-native";
import React, { createContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import api from "../services/api";
export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState('');
  const [loadingAuth, setLoadingAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    async function loadStorage() {
      const storageUser = await AsyncStorage.getItem("@finToken");

      if (storageUser) {
        const response = await api
          .get("/me", {
            headers: {
              Authorization: `Bearer ${storageUser}`,
            },
          })
          .catch(() => {
            setUser(null);
          });
        api.defaults.headers["Authorization"] = `Bearer ${storageUser}`;
        setUser(response.data);
        setLoading(false);
      }
      setLoading(false);
    }
    loadStorage();
  }, []);

  async function signUp(nome, email, password) {
    setLoadingAuth(true);

    try {
      const response = await api.post("/users", {
        name: nome,
        password: password,
        email: email,
      });
      setLoadingAuth(false);

      navigation.goBack();
    } catch (error) {
      console.log(error);
      setLoadingAuth(false);
    }
  }

  async function signIn(email, password) {
    setLoadingAuth(true);
    try {
      const response = await api.post("/login", {
        email,
        password,
      });
      const { id, name, token } = response.data;
      const data = {
        id,
        name,
        token,
        email,
      };

      await AsyncStorage.setItem("@finToken", token); // salvando token do usuario no async storage

      api.defaults.headers["Authorization"] = `Bearer ${token}`; // o token do usuário é tido como default - não cendo necessáro chamar o token em outros locais
      setUser({ id, name, email });
      setLoadingAuth(false);
    } catch (err) {
      console.log("Erro ao logar", err);
      setLoadingAuth(false);
    }
  }

  async function signOut() {
    await AsyncStorage.clear()
      .then(() => {
        setUser(null);
      })
      .catch(() => {});
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        signUp,
        signIn,
        signOut,
        loadingAuth,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
