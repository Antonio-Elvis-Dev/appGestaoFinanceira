import styled from "styled-components";

export const Container = styled.View`
  flex: 1;
  padding-left: 29px;
  padding-right: 29px;
  justify-content: center;

  padding-bottom: 60px;
`;

export const AreaImagem = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;
`;

export const AreaInput = styled.View``;

export const Input = styled.TextInput`
  width: 100%;
  height: 47px;
  margin-top: 16px;
  border-bottom-width: 1px;
  border-bottom-color: #00b94a;
  padding-left: 12px;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 47px;
  margin-top: 16px;
  margin-bottom: 12px;

  /* border-width: 1px; */
  border-radius: 6px;
  background-color: #3b3dbf;
  justify-content: center;
`;

export const TextButton = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  text-align: center;
`;

