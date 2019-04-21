import React from 'react';
import { connect } from 'react-redux';

import { Screen, DeckThumbnail } from '../components';


class AllDecks extends React.Component {
    onThumbnailPress = ({ name, stacks }) => () => {
        this.props.navigation.navigate('Deck', {
            name, stacks
        });
    }

    renderThumbnail = item => (
        <DeckThumbnail
            key={item.name}
            icon={item.icon}
            name={item.name}
            stacks={item.stacks}
            onThumbnailPress={this.onThumbnailPress(item)}
        />
    )

    render() {
        const { navigation, data } = this.props;

        if (!data) return null;

        return (
            <Screen title="All Decks" navigation={navigation}>
                { data.map(item => this.renderThumbnail(item)) }
            </Screen>
        );
    }
}

const mapStateToProps = ({ app }) => ({
    data: app.data,
});

export default connect(mapStateToProps)(AllDecks);
