import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import navigationServices from '../routes/navigationServices';

const Splash = () => {
    useEffect(() => {
        setTimeout(() => {
            navigationServices.navigateReset('NoteList')
        }, 1500);
    }, [])

    return (
        <View style={styles.root}>
            <Text style={styles.text}>Splash Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#1982C4',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#F5FFFF',
        fontSize: 24,
        margin: 10,
    },
});

export default Splash;
