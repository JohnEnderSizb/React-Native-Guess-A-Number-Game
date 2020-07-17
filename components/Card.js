import React from 'react';
import { StyleSheet, View } from 'react-native';

function Card(props){
    return(
        <View style={{ ...styles.card, ...props.style}}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        shadowOpacity: 0.26,
        backgroundColor: 'white',
        elevation: 5,
        padding: 20,
        borderRadius: 4,
    },
});

export default Card;