import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, Button, Text, Alert } from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';


function generateRandomBetween(min, max, exclude) {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

function GameScreen(props) {
    const [currentGuess, setcurrentGuess] = useState(generateRandomBetween(1, 100, props.userChoice));
    const currentLow = useRef(1);
    const currentHigh = useRef(100);
    const [rounds, setrounds] = useState(0);

    const { userChoice, onGameOver} = props;


    useEffect(() => {
        if(currentGuess === props.userChoice){
            props.onGameOver(rounds);
        }
    }, [currentGuess, userChoice, onGameOver]);


    function nextGuessHandler(direction) {
        if ((direction === 'lower' && currentGuess < props.userChoice) || (direction === 'higher' && currentGuess > props.userChoice)) {
            Alert.alert("Don't lie!", "That's just wrong.", [{ text: 'Sorry!', style: 'cancel' }]);
            return;
        }
        if(direction === 'lower'){
            currentHigh.current = currentGuess;
        } else {
            currentLow.current = currentGuess;
        }
        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
        setcurrentGuess(nextNumber);
        setrounds(currentRounds => currentRounds + 1);
        
    }


    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <NumberContainer>
                {currentGuess}
            </NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title="LOWER" onPress={nextGuessHandler.bind(this, 'lower')} />
                <Button title="HIGHER" onPress={nextGuessHandler.bind(this, 'higher')} />
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: "center",
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 20,
        width: 300,
        maxWidth: '80%',
    }
});

export default GameScreen;