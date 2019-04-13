import React from 'react';
import { connect } from 'react-redux';
import { initializeApp } from '../actions';

import { Screen, DeckThumbnail } from '../components';


class AllDecks extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

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
        const { navigation, app: { data } } = this.props;

        if (!data) return null;

        return (
            <Screen title="All Decks" navigation={navigation}>
                { data.map(item => this.renderThumbnail(item)) }
            </Screen>
        );
    }
}

const mapStateToProps = ({ app }) => ({
    app,
});

export default connect(mapStateToProps, { initializeApp })(AllDecks);
