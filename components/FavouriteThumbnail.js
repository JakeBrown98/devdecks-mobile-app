import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableNativeFeedback, Dimensions, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Typography from './Typography';
import theme from '../theme';

const SQUARE_RATIO = (Dimensions.get('window').width / 2) - (theme.unit * 4);

const propTypes = {
    onItemPress: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    cardAmount: PropTypes.number,
    style: PropTypes.object,
};

const defaultProps = {
    onItemPress: () => {},
    label: '',
    cardAmount: 0,
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: theme.palette.primary,
        height: SQUARE_RATIO,
        width: SQUARE_RATIO,
        padding: theme.unit,
        borderRadius: theme.unit,
    },
    labelText: {
        color: theme.palette.white,
    },
    bottomRow: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        position: 'absolute',
        bottom: theme.unit,
        width: '100%',
        marginLeft: theme.unit,
        marginRight: theme.unit,
    },
    cardCountText: {
        color: theme.palette.secondary,
    },
});

class FavouriteThumbnail extends React.Component {
    render() {
        const { cardAmount, label, onItemPress } = this.props;

        return (
            <TouchableNativeFeedback onPress={onItemPress} styles={this.props.styles}>
                <View style={styles.container}>
                    <Typography style={styles.labelText}>
                        { label } 
                    </Typography>
                    <View style={styles.bottomRow}>
                        <Typography variant="tiny" style={styles.cardCountText}>
                            { `${cardAmount} cards` }
                        </Typography>
                        <MaterialIcons
                            name="star"
                            size={theme.unit * 2}
                            color={theme.palette.secondary}
                        />
                    </View>
                </View>
            </TouchableNativeFeedback>
        );
    }
}

FavouriteThumbnail.defaultProps = defaultProps;
FavouriteThumbnail.propTypes = propTypes;

export default FavouriteThumbnail;
