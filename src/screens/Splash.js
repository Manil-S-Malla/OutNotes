import React, { useEffect } from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';

import { updateNotes } from '../redux/reducers/notes';

import navigationServices from '../routes/navigationServices';
import { Colours, Images } from '../res'

const windowWidth = Dimensions.get('window').width;

const Splash = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        AsyncStorage.getItem('notes')
            .then(value => {
                if (JSON.parse(value) !== null) {
                    dispatch(updateNotes(JSON.parse(value)))
                }
                navigationServices.navigateReset('NoteList');
            })
            .catch(err => {
                console.error(err);
            });
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
