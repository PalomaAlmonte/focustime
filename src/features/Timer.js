import React, {useState} from 'react';
import {View,Text,  StyleSheet, Platform, Vibration} from "react-native";
import { ProgressBar } from 'react-native-paper';
import { useKeepAwake } from 'expo-keep-awake';
import {Countdown} from '../components/Countdown';
import {RoundedButton} from '../components/Roundedbutton';
import  {spacing} from '../util/sizes';
import {color} from '../util/color';
import {Timing} from './Timing';

const ONE_SECOND_IN_MS = 1000;

  const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
  ];

export const Timer = ({focusSubject, clearSubject, onTimerEnd}) => {
  useKeepAwake();
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);

  const onEnd = (reset) => {
    Vibration.vibrate(PATTERN);
    setIsStarted(false);
    setProgress(1);
    reset();
    onTimerEnd(focusSubject);
    
  } ;
  return  (
    <View style= {styles.container}> 
      <View style= {styles.countdown}>
        <Countdown 
          minutes = {minutes}
          isPaused = {!isStarted} 
          onProgress = {setProgress} 
          onEnd = {(onEnd)}
        />
        <View style = {{paddingTop: spacing.xxl}}>
          <Text style = {styles.title} >Focusing on :</Text> 
          <Text style = {styles.task} > {focusSubject}</Text> 

        </View>
      
      </View>

      <View style = {{paddingTop : spacing.xxl}}>
        <ProgressBar 
          progress = {progress }
          color = {color.progressBar} 
          style = {{ height: spacing.sm}}
           /> 
      </View>

      <View style= {styles.timingWrapper}> 
        <Timing onChangeTime = {setMinutes} />
      </View>

      <View style= {styles.buttonWrapper}  > 
        {!isStarted ? (
          <RoundedButton title = "Start" onPress = {() => setIsStarted(true)} / >
          ) : (
          <RoundedButton title = "Pause" onPress = {() => setIsStarted(false)} / >
        )}
      </View>

      <View style = {styles.clearbutton} >
        <RoundedButton size = {50} title = "-" onPress = {clearSubject} />
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  clearbutton: {
    justifyContent: 'center',

    flexDirection: 'row'
  },
  countdown: {
    flex: 0.4,
    alignItems : 'center',
    justifyContent: 'center',
    paddingTop: spacing.xxl, 
  },
  timingWrapper: {
    flex: 0.1,
    flexDirection :'row',
    padding: spacing.md, 
  },
  buttonWrapper: {
    flex:0.3,
    flexDirection: 'row',
    padding: spacing.lg,
    justifyContent: 'center',
    
  },
  title: {
   color: color.white,
   fontWeight: 'bold', 
   textAlign: 'center',
  },
  task: {
    color:color.white,
    textAlign: "center",
  },
})