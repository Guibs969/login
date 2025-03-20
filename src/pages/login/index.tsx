import React from 'react';
import { View, Text, TextInput, ImageBackground, TouchableOpacity } from 'react-native';
import { SafeAreaProvider} from 'react-native-safe-area-context';
import { styles } from './styles';
import Button from '@/src/components/button';


 function Login() {
  function entrar (){
    console.log('O botão entrar foi acionado');

  }


  return (
    <SafeAreaProvider style={styles.container}>
       
       <ImageBackground source={require('../../../assets/images/fundo.png')} resizeMode="cover" />
      <Text style={styles.text}> Login  </Text>
      <View style={styles.inputContainer}>
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput
       style={styles.input}
       placeholder="Senha"
       onChangeText={e=> console.log(e)}
       />
      </View>
      <TouchableOpacity>
      <Text> Esqueceu sua senha? </Text>
      </TouchableOpacity>
      <Button title="Entrar" onPress = {entrar} />
      <TouchableOpacity>
        <Text> Criar uma nova conta ? </Text>
        </TouchableOpacity>
        
    </SafeAreaProvider>
  );
};


export default Login;

