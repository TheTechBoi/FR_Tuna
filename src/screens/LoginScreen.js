import React, { useState } from 'react';
import { Text,TextInput, StyleSheet, View,  KeyboardAvoidingView, Image, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';
import { Button } from 'react-native-elements';
import { Input } from 'react-native-elements';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const loginHandle = () => {
    auth().signInWithEmailAndPassword(email, password).catch((e)=>setError(e.message));
  };

  /*async function loginHandle() {
    try {
      await auth().signInWithEmailAndPassword(email, password);
    } catch (e) {
      console.error(e.message);
    }
  }*/
  /*        <Image 
        source={require('../../assets/Cemal1.png')}
        style={styles.cemal2}
      />*/

    return (
    <ScrollView>
    <KeyboardAvoidingView behavior="padding" style={styles.containerN}>
      <View style={styles.imageContainer}>

      </View>
      
      <View style={styles.container}>
      <View style={styles.inputCont}>
      
      <Text style={styles.error_text}>{error}</Text>

      < Input 
          placeholder='mail'
          keyboardType= "email-address"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.T_Input} 
          onChangeText={e => { setEmail(e); }}
          value={email}/>
    
  
      < Input 
          placeholder='password'
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.T_Input} 
          onChangeText={event => { setPassword(event); }}
          value={password}
/>

    </View>
      
    <Button
      title='Login'
      onPress={() => loginHandle()}
      style={styles.button_text}
      />

    <Button
      onPress ={() => navigation.navigate('SignUp')}
      style={styles.sign_button_text}
      title='SignUp'
      type='clear'
      />

  
      </View>
    </KeyboardAvoidingView>
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  containerN: {
    flex: 1
    
  },
  imageContainer:{
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  error_text: {
    padding: 10,
    textAlign: 'center',
    color: '#E83E0C'
    
  },
  inputCont:{
    paddingVertical: 20
  },
  sign_button: {
    
  },
  sign_button_text: {
    textAlign: 'center',
    color: '#000000'
  },
  cemal2: {
    width: 300,
    height: 300
    
  },
  container: {
    padding: 20
    
  },
  T_Input: {
    height: 40,
    backgroundColor: 'rgba(255,196,255,1.0)',
    marginBottom: 20,
    color: '#FFF',
    paddingHorizontal: 10
  },
  text_container: {
    backgroundColor: 'rgba(120,179,120,0.6)',
    padding: 15,
    

  },
  button_text:{
    textAlign: 'center',
    color: '#FFFFFF',
  }, 

});

export default LoginScreen;