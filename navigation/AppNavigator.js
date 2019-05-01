import { createStackNavigator, createDrawerNavigator, createAppContainer, } from 'react-navigation';
import AllDecks from '../screens/AllDecks';
import Favourites from '../screens/Favourites';
import DeckSingle from '../screens/DeckSingle';
import SingleStack from '../screens/SingleStack';
// import Settings from '../screens/Settings';
import AppDrawer from './AppDrawer';
import AnswerScreen from '../screens/AnswerScreen';


const STACK_NAVIGATOR_OPTIONS = {
    headerMode: 'none',
};

const DeckRoutes = createStackNavigator(
    {
        Decks: AllDecks,
        Deck: DeckSingle,
    },
    STACK_NAVIGATOR_OPTIONS,
);

const StackRoutes = createStackNavigator(
    {
        SingleStack: SingleStack,
        Answer: AnswerScreen,
    },
    STACK_NAVIGATOR_OPTIONS,
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
        Stack: {
            screen: StackRoutes,
        }
    },
    {
        contentComponent: AppDrawer,
    },
);

export default createAppContainer(DrawerNavigator);
