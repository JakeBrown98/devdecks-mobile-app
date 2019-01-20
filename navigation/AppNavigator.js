import { createDrawerNavigator, createAppContainer, } from 'react-navigation';
import CustomDrawer from './CustomDrawer';
import DeckScreen from '../screens/DeckScreen';
import DeckOverviewScreen from '../screens/DeckOverviewScreen';
import SettingsScreen from '../screens/SettingsScreen';
import StyleGuide from '../screens/StyleGuide';

const AppDrawerNavigator = createDrawerNavigator(
    {
        StyleGuide,
        DeckOverview: DeckOverviewScreen,
        SingleDeck: DeckScreen,
    },
    {
        contentComponent: CustomDrawer
    }
);

export default createAppContainer(AppDrawerNavigator);
