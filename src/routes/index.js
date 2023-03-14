import { View, Text, ActivityIndicator } from "react-native";
import React from "react";

import AurhRoutes from "./auth.routes";


export default function Routes() {
  const loading = false;
  const signed = false;

  return signed ? <View></View> : <AurhRoutes />;
}
