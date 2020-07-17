"use strict"
import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/colors';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';

function StartGameScreen(props) {
    const [enteredValue, setenteredValue] = useState('');
    const [confirmed, setconfirmed] = useState(false);
    const [selectedNumber, setselectedNumber] = useState()
    function numberINputHandler(inputText) {
        setenteredValue(inputText.replace(/[^0-9]/g, ''));
    }

    function resetInputHandler() {
        setenteredValue('');
        setconfirmed(false);
    }

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Ivalid Number',
                'Enter a valid number between 1 and 99',
                [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }])
            return;
        }
        setselectedNumber(chosenNumber);
        setenteredValue('');
        setconfirmed(true);
        Keyboard.dismiss();
    }

    let conFirmedOutPut;

    if (confirmed) {
        conFirmedOutPut = (
            <Card style={styles.summaryContainer}>
                <Text>You Selected</Text>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <Button title="Start Game" onPress={() => props.onStartGame(selectedNumber)}/>
            </Card>
        )
    }



    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start A New Game</Text>
                <Card style={styles.inputContainer}>
                    <Text>Select A Number</Text>
                    <Input
                        style={styles.input} blurOnSubmit
                        autoCorrent={false}
                        keyboardType="number-pad"
                        maxLength={2}
                        onChangeText={numberINputHandler}
                        value={enteredValue}
                    />
                    <View style={styles.btnContainer}>
                        <View style={styles.button}>
                            <Button title="Reset" onPress={resetInputHandler} color={Colors.accent} />
                        </View>
                        <View style={styles.button}>
                            <Button title="Confirm" onPress={confirmInputHandler} color={Colors.primary} />
                        </View>
                    </View>
                </Card>
                {conFirmedOutPut}
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    btnContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    button: {
        width: 100
    },
    input: {
        width: 50,
        textAlign: 'center',
    },
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center',

    }
});

export default StartGameScreen;