import React from 'react';
import { connect } from 'react-redux';
import { setActiveStack } from '../actions';

import {
    Screen,
    StackListItem,
    FavouriteThumbnail,
    ListSection,
} from '../components';


class DeckSingle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            deckName: null,
            stacks: [],
            favourites: [],
        };
    }

    componentDidMount() {
        const { favourites, navigation: { getParam } } = this.props;
        const stacks = getParam('stacks');
        const deckName = getParam('name');

        this.setState({
            deckName,
            stacks,
            favourites: this.getFavourites(stacks, favourites),
        });
    }

    getFavourites = (stacks, favourites) => {
        const favouriteNames = favourites.map(favourite => favourite.name);

        return stacks.filter(stack => favouriteNames.includes(stack.name));
    }

    onItemPress = ({ questions }) => () => {
        this.props.setActiveStack(questions);

        this.props.navigation.navigate('SingleStack');
    }

    render() {
        return (
            <Screen
                noPadding
                title={this.state.deckName}
                navigation={this.props.navigation}
            >
                <ListSection
                    title="Your Favourites"
                    list={this.state.favourites}
                    horizontal
                    renderItem={item =>
                        <FavouriteThumbnail
                            label={item.name}
                            cardAmount={item.questions.length}
                            onItemPress={this.onItemPress(item)}
                        />
                    }
                />
                <ListSection
                    title="All Stacks"
                    list={this.state.stacks}
                    renderItem={item =>
                        <StackListItem
                            label={item.name}
                            cardAmount={item.questions.length}
                            onItemPress={this.onItemPress(item)}
                        />
                    }
                />
            </Screen>
        );
    }
}

const mapStateToProps = ({ app }) => ({
    favourites: app.favourites,
});

export default connect(mapStateToProps, { setActiveStack })(DeckSingle);
