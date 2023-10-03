import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import navigationServices from '../routes/navigationServices';

const NoteAdd = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>Note Add Screen</Text>
      <Button title={'Note List'} onPress={() => navigationServices.navigate('NoteList')} />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#262626',
    fontSize: 24,
    margin: 10,
  }
});

export default NoteAdd;
