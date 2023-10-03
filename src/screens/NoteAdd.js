import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { addNote } from '../redux/reducers/notes';

import { Colours } from '../res'
import navigationServices from '../routes/navigationServices';

const NoteAdd = () => {
  const dispatch = useDispatch();

  const [note, setNote] = useState('');

  return (
    <ScrollView
      style={styles.root}
      keyboardShouldPersistTaps={'always'}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.containerTitle}>
        <Text style={styles.title}><Text style={styles.titleAlt}>Add</Text> Notes</Text>
      </View>

      <View style={styles.containerInput}>
        <TextInput
          style={styles.input}
          onChangeText={setNote}
          value={note}
          placeholder="What do you want to do?"
          autoCapitalize={'sentences'}
          cursorColor={Colours.secondary}
          maxLength={256}
          multiline={true}
        />
      </View>

      <View style={styles.containerBtn}>
        <TouchableOpacity
          activeOpacity={.75}
          style={styles.btnCancel}
          onPress={() => {
            navigationServices.navigate('NoteList')
          }}
        ><Text style={styles.textBtnCancel}>Cancel</Text></TouchableOpacity>
        <TouchableOpacity
          activeOpacity={.75}
          style={styles.btnAdd}
          onPress={() => {
            dispatch(addNote({
              note: note,
              isDone: false,
              timeOfCreation: new Date().getTime(),
            }), navigationServices.navigate('NoteList'));
          }}
        ><Text style={styles.textBtnAdd}>Add Note</Text></TouchableOpacity>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },

  containerTitle: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  title: {
    color: Colours.secondary,
    fontSize: 28,
    fontWeight: '300',
  },
  titleAlt: {
    color: Colours.secondary,
    fontSize: 40,
    fontWeight: '300',
  },

  containerInput: {
    marginHorizontal: 30,
    marginTop: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: Colours.tertiary,
    borderRadius: 12,
  },
  input: {
    color: Colours.secondary,
    fontSize: 20,
    fontWeight: '400',
  },

  containerBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 30,
  },
  btnCancel: {
    backgroundColor: Colours.hexary,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
  },
  textBtnCancel: {
    color: Colours.quarternary,
    fontSize: 20,
    fontWeight: '500',
  },
  btnAdd: {
    backgroundColor: Colours.primary,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
  },
  textBtnAdd: {
    color: Colours.quarternary,
    fontSize: 20,
    fontWeight: '500',
  },
});

export default NoteAdd;
