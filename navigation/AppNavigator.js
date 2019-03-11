import { createDrawerNavigator, createAppContainer, } from 'react-navigation';
import AllDecks from '../screens/AllDecks';
import Favourites from '../screens/Favourites';
import DeckSingle from '../screens/DeckSingle';
import SingleStack from '../screens/SingleStack';
import StyleGuide from '../screens/StyleGuide';
import Settings from '../screens/Settings';
import CustomDrawer from './CustomDrawer';
import Answer from '../screens/Answer';

const AppDrawerNavigator = createDrawerNavigator(
    {
        Answer,
        DeckSingle,
        SingleStack,
        StyleGuide,
        AllDecks,
        Favourites,
        Settings,
    },
    {
        contentComponent: CustomDrawer,
    }
);

export default createAppContainer(AppDrawerNavigator);
