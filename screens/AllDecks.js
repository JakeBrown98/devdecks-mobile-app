import React from 'react';
// import { StyleSheet } from 'react-native';
import { Screen, DeckThumbnail } from '../components';
import data from '../data/index';

class AllDecks extends React.Component {
    static navigationOptions = {
        drawerLabel: 'All Decks'
    };

    renderThumbnail = item => {
        return (
            <DeckThumbnail
                key={item.name}
                {...item}
            />
        );
    };

    render() {
        return (
            <Screen
                title="All Decks"
                {...this.props}
            >
                { data.map(item => this.renderThumbnail(item)) }
            </Screen>
        );
    }
}

export default AllDecks;
