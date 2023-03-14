import { View, Text } from "react-native";
import React, { createContext, useState } from "react";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState({
    nome: "elvis",
  });

async function signUp(nome, email, password){
  console.log(`${Email} = ${password} = ${nome}`)
}

  return (
    <AuthContext.Provider value={{ user, signUp }}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
