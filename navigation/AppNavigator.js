import { createDrawerNavigator, createAppContainer, } from 'react-navigation';
import CustomDrawer from './CustomDrawer';
import DecksScreen from '../screens/DecksScreen';
import StackScreen from '../screens/StackScreen';
import SettingsScreen from '../screens/SettingsScreen';
import StyleGuide from '../screens/StyleGuide';
import theme from '../theme';

const AppDrawerNavigator = createDrawerNavigator(
    {
        StyleGuide,
        DecksScreen,
        StackScreen,
    },
    {
        contentComponent: CustomDrawer,
    }
);

export default createAppContainer(AppDrawerNavigator);
