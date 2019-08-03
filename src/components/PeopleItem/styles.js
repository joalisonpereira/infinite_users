import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  background-color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image.attrs({
  aspectRatio: 1
})`
  border-radius: 50px;
  width: 45px;
  height: 45px;
  margin-right: 10px;
`;

export const Title = styled.Text`
  padding: 5px 0;
  font-size: 15px;
  color: #222;
`;

export const Subtitle = styled.Text`
  padding-bottom: 5px;
  font-size: 12px;
  color: #888;
`;

export const Gender = styled(Icon).attrs({
  name: 'face'
})`
  position: absolute;
  top: 5px;
  right: 0px;
  font-size: 20px;
  color: ${({sex}) => sex === 'male' ? '#1CACF4' : '#FC6C8C'};
`;