import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

function GameOverScreen(props){
    return(
        <View style={styles.screen}>
            <Text>Game Over!</Text>
            <Text>Number of rounds: {props.rounds}</Text>
            <Text>The Number Was: {props.userNumber}</Text>
            <Button title="New Game" onPress={props.onRestart}/>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
    }
});

export default GameOverScreen;