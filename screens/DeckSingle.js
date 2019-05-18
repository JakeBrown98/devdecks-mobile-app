import React from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { setActiveStack, viewAllStacks } from '../actions';
import theme from '../theme';

import {
    Screen,
    Typography,
    StackListItem,
    FavouriteThumbnail,
    ListSection,
} from '../components';


const styles = StyleSheet.create({
    optionText: {
        color: theme.palette.primary,
    },
});

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

    onAllStacksOptionPress = () => {
        let allStacks = { questions: [] };

        this.state.stacks.forEach(stack => {
            allStacks.questions.push(...stack.questions);
        });

        this.onItemPress(allStacks)();
    }

    renderAllStacksOption = () => (
        <Typography
            variant="tiny"
            onPress={this.onAllStacksOptionPress}
            style={styles.optionText}
        >
            View All
        </Typography>
    )

    render() {
        const { deckName, favourites, stacks } = this.state;

        return (
            <Screen
                noPadding
                title={deckName}
                navigation={this.props.navigation}
            >
                <ListSection
                    title="Your Favourites"
                    list={favourites}
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
                    list={stacks}
                    renderOption={this.renderAllStacksOption}
                    renderItem={item =>
                        <StackListItem
                            disabled={item.disabled}
                            isFavourite={favourites.includes(item)}
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

export default connect(mapStateToProps, { setActiveStack, viewAllStacks })(DeckSingle);
