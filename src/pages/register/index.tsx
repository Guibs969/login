import React from 'react';
import { View, Text, TextInput, ImageBackground } from 'react-native';
import { SafeAreaProvider} from 'react-native-safe-area-context';
import { styles } from './styles';
import Button from '@/src/components/button';


 function Login() {



  return (
    <SafeAreaProvider style={styles.container}>
       
       <ImageBackground source={require('../../../assets/images/fundo.png')} resizeMode="cover" />
      <Text style={styles.text}> Cadastro  </Text>
      <View style={styles.inputContainer}>
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Senha" />
      <TextInput style={styles.input} placeholder="Confirme a senha" />
      </View>
      
      <Button title="Registrar-Se" onPress = {() => {}} />
        <Text> Já possuí conta ? </Text>
        
    </SafeAreaProvider>
  );
};


export default Login;

