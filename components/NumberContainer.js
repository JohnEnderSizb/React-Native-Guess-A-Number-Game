import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import colors from '../constants/colors';

function NumberContainer(props){
    return (
        <View style={style.container}>
            <Text style={style.text}>{props.children}</Text>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: colors.accent,
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: colors.accent,
        fontSize: 22
    }
});

export default NumberContainer;