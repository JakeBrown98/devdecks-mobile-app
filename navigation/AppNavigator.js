import { createDrawerNavigator, createAppContainer, } from 'react-navigation';
import AllDecks from '../screens/AllDecks';
import Favourites from '../screens/Favourites';
import DeckSingle from '../screens/DeckSingle';
import SingleStack from '../screens/SingleStack';
import StyleGuide from '../screens/StyleGuide';
import Settings from '../screens/Settings';
import CustomDrawer from './CustomDrawer';
// import MarkdownScreen from '../screens/MarkdownScreen';

const AppDrawerNavigator = createDrawerNavigator(
    {
        DeckSingle,
        SingleStack,
        StyleGuide,
        AllDecks,
        Favourites,
        Settings,
        // MarkdownScreen,
    },
    {
        contentComponent: CustomDrawer,
    }
);

export default createAppContainer(AppDrawerNavigator);
