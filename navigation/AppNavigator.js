import { createDrawerNavigator, createAppContainer, } from 'react-navigation';
import CustomDrawer from './CustomDrawer';
import StackScreen from '../screens/StackScreen';
import SettingsScreen from '../screens/SettingsScreen';
import StyleGuide from '../screens/StyleGuide';

const AppDrawerNavigator = createDrawerNavigator(
    {
        StyleGuide,
        StackScreen,
    },
    {
        contentComponent: CustomDrawer
    }
);

export default createAppContainer(AppDrawerNavigator);
