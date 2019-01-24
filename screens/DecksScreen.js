import React from 'react';
import _ from 'lodash';
import { Screen, DeckThumbnail, DeckIcon } from '../components';
import data from '../data/index';

class DecksScreen extends React.Component {
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
    }

    render() {
        return (
            <Screen title="All Decks" {...this.props}>
                { data.map(item => this.renderThumbnail(item)) }
            </Screen>
        );
    }
}

export default DecksScreen;
