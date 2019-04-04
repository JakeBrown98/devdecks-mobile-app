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
        Decks: {
            screen: AllDecks,
            navigationOptions: {
                drawerLabel: 'All Decks',
            }
        },
        Favourites: {
            screen: Favourites,
            navigationOptions: {
                drawerLabel: 'Favourites'
            },
        },
        Deck: {
            screen: DeckSingle,
            navigationOptions: {
                drawerLabel: () => {},
            },
        },
        SingleStack: {
            screen: SingleStack,
        },
        Answer: {
            screen: Answer,
        },
        Settings: {
            screen: Settings,
        },
        StyleGuide: {
            screen: StyleGuide,
        },
    },
    {
        contentComponent: CustomDrawer,
    },
);

export default createAppContainer(AppDrawerNavigator);
