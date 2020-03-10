import React from 'react';
import { Text, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';

const LoginForm = ({EmailSet, PasswordSet}) => {
    return (
      <View style={styles.container}>
      
      <TextInput 
          placeholder='mail'
          placeholderTextColor= 'rgba(255,255,255,1.0)'
          keyboardType= "email-address"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.T_Input} />
    
  
      <TextInput 
          placeholder='password'
          placeholderTextColor= 'rgba(255,255,255,1.0)'
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.T_Input} />

      
      <TouchableOpacity style={styles.text_container}>
        <Text style={styles.button_text}>Login</Text>
      </TouchableOpacity>
  
      </View>
  
    );
  };
  
  const styles = StyleSheet.create({
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
      color: '#FFFFFF'
    }, 

  });
  
  export default LoginForm;