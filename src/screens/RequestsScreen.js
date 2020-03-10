import React, {useEffect, useState} from 'react';
import { Text, StyleSheet, View, Button, } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';
import '@react-native-firebase/app'
import firestore from '@react-native-firebase/firestore';
import ListRequest from '../components/ListRequest'

// Read the document for user 'Ada Lovelace':


const RequestsScreen = () => {

  firestore();
  
  const [requests, setRequests] = useState([]);
  
  const ref = firestore()
        .collection('users')
        .doc(auth().currentUser.uid);

    useEffect(() => {
        return ref.collection('friendRequests').onSnapshot(querySnapshot => {
            const list = [];
            querySnapshot.forEach(doc => {
              console.log(doc.id) 
            if(doc.id != 'none')
              {
              list.push({
                id: doc.id,
               });
              setRequests(list);
             }
          })
          })
      }
      ,[])

      const reqCheck = () => {



      }
      



  
  

  return(
    <View style={styles.container}>
        <View style={styles.container1}>
          <Text style={styles.text}>Requests:</Text> 
          <Button title={"Deneme"} onPress={()=> {}}/>
         </View>

        <ListRequest DATA={requests}/>
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

export default RequestsScreen;
