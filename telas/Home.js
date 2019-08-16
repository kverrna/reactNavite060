import React, { Fragment, useState, useEffect } from 'react';
import { View, Text, SafeAreaView, StatusBar, Button } from 'react-native';

import { Celula } from "../componentes/visual/index";

const Home = () => {
  const [mensagem, setMensagem] = useState('Ola');
  useEffect(() => {
    setTimeout(() => {
      setMensagem('vai de novo');
    }, 3000);
  }, [mensagem]);
  useEffect(() => {
    setMensagem('Component Did mount simulado');
  }, []);
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View>
          <Text> {mensagem} </Text>
        </View>
        <Celula textLabel="mensagem do texto" />
        <Button title="Clicar" onPress={() => setMensagem("Apagando...")} />
      </SafeAreaView>
    </Fragment>
  );
};

export default Home;
