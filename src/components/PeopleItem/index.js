import React from 'react';
import { View } from 'react-native';
import { Container, Row, Title, Subtitle, Avatar, Gender } from './styles';

export default function PeopleItem({people}) {
  return (
    <Container>
      <Row>
        <Avatar source={{uri: people.picture.thumbnail}}/>
        <View>
          <Title>{`${people.name.first} ${people.name.last}`}</Title>
          <Subtitle>{people.email}</Subtitle>
        </View>
        <Gender sex={people.gender}/>
      </Row>
    </Container>
  );
}
