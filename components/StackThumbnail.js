import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableNativeFeedback, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Typography from './Typography';
import theme from '../theme';

const propTypes = {
    label: PropTypes.string.isRequired,
    cardAmount: PropTypes.number,
};

const defaultProps = {
    label: '',
    cardAmount: 0,
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        textAlign: 'center',
        height: theme.unit * 18,
        width: theme.unit * 18,
        padding: theme.unit,
        backgroundColor: theme.palette.secondary,
        borderRadius: theme.roundEdges,
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
});

class StackThumbnail extends React.Component {
    onThumbnailPress = () => {
        console.log(123);
    };

    render() {
        const { cardAmount, label } = this.props;

        return (
            <TouchableNativeFeedback
                onPress={this.onThumbnailPress}
            >
                <View style={styles.container}>
                    <Typography>
                        { label } 
                    </Typography>
                    <View style={styles.bottomRow}>
                        <Typography variant="tiny">
                            { `${cardAmount} cards` }
                        </Typography>
                        <MaterialIcons
                            name="star"
                            size={theme.unit * 2}
                            color={theme.palette.primary}
                        />
                    </View>
                </View>
            </TouchableNativeFeedback>
        );
    }
}

StackThumbnail.defaultProps = defaultProps;
StackThumbnail.propTypes = propTypes;

export default StackThumbnail;
