import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, KeyboardAvoidingView, Image, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import funcFire from '../functions/funcFire';
import { Button } from 'react-native-elements';
import { Input } from 'react-native-elements';


const ref = firestore().collection('users')



const SignUpScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState("");


  const registerHandle = async () => {
    console.log('nolio')
    firestore().collection('names').doc(name).get().then(async(Snapshot)=>{
    if(!Snapshot.exists){
      await auth().createUserWithEmailAndPassword(email, password).catch((e)=>{setError(e.message)});
      auth().onAuthStateChanged(async (user) =>{

          if(user)
          {
            await user.updateProfile({
            displayName: name,
          });
          funcFire.newUserSetUpDB();
          }
    })
  }
  else
    {
      setError("Nickname is used ")
    }
})
}  

/*  <Image 
source={require('../../assets/Cemal2.png')}
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
          placeholder='NickName'
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.T_Input} 
          onChangeText={e => { setName(e); }}
          value={name}/>
      
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
        style={styles.button_text}
        title="SignIn"
        onPress={() => registerHandle()}
      />

      <Button
        onPress ={() => navigation.navigate('Login')}
        style={styles.login_button_text}
        title='Login'
        type='clear'
      />

  
      </View>
    </KeyboardAvoidingView>
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  containerN: {
    flex: 1,
  },
  imageContainer:{
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  cemal2: {
    width: 300,
    height: 300
    
  },
  inputCont:{
    paddingVertical: 20
  }
  ,container: {
    padding: 20
    
  },
  error_text: {
    padding: 10,
    textAlign: 'center',
    color: '#E83E0C'
    
  },
  T_Input: {
    height: 40,
    backgroundColor: 'rgba(255,196,255,1.0)',
    marginBottom: 20,
    color: '#FFF',
    paddingHorizontal: 10
  },
  text_container:
  {
    backgroundColor: 'rgba(120,179,120,0.6)',
    padding: 15,
    

  },
  login_button: {
    
  },
  login_button_text: {
    textAlign: 'center',
    color: '#000000'
  },
  button_text:{
    textAlign: 'center',
    color: '#FFFFFF',
  }, 

});

export default SignUpScreen;