import React, {useEffect, useState} from 'react';
import { Text, StyleSheet, View, Button, } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';
import '@react-native-firebase/app'
import firestore from '@react-native-firebase/firestore';
import NameListComponent from '../components/NameListComponent'

// Read the document for user 'Ada Lovelace':


const FriendsScreen = () => {
  
  const [friends, setFriends] = useState([]);

  const ref = firestore()
  .collection('users')
  .doc(auth().currentUser.displayName)
  
  useEffect(() => {
    return ref.collection('friends').onSnapshot(querySnapshot => {
        const list = [];
        querySnapshot.forEach(doc => {
        if(doc.id != 'none')
          {
          list.push({
            id: doc.id,
           });
          setFriends(list);
         }
      })
      });
      },[]);
      
  
  

  return(
    <View style={styles.container}>
        <View style={styles.container1}>
          <Text style={styles.text}>Requests:</Text>
          <Button title={"Deneme"} onPress={()=> {}}/>
         </View>

        <NameListComponent DATA={friends}/>
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

export default FriendsScreen;
