import React, { useState, useEffect } from 'react';
import { useNetInfo } from "@react-native-community/netinfo";
import { Container, Row, Title, List } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PeopleItem from '~/components/PeopleItem';
import api from '~/services/api';

export default function Main() {
  const [peoples, setPeoples] = useState([]);

  const [page, setPage] = useState(1);

  // const netInfo = useNetInfo();

  useEffect(() => {
    // if(netInfo.isConnected) 
    fetchPeoples()
  },[]);

  async function fetchPeoples(){
    const { data: { results } } = await api.get(`/?page=${page}&results=21`);
    setPeoples([...peoples, ...results]);
    setPage(page + 1);
  }

  return (
    <Container>
      <Row>
        <Icon name="face" style={{fontSize: 25}} color="#FFF"/>
        <Title>Infinite Peoples</Title>
      </Row>
      <List
        data={peoples}
        keyExtractor={item => String(item.login.sha1)}
        keyboardShouldPersistTaps="handled"
        renderItem={({item}) => <PeopleItem people={item}/>}
        onEndReached={fetchPeoples}
        onEndReachedThreshold={0.1}
      />
    </Container>
  );
}
