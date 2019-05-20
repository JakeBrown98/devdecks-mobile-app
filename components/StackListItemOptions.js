import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, ActivityIndicator, AsyncStorage, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { addStackToFavourites, removeStackFromFavourites } from '../actions';
import { FAVOURITE_STACKS } from '../constants';
import Typography from './Typography';
import theme from '../theme';


const propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string.isRequired,
        questions: PropTypes.array.isRequired,
        disabled: PropTypes.bool,
    }),
    onFavouriteChangeComplete: PropTypes.func.isRequired,
    isFavourite: PropTypes.bool.isRequired,
};

const defaultProps = {
    item: {
        name: '',
        questions: [],
    },
    onFavouriteChangeComplete: () => {},
    isFavourite: false,
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.palette.tertiary,
        marginLeft: theme.unit * 4,
        marginRight: theme.unit * 4,
        borderBottomLeftRadius: theme.unit,
        borderBottomRightRadius: theme.unit,
    },
    optionsWrapper: {
        padding: theme.unit,
    },
});

class StackListItemOptions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
        };
    }

    onItemPress = () => {
        const { item, isFavourite } = this.props;

        this.setState({ loading: true });

        return isFavourite ? this.removeFromFavourites(item.name) : this.addToFavourites(item);
    }

    addToFavourites = async (stack) => {
        try {
            let newFavourites = null;
            let dataHasChanged = false;
            const { name } = stack;
            const value = await AsyncStorage.getItem(FAVOURITE_STACKS);

            if (value === null) {
                newFavourites = [name];
                dataHasChanged = true;
            } else {
                const favouritesInStorage = JSON.parse(value);

                if (!favouritesInStorage.includes(name)) {
                    newFavourites = [...favouritesInStorage, name];
                    dataHasChanged = true;
                }
            }

            if (dataHasChanged) {
                await AsyncStorage.setItem(FAVOURITE_STACKS, JSON.stringify(newFavourites));
            }
        } catch (error) {
            console.log(error);
        }

        this.setState({ loading: false });

        this.props.onFavouriteChangeComplete();
        this.props.addStackToFavourites(stack);
    }

    removeFromFavourites = async (stackName) => {
        try {
            const value = await AsyncStorage.getItem(FAVOURITE_STACKS);
            const favouritesInStorage = JSON.parse(value);

            if (value !== null && favouritesInStorage.includes(stackName)) {
                const data = favouritesInStorage.filter(existingName => existingName !== stackName);

                await AsyncStorage.setItem(FAVOURITE_STACKS, JSON.stringify(data));
            }
        } catch (error) {
            console.log(error);
        }

        this.setState({ loading: false });

        this.props.onFavouriteChangeComplete();
        this.props.removeStackFromFavourites(stackName);
    }

    render() {
        const { loading } = this.state;
        const { isFavourite } = this.props;

        return (
            <View style={styles.container}>
                <TouchableOpacity disabled={loading} onPress={this.onItemPress}>
                    <View style={styles.optionsWrapper}>
                        {
                            loading
                            ? <ActivityIndicator size="small" color={theme.palette.primary} />
                            : <Typography variant="small">
                                { isFavourite ? 'Remove from favourites' : 'Add to favourites' }
                            </Typography>
                        }
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

StackListItemOptions.defaultProps = defaultProps;
StackListItemOptions.propTypes = propTypes;

export default connect(null, { addStackToFavourites, removeStackFromFavourites })(StackListItemOptions);
