import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';
import Button from '../../components/button';
import { useNavigation } from '@react-navigation/native';


 function Home() {
  const navigation = useNavigation();


  return (
    <View style={styles.container}>
      <View style={styles.container2}>
      <Image source={require('../../../assets/images/Illustration.svg')}  style={styles.image} />
      <Image source={require('../../../assets/images/letreiro.svg')}/>
      <Text style={styles.text}>Gerencie todo estoque de sua empresa em apenas um App</Text>
      <View style={styles.botoes}>
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
      <Button title="Registar-se" onPress={() => navigation.navigate('Register')} />
      </View>
      </View>
    </View>
  );
};

export default Home;



