import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";

import AuthProvider from "./src/contexts/auth";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
        <StatusBar backgroundColor="#f4f0ff" barStyle="dark-content" />
      </AuthProvider>
    </NavigationContainer>
  );
}
