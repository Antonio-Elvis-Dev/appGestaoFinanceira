import styled from "styled-components";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #f0f4ff;
  align-items: center;
`;

export const Message = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-top: 24px;
`;
export const Name = styled.Text`
  font-size: 24px;
  margin-bottom: 24px;
  margin-top: 8px;
  padding: 0 14px   ;
  color: #121212;

`;

export const NewText = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
`;

export const NewLink = styled.TouchableOpacity`
  width: 90%;
  height: 45px;
  border-radius: 8px;
  background-color: #3b3dbf;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
`;

export const LogoutText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #c62c36;
`;

export const LogoutButton = styled.TouchableOpacity`
  width: 90%;
  height: 45px;
  border-radius: 8px;
  border-width: 2px;
  border-color: #c62c36;
  align-items: center;
  justify-content: center;
`;
