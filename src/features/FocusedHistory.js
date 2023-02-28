import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native'; 
import {color} from '../util/color';
import {fontSize, spacing} from '../util/sizes';
 
export const FocusedHistory = ({history}) => {
   
  if (!history || !history.length) return <Text style = {styles.title} > We havent focused on anything </Text>;
  const renderItem = ({item }) => <Text style = {styles.item} > - {item} </Text>;
  return (
    <View style = {styles.container}> 
      <Text style = {styles.title} > Things we focused on </Text>
      <FlatList data = {history} renderItem = {renderItem}/>
    </View>

  );
} ;

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    flex: 1, 
  },
  item : { 
    fontSize: fontSize.white,
    color : color.white, 
    paddingTop: spacing.sm, 
  },
  title: {
    color: color.white,
    fontSize: fontSize.md,
    padding: spacing.md,
    fontWeight: 'bold'
  },

});