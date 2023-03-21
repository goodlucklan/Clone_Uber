import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabNavigatorType} from './TabNavigator.interface';
import {Home} from '../screens/Home/Home';
import {Profile} from '../screens/Profile/Profile';
import {List} from '../screens/List/List';
import {Settings} from '../screens/Settings/Settings';
import Icon from '../components/Icon';

const Tab = createBottomTabNavigator<TabNavigatorType>();

const TAB_ICON = {
  Home: 'Home',
  Profile: 'Profile',
  List: 'add-sharp',
  Settings: 'airplane',
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => {
        const iconName = TAB_ICON[route.name];
        return {
          tabBarIcon: () => <Icon name={iconName} size={24} />,
        };
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="List" component={List} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
