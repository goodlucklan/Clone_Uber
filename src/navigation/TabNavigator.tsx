import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FontAwesome5} from '@expo/vector-icons';
import {TabNavigatorType} from './TabNavigator.interface';
import {Home} from '../screens/Home/Home';
import {Profile} from '../screens/Profile/Profile';
import {List} from '../screens/List/List';
import {Settings} from '../screens/Settings/Settings';

const Tab = createBottomTabNavigator<TabNavigatorType>();
const TAB_ICON: any = {
  Home: 'home',
  Profile: 'user-alt',
  List: 'list',
  Settings: 'info',
};
const createScreenOptions = ({route}: any) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({size, color}: any) => (
      <FontAwesome5 name={iconName} size={size} color={color} />
    ),
  };
};
const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={createScreenOptions}>
      <Tab.Screen name="Home" component={Home} options={{
        tabBarLabel: "Home"
      }} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="List" component={List} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
