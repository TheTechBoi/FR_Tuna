import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, View,} from 'react-native';
import auth from '@react-native-firebase/auth';
 

const HomeScreen = ({ navigation: { navigate }}) => {
    // Set an initializing state whilst Firebase connects
   
    // Handle user state changes

   
    useEffect(() => {
      auth().onAuthStateChanged((user) => {
        navigate(user ? "App" : "Auth")
        

    }); }, []);

 

  return(
    <View style={styles.container}>

      <Text style={styles.text}>Selam</Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    padding: 30,
    alignSelf: 'center'
  },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default HomeScreen;
