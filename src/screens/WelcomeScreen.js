import React, {useState} from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth';
import DialogInput from 'react-native-dialog-input';
import funcFire from '../functions/funcFire';
import { Button } from 'react-native-elements';

const WelcomeScreen = ({ navigation: { navigate }}) => {
  const [dialogVisible, setDialogVisible] = useState(false);
  const [friendReturn, setFriendReturn] = useState("");


  const SignOut = () => {
    auth().signOut();
  };

  const addingFriend = (friendName) => {
    funcFire.addFriend(friendName).then(() => {
      setFriendReturn(funcFire.ADDresult)
    })
    
  }

  const addFriendClose = () => {
    setFriendReturn("")
    setDialogVisible(false)
    console.log('byee')
  }


  return(
    <View style={styles.container}>
      <Text style={styles.text}>Welcome {auth().currentUser.displayName}</Text>

      <Button
      title='Go To BespokeScreen'
      style={styles.main_button_text}
      onPress={()=>navigate("Bespoke")}
      />

          <DialogInput isDialogVisible={dialogVisible}
            title={"Add Friend"}
            message={friendReturn}
            hintInput={'FriendName'}
            cancelText={'Close'}
            submitText={'Add'}
            submitInput={e =>  addingFriend(String(e))}
            closeDialog={() => addFriendClose()}>
          </DialogInput>
      

      <Button
      title='Go To Friends'
      style={styles.main_button_text}
      onPress={()=>navigate("Friends")}
      />

      <Button
      title='Add Friend'
      style={styles.main_button_text}
      onPress={()=>setDialogVisible(true)}
      />

      <Button
      title='Go To Requests'
      style={styles.main_button_text}
      onPress={()=>navigate("Requests")}
      />

      <Button
      title='Logout'
      style={styles.main_button_text}
      onPress={()=>SignOut()}
      />
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
    },
      main_button: {
        backgroundColor: 'rgba(120,179,120,0.8)',
        padding: 15,
    },
      sign_button: {
        padding: 30
    },
      sign_button_text: {
        textAlign: 'center',
        color: '#000000'
      },
      main_button_text: {
        fontSize: 15,
        textAlign: 'center',
        color: '#000000',
        padding: 2
    }
});

export default WelcomeScreen;
