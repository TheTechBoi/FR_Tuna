import React,{useState, useEffect} from 'react';
import Dialog from "react-native-dialog";
import funcFire from '../functions/funcFire'

import { StyleSheet, SafeAreaView,FlatList, View, Text, TouchableOpacity} from 'react-native';

const ListRequest = ({DATA}) => {
    // Set an initializing state whilst Firebase connects
   
    // Handle user state changes
  const [dialogStuation, setDialogStuation] = useState(false)

  function acceptRequest(n){
    funcFire.acceptFriendRequest(n)
    setDialogStuation(false)
  }

  function cancelRequest(n){
    funcFire.cancelFriendRequest(n)
    setDialogStuation(false)
  }

  function itemIdGet(Item){
    return String(Item.id);
  }

  function Item({title}) {
      return (
        <View>
        <Dialog.Container visible={dialogStuation}>
      <Dialog.Title>{title}</Dialog.Title>
          <Dialog.Button label="Quit" onPress={()=> setDialogStuation(false)}/>
          <Dialog.Button label="Accept" onPress={()=> acceptRequest(title)}/>
          <Dialog.Button label="Cancel"  onPress={()=> cancelRequest(title)}/>
        </Dialog.Container>

        <TouchableOpacity onPress={()=> setDialogStuation(true)} style={styles.item} >
          <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
        </View>
      );
    }


  return(
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={ ({item}) => <Item title={itemIdGet(item)}/>}
        keyExtractor={item => item.id}
        />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 1,
      backgroundColor: 'white',
      height: 100,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 15,
    },
});

export default ListRequest;
