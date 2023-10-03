import React, { useEffect } from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';

import navigationServices from '../routes/navigationServices';
import { Colours, Images } from '../res'

const windowWidth = Dimensions.get('window').width;

const Splash = () => {
    useEffect(() => {
        setTimeout(() => {
            navigationServices.navigateReset('NoteList')
        }, 1000);
    }, [])

    return (
        <View style={styles.root}>
            <Image source={Images.logo} width={windowWidth * .6} height={windowWidth * .6} />
            <Text style={styles.text}>OutNotes</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: Colours.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: Colours.quarternary,
        fontSize: 28,
        fontWeight: '500',
    },
});

export default Splash;
