import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FontAwesome5} from '@expo/vector-icons';
import {TabNavigatorType} from './TabNavigator.interface';
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
const Navigator = () => {};
export default Navigator;
