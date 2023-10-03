import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Colours, Icons } from '../res'
import navigationServices from '../routes/navigationServices';

import { updateNotes } from '../redux/reducers/notes'

const NoteList = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes.notes);

  const renderItem = ({ item, index }) => {
    const timestamp = `${new Date(item?.timeOfCreation).toDateString()}, ${new Date(item?.timeOfCreation).toLocaleTimeString()}`;
    return (
      <TouchableOpacity
        activeOpacity={.75}
        style={styles.note}
        onPress={() => {
          let tempNotes = [...notes]; // Since the redux state is immutable, attempting to mutate it causes the state to mutate but the dependent components do not re-render. Thus we use the spread operator to create a copy  of the redux state which is mutable.
          tempNotes[index].isDone = !item?.isDone;
          dispatch(updateNotes(tempNotes));
        }}
      >
        <Icons.MaterialIcons
          name={item?.isDone ? 'check-box' : 'check-box-outline-blank'}
          size={40}
          color={item?.isDone ? Colours.primary : Colours.tertiary}
        />

        <View style={styles.containerNoteDetails}>
          <Text style={styles.textNoteTimeStamp}>{timestamp}</Text>
          <Text style={[styles.textNoteDescription, item?.isDone && styles.textNoteDoneDescription]}>{item?.note}</Text>

          <View style={styles.containerNoteBtn}>
            <TouchableOpacity
              activeOpacity={.75}
              style={styles.btnDelete}
              onPress={() => {
                let tempNotes = [...notes].filter((element, indx) => index !== indx); // Since the redux state is immutable, attempting to mutate it causes the state to mutate but the dependent components do not re-render. Thus we use the spread operator to create a copy  of the redux state which is mutable.
                dispatch(updateNotes(tempNotes));
              }}
            ><Text style={styles.textBtnDelete}>Delete</Text></TouchableOpacity>
            <TouchableOpacity
              activeOpacity={.75}
              style={styles.btnEdit}
              onPress={() => {
                navigationServices.navigate('NoteEdit', { note: item, index: index })
              }}
            ><Text style={styles.textBtnEdit}>Edit</Text></TouchableOpacity>

          </View>
        </View>
      </TouchableOpacity>
    )
  };

  return (
    <View style={styles.root}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}><Text style={styles.titleAlt}>All</Text> Notes</Text>
      </View>

      <View style={styles.containerCompletion}>
        <Text style={styles.notesNoTotal}>
          <Text style={styles.notesNoCompleted}>
            {notes?.filter(element => element.isDone === true)?.length}
          </Text>
          /{notes?.length} task{notes?.length > 1 && 's'} done.
        </Text>
        <TouchableOpacity
          activeOpacity={.75}
          style={styles.btnAdd}
          onPress={() => {
            navigationServices.navigate('NoteAdd')
          }}
        >
          <Icons.MaterialIcons
            name={'note-add'}
            size={30}
            color={Colours.quarternary}
          />
        </TouchableOpacity>
      </View>

      <FlatList
        data={notes}
        renderItem={renderItem}
        keyExtractor={(item, index) => `NoteListItem${index}`}
        style={styles.containerList}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={<View style={styles.notesSeparator} />}
        ListFooterComponent={<View height={30} />}
        ListEmptyComponent={<Text style={styles.textEmptyList}>No notes taken yet...</Text>}
      />


    </View>
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

  containerCompletion: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginBottom: 30,
  },
  notesNoTotal: {
    color: Colours.tertiary,
    fontSize: 20,
    fontWeight: '400',
  },
  notesNoCompleted: {
    color: Colours.secondary,
    fontSize: 50,
    fontWeight: '400',
  },

  btnAdd: {
    backgroundColor: Colours.primary,
    padding: 0,
    borderRadius: 100,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  containerList: {
    flex: 1,
    marginHorizontal: 30,
  },
  textEmptyList: {
    color: Colours.primary,
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    padding: 40,
    marginTop: 150,
  },

  note: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },

  containerNoteDetails: {
    flex: 1,
    paddingHorizontal: 12,
  },
  textNoteTimeStamp: {
    color: Colours.tertiary,
    fontSize: 18,
    fontWeight: '600',
  },
  textNoteDescription: {
    color: Colours.secondary,
    fontSize: 20,
    fontWeight: '400',
    paddingVertical: 8,
  },
  textNoteDoneDescription: {
    color: Colours.tertiary,
    fontSize: 18,
    fontStyle: 'italic',
  },

  containerNoteBtn: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingTop: 10,
  },
  btnDelete: {
    backgroundColor: Colours.hexary,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginLeft: 12,
  },
  textBtnDelete: {
    color: Colours.quarternary,
    fontSize: 16,
    fontWeight: '500',
  },
  btnEdit: {
    backgroundColor: Colours.quinary,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginLeft: 12,
  },
  textBtnEdit: {
    color: Colours.quarternary,
    fontSize: 16,
    fontWeight: '500',
  },

  notesSeparator: {
    height: 1,
    backgroundColor: Colours.tertiary,
    marginVertical: 16,
  },
});

export default NoteList;