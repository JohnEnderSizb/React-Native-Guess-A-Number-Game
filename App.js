import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [selectedNumber, setselectedNumber] = useState(); 
  const [guessRounds, setguessRounds] = useState(0);

  function configureNewGameHandler(){
    setguessRounds(0);
    setselectedNumber(null);
  }

  function startGameHandler(n){
    setselectedNumber(n);
  }

  function gameOverHandler(n){
    setguessRounds(n);
  }

 
  let content = <StartGameScreen onStartGame={startGameHandler}/>;

  if(selectedNumber && guessRounds <= 0){
    content = <GameScreen userChoice={selectedNumber} onGameOver={gameOverHandler}/>;
  } else if(guessRounds > 0){
    content = <GameOverScreen rounds={guessRounds} onRestart={configureNewGameHandler} userNumber={selectedNumber}/>
  }

  return (
    <View style={styles.screen}>
      <Header title={'Guess A Number'}/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  }
});
