import { createStackNavigator, createDrawerNavigator, createAppContainer, } from 'react-navigation';
import AllDecks from '../screens/AllDecks';
import Favourites from '../screens/Favourites';
import DeckSingle from '../screens/DeckSingle';
import SingleStack from '../screens/SingleStack';
// import Settings from '../screens/Settings';
import AppDrawer from './AppDrawer';
import AnswerScreen from '../screens/AnswerScreen';

const DeckRoutes = createStackNavigator(
    {
        Decks: AllDecks,
        Deck: DeckSingle,
        SingleStack: SingleStack,
        Answer: AnswerScreen,
    },
    {
        headerMode: 'none',
    },
);

const DrawerNavigator = createDrawerNavigator(
    {
        Decks: {
            screen: DeckRoutes,
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
    },
    {
        contentComponent: AppDrawer,
    },
);

export default createAppContainer(DrawerNavigator);
