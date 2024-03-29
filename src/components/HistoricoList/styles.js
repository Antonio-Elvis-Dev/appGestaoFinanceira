import styled from "styled-components";

export const Container = styled.View`
  background-color: #f0f3ff;
  border-radius: 6px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 14px;
  padding: 12px;
  flex-direction: row;
  justify-content: space-between;
`;
export const Text = styled.Text`
font-size: 18px;
`;
export const Tipo = styled.View`
  flex-direction: row;
`;
export const IconView = styled.View`
flex-direction: row;
background-color: ${props => props.tipo === 'despesa'?"#c62c36":"#00B94A"};
padding-bottom: 4px;
padding-top: 4px;
padding-left: 8px;
padding-right: 8px;
border-radius: 6px;
`;
export const ValorText = styled.Text`
color: #121212;
font-size: 22px;
margin-bottom: 2px;
`;
export const TipoText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-style: italic;
`;

