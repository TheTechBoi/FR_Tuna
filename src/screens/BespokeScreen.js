import React, {useEffect, useState} from 'react';
import { Text, StyleSheet, View, Button, } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';
import '@react-native-firebase/app'
import firestore from '@react-native-firebase/firestore';
import ItemListComponent from '../components/ItemListComponent'
import funcFire from '../functions/funcFire'

// Read the document for user 'Ada Lovelace':


const BespokeScreen = () => {
  
  const [items, setItems] = useState([]);
  const ref = firestore()
  .collection('users')
  .doc(auth().currentUser.uid)

  
  useEffect(() => {
    return ref.collection('ITEMS').onSnapshot(querySnapshot => {
        const list = [];
        querySnapshot.forEach(doc => {
          Item = doc.data().Item
          if(doc.id != 'none')
          {
          list.push({
            id: doc.id,
            Item,
           });
          setItems(list);
          }
      })
      });
      },[]);

      const logBaba = async () => { //Cemalin aksiyonları

        
        await firestore()
        .collection('users')
        .doc(auth().currentUser.uid)
        .collection('ITEMS')
        .add({
          Item: 'Hamburger',
        })
        
      }
      
  
  

  return(
    <View style={styles.container}>
        <View style={styles.container1}>
          <Text style={styles.text}>Items:</Text>
          <Button title={"Deneme"} onPress={()=> logBaba()}/>
         </View>

        <ItemListComponent DATA={items}/>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    padding: 5,
    
  },
  text2: {
    fontSize: 20,
    padding: 5,
    
  },
  container: {
    flex: 1,
  },
    container1: {
        justifyContent: 'center',
        alignItems: 'center'
    },
  sign_button: {
    
    },
    sign_button_text: {
      textAlign: 'center',
      color: '#000000'
    }
});

export default BespokeScreen;
