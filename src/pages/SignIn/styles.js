import styled from "styled-components";

export const Background = styled.View`
  flex: 1;
  background-color: #f4f0ff;
`;

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  margin-bottom: 25px;
`;

export const AreaInput = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
`;

export const Input = styled.TextInput`
  background-color: #fff;
  width: 90%;
  padding: 10px;
  font-size: 17px;
  color: #121212;
  border-bottom-width: 1px;
  border-bottom-color: #00b94a;
`;

export const SubmitButton = styled.TouchableOpacity`
  width: 90%;
  height: 45px;
  margin-top: 10px;
  border-radius: 8px;
  background-color: #3b3dbf;
  justify-content: center;
  align-items: center;
`;

export const SubmitText = styled.Text`
  font-size: 20px;
  color: #fff; ;
`;

export const Link = styled.TouchableOpacity`
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const TextLink = styled.Text`
  color: #000;
`;
