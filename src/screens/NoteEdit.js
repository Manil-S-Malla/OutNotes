import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { updateNotes } from '../redux/reducers/notes';

import { Colours } from '../res'
import navigationServices from '../routes/navigationServices';

const NoteEdit = (props) => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes.notes);

  const passedParams = props?.route?.params;
  const [note, setNote] = useState(passedParams?.note?.note);

  return (
    <ScrollView
      style={styles.root}
      keyboardShouldPersistTaps={'always'}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.containerTitle}>
        <Text style={styles.title}><Text style={styles.titleAlt}>Edit</Text> Note</Text>
      </View>

      <View style={styles.containerInput}>
        <TextInput
          style={styles.input}
          onChangeText={setNote}
          value={note}
          placeholder="Edit your tasks."
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
          style={[styles.btnEdit, note?.length <= 0 && {opacity: 0.6}]}
          onPress={() => {
            let tempNotes = [...notes]; // Since the redux state is immutable, attempting to mutate it causes the state to mutate but the dependent components do not re-render. Thus we use the spread operator to create a copy  of the redux state which is mutable.
            tempNotes[passedParams?.index].note = note;
            dispatch(updateNotes(tempNotes), navigationServices.navigate('NoteList'));
          }}
          disabled= {note?.length <= 0}
        ><Text style={styles.textBtnEdit}>Edit Note</Text></TouchableOpacity>
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
  btnEdit: {
    backgroundColor: Colours.quinary,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
  },
  textBtnEdit: {
    color: Colours.quarternary,
    fontSize: 20,
    fontWeight: '500',
  },
});

export default NoteEdit;
