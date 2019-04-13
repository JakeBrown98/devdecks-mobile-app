import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableNativeFeedback, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';
import Typography from './Typography';
import StackListItemOptions from './StackListItemOptions';
import * as actions from '../actions';
import theme from '../theme';


const propTypes = {
    onItemPress: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    cardAmount: PropTypes.number.isRequired,
};

const defaultProps = {
    onItemPress: () => {},
    label: '',
    cardAmount: 0,
};

const styles = StyleSheet.create({
    container: {
        marginBottom: theme.unit * 2,
    },
    itemWrapper: {
        backgroundColor: theme.palette.primary,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: theme.unit,
        paddingRight: 0,
        borderRadius: theme.unit,
    },
    textColumn: {
        textAlign: 'left',
    },
    titleText: {
        marginBottom: theme.unit / 2,
    },
    moreButton: {
        padding: theme.unit,
    },
});

class StackListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showOptions: false,
        };
    }

    onMorePress = () => {
        this.setState({ showOptions: !this.state.showOptions });
    }

    handleAddToFavourites = () => {
        this.setState({ showOptions: false });
    }

    render() {
        const { label, cardAmount, onItemPress } = this.props;

        return (
            <View style={styles.container}>
                <TouchableNativeFeedback onPress={onItemPress}>
                    <View style={styles.itemWrapper}>
                        <View style={styles.textColumn}>
                            <Typography style={styles.titleText}>
                                { label }
                            </Typography>
                            <Typography variant="tiny">
                                { `${cardAmount} cards` }
                            </Typography>
                        </View>
                        <TouchableOpacity
                            style={styles.moreButton}
                            onPress={this.onMorePress}
                        >
                            <MaterialIcons
                                name="more-vert"
                                size={theme.unit * 3}
                                color={theme.palette.secondary}
                            />
                        </TouchableOpacity>
                    </View>
                </TouchableNativeFeedback>
                {
                    this.state.showOptions &&
                    <StackListItemOptions handleAddToFavourites={this.handleAddToFavourites} />
                }
            </View>
        );
    }
}

StackListItem.defaultProps = defaultProps;
StackListItem.propTypes = propTypes;

export default connect(null, actions)(StackListItem);
