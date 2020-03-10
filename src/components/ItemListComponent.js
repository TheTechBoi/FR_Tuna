import React from 'react';
import { StyleSheet, SafeAreaView,FlatList, View, Text} from 'react-native';

const ItemListComponent = ({DATA}) => {
    // Set an initializing state whilst Firebase connects
   
    // Handle user state changes

  function Item({title}) {

      return (
        <View style={styles.item}>
          <Text style={styles.title}>{title}</Text>
        </View>
      );
    }


  return(
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.Item}/>}
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

export default ItemListComponent;
