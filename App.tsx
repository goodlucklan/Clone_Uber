import TabNavigator from './src/navigation/TabNavigator';
import {NavigationContainer} from '@react-navigation/native';
import { Text, View } from 'react-native';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <TabNavigator/>
    </NavigationContainer>
  );
}

export default App;
