import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [cep, setCep] = useState(''); //string vazia
  const [end, setEnd] = useState({
    logradouro: '',
    complemento: '',
    unidade: '',
    bairro: '',
    localidade: '',
    uf: '',
    estado: '',
    regiao: '',
    ibge: '',
    gia: '',
    ddd: '',
    siafi: ''
  }); //objeto vazio

  async function buscarCEP(){
    let r = await fetch("https://viacep.com.br/ws/"+cep+"/json/");
    let dados = await r.json();
    setEnd(dados);
  }

  return (
    <View style={styles.container}>
      <Text>Consulte seu CEP ai viu</Text>
      <TextInput
        style={styles.textinput}
        value={cep}
        onChangeText={setCep}
      />
      <Button
        title='Buscar'
        onPress={buscarCEP}
      />
      <Text>{end.logradouro}</Text>
      <Text>{end.complemento}</Text>
      <Text>{end.unidade}</Text>
      <Text>{end.bairro}</Text>
      <Text>{end.localidade}</Text>
      <Text>{end.uf}</Text>
      <Text>{end.estado}</Text>
      <Text>{end.regiao}</Text>
      <Text>{end.ibge}</Text>
      <Text>{end.gia}</Text>
      <Text>{end.ddd}</Text>
      <Text>{end.siafi}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textinput: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: '7px'
  },
  textoutput:{
    color: 'green',
  }
});
