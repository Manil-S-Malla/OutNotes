# [OutNotes](https://github.com/Manil-S-Malla/OutNotes)
OutNotes is a note app created for the React Native assessment of OutCode LLC. It is a simple app that allows users to create, edit and delete notes for a todo app. The app also possesses local storage data persistance capabilities.

## Data Flow of the app.
The app consists of 4 screens. They are as follows
1. Splash screen.
2. Notes List screen.
3. Note Add screen.
4. Note Edit screen.

Notes are stored in a global redux store from which they can be accessed as necessary by the various screens. The screens can also change the data in the store by using the reducers. The reducers also copy the changes to the store to the local storage. Thus the redux store and the local storage are mirrored and persistance of data is acheived. 

The Notes List screen obtains the list of notes from the store and displays them. It also toggles the notes isDone status based on user input and updates the store of the changes. Deletion of the notes is also done on this screen. Finally this screen also serves as the central navigation hub allowing navigation to the Note Add & Edit screens.

The Note Add screen adds a note to the store.

The Note Edit screen takes parameter from the Notes List screen to select a single note from the multitude of notes in the store and updates them based on user input.

The Splash screen takes the persistent data from the local storage and transfers it to the redux store on app start. 

## Preview the App.
![Splash screen](<docs/images/Splash screen.png>)
![Notes List screen](<docs/images/Notes List screen.png>)
![Note Add screen](<docs/images/Note Add screen.png>)
![Edit Note screen](<docs/images/Edit Note screen.png>)

## Download.
The APK of the app is available using this [drive link](https://drive.google.com/file/d/1AJfBjQmz2Dq2XjPqSV_onpFeT_6uNkKw/view?usp=drive_link).

