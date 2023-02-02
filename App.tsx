import React from 'react';
import {View} from 'react-native';
import {Agenda, Calendar} from 'react-native-calendars';
// import {NavigationContainer} from '@react-navigation/native';

function App(): JSX.Element {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <Calendar
        markingType={'period'}
        markedDates={{
          '2023-02-15': {marked: true, dotColor: '#50cebb'},
          '2023-02-16': {marked: true, dotColor: '#50cebb'},
          '2023-02-21': {
            startingDay: true,
            color: '#50cebb',
            textColor: 'white',
          },
          '2023-02-22': {color: '#70d7c7', textColor: 'white'},
          '2023-02-23': {
            color: '#70d7c7',
            textColor: 'white',
            marked: true,
            dotColor: 'white',
          },
          '2023-02-24': {color: '#70d7c7', textColor: 'white'},
          '2023-02-25': {endingDay: true, color: '#50cebb', textColor: 'white'},
        }}
      />
    </View>
  );
}

export default App;
