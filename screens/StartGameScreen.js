import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/colors';
import Input from '../components/Input';

const StartGameScreen = props => {
    return(
        <View style={styles.screen}>
            <Text style={styles.title}> Start a New Game! </Text>
            <Card style={styles.inputContainer}>
                <Text> Select a Number</Text>
                <Input />
                <View style={styles.buttonContainer}>
                <Button title="Reset" onPress={() => {}} color={Colors.accent} />

                <Button title="Confirm" onPress={() => {}} color={Colors.primary}/>
                </View>
            </Card>
        </View>

    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center' //align items in the center horizontally

    },
    title: {
        fontSize: 20,
        marginVertical: 10
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
});

export default StartGameScreen;
