import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { color } from '../util/color';
import {RoundedButton} from '../components/Roundedbutton'
import {spacing} from '../util/sizes'
//useState lets us store values from the app
export const Focus = ({addSubject}) => {
  const [subject, setSubject] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style = {styles.textInput} onChangeText={setSubject} label="What would you like to focus on" />
        <View style= {styles.button}>
          <RoundedButton  title = "+" size = {60} onPress = {() => addSubject(subject)}/>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
  },
  textInput:{
    marginRight: 10, 
    flex: 1
  },
  button: {
    justifyContent: 'center'
  },
  inputContainer: {
    padding: spacing.lg,
    justifyContent: 'top',
    flexDirection: "row"
  },
  
});
