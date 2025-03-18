import React from 'react';
import { View, Text, TextInput, ImageBackground } from 'react-native';
import { SafeAreaProvider} from 'react-native-safe-area-context';
import { styles } from './styles';
import Button from '@/src/components/button';


 function Login() {



  return (
    <SafeAreaProvider style={styles.container}>
       
       <ImageBackground source={require('../../../assets/images/fundo.png')} resizeMode="cover" />
      <Text style={styles.text}> Login  </Text>
      <View style={styles.inputContainer}>
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Senha" />
      </View>
      <Text> Esqueceu sua senha? </Text>
      <Button title="Entrar" onPress = {() => {}} />
        <Text> Criar uma nova conta ? </Text>
        
    </SafeAreaProvider>
  );
};


export default Login;

