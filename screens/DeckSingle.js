import React from 'react';
import _ from 'lodash';

import {
    Screen,
    StackListItem,
    FavouriteThumbnail,
    ListSection,
} from '../components';

const INITIAL_STATE = {
    deckName: null,
    stacks: [],
    favourites: [],
    loading: true,
};

class DeckSingle extends React.Component {
    state = INITIAL_STATE;

    componentDidMount() {
        this.setData();
    }

    componentDidUpdate(prevProps) {
        if (prevProps === this.props) return;

        this.setData();
    }

    setData = () => {
        this.setState(_.cloneDeep(INITIAL_STATE), () => {
            const { navigation } = this.props;
            const stacks = navigation.getParam('stacks');

            this.setState({
                deckName: navigation.getParam('name'),
                stacks,
                // favourites: listData.filter(item => item.favourite),
            });
        });
    };

    onItemPress = item => () => {
        console.log(item)
    };

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
                            label={item.label}
                            cardAmount={item.cardAmount}
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
                            cardAmount={item.stack.length}
                            onItemPress={this.onItemPress(item)}
                        />
                    }
                />
            </Screen>
        );
    }
}

export default DeckSingle;
