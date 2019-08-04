import React, { useState, useEffect } from 'react';
import { Container, Row, Title, List } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PeopleItem from '~/components/PeopleItem';
import api from '~/services/api';
import getRealm from '~/services/realm';

export default function Main() {
  const [peoples, setPeoples] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchPeoples()
  },[]);
  
  async function fetchPeoples(){
    try{
      const { data: { results } } = await api.get(`x/?page=${page}&results=20`);
      
      const realmPeoples = results.map(item => ({
        id: Number(Math.random().toString().replace('.','')),
        gender: item.gender,
        name: `${item.name.first} ${item.name.last}`,
        login: item.login.sha1,
        email: item.email,
        picture: item.picture.thumbnail,
      }));

      setPeoples([...peoples, ...realmPeoples]);
      savePeoples(realmPeoples);
      setPage(page + 1);
    }catch(err){
      const realm = await getRealm();
      const realmPeoples = realm.objects('People');
      setPeoples(realmPeoples);
    }
  }

  async function savePeoples(peoples){
    const realm = await getRealm();
    realm.write(() => {
      peoples.forEach(people => realm.create('People', people))
    })
  }

  return (
    <Container>
      <Row>
        <Icon name="face" style={{fontSize: 25}} color="#FFF"/>
        <Title>Infinite Peoples</Title>
      </Row>
      <List
        data={peoples}
        keyExtractor={item => String(item.login)}
        keyboardShouldPersistTaps="handled"
        renderItem={({item}) => <PeopleItem people={item}/>}
        onEndReached={fetchPeoples}
        onEndReachedThreshold={0.1}
      />
    </Container>
  );
}
