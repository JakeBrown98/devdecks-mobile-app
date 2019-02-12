import { createDrawerNavigator, createAppContainer, } from 'react-navigation';
import CustomDrawer from './CustomDrawer';
import DecksScreen from '../screens/DecksScreen';
import StackScreen from '../screens/StackScreen';
import SettingsScreen from '../screens/SettingsScreen';
import StyleGuide from '../screens/StyleGuide';
import MarkdownScreen from '../screens/MarkdownScreen';
import theme from '../theme';

const AppDrawerNavigator = createDrawerNavigator(
    {
        StackScreen,
        StyleGuide,
        MarkdownScreen,
        DecksScreen,
    },
    {
        contentComponent: CustomDrawer,
    }
);

export default createAppContainer(AppDrawerNavigator);
