import React from 'react';
import { Animated, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { setActiveStack } from '../actions';
import theme from '../theme';

import {
    Screen,
    Typography,
    StackListItem,
    FavouriteThumbnail,
    ListSection,
    RefreshSpinner,
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
            favouriteNames: [],
            refreshing: false,
        };
        this.allStacksOpacity = new Animated.Value(0);
    }

    componentDidMount() {
        const { navigation: { getParam } } = this.props;
        const stacks = getParam('stacks');
        const deckName = getParam('name');

        this.setState({
            deckName,
            stacks,
        }, this.getFavourites);
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            this.getFavouriteNames();
        }
    }

    getFavourites = () => {
        this.getFavouriteNames(() => {
            const { stacks, favouriteNames } = this.state;

            this.setState({
                favourites: stacks.filter(stack => favouriteNames.includes(stack.name)),
            });
        });

        return true;
    }

    getFavouriteNames = callback => {
        this.setState({
            favouriteNames: this.props.favourites.map(favourite => favourite.name),
        }, callback);
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

    animateInAllStacks = () => {
        Animated.timing(this.allStacksOpacity, {
            duration: theme.animation.duration,
            toValue: 1,
        }).start();
    }

    onRefresh = () => {
        this.setState({ refreshing: true }, () => {
            if (this.getFavourites()) {
                this.setState({ refreshing: false });
            }
        });
    }

    render() {
        const { deckName, favourites, favouriteNames, stacks, refreshing } = this.state;

        return (
            <Screen
                noPadding
                title={deckName}
                navigation={this.props.navigation}
                refreshControl={
                    <RefreshSpinner
                        refreshing={refreshing}
                        onRefresh={this.onRefresh}
                    />
                }
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
                    wrapperStyle={{ opacity: this.allStacksOpacity }}
                    renderOption={() =>
                        <Typography
                            variant="tiny"
                            onPress={this.onAllStacksOptionPress}
                            style={styles.optionText}
                        >
                            View All
                        </Typography>
                    }
                    renderItem={(item, index) =>
                        <StackListItem
                            item={item}
                            isFavourite={favouriteNames.includes(item.name)}
                            onItemPress={this.onItemPress(item)}
                            animateInSection={this.animateInAllStacks}
                            itemIndex={index}
                        />
                    }
                />
            </Screen>
        );
    }
}

const mapStateToProps = ({ favourites }) => ({
    favourites: favourites.list,
});

export default connect(mapStateToProps, { setActiveStack })(DeckSingle);
