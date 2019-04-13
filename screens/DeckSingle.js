import React from 'react';
import _ from 'lodash';

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
        const { getParam } = this.props.navigation;
        const stacks = getParam('stacks');

        this.setState({
            deckName: getParam('name'),
            stacks,
            // favourites: listData.filter(item => item.favourite),
        });
    }

    onItemPress = ({ questions }) => () => {
        this.props.navigation.navigate('SingleStack', {
            questions: _.shuffle(questions),
        });
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
                            label={item.label}
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

export default DeckSingle;
