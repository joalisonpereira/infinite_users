import React from 'react';
import { View } from 'react-native';
import { Container, Row, Title, Subtitle, Avatar, Gender } from './styles';

export default function PeopleItem({people}) {
  return (
    <Container>
      <Row>
        <Avatar source={{uri: people.picture}}/>
        <View>
          <Title>{people.name}</Title>
          <Subtitle>{people.email}</Subtitle>
        </View>
        <Gender sex={people.gender}/>
      </Row>
    </Container>
  );
}
