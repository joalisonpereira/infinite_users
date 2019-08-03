import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs({
  colors: ['#F0F0F0', '#1CACF4', '#1CACF4'],
  start: { x: 0, y: 1 },
  end: { x: 0, y: 0 }
})`
  flex: 1;
  padding: 10px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #FFF;
  margin-left: 10px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false
})`
  margin-top: 10px;
`;
