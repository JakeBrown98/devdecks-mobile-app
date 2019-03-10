import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableNativeFeedback, TouchableOpacity, StyleSheet } from 'react-native';
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
        backgroundColor: theme.palette.primary,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: theme.unit,
        marginBottom: theme.unit * 2,
        borderRadius: theme.unit,
    },
    textColumn: {
        textAlign: 'left',
    },
    titleText: {
        marginBottom: theme.unit / 2,
    }
});

class StackListItem extends React.Component {
    onItemPress = () => {
        console.log('item press');
    };

    render() {
        const { label, cardAmount } = this.props;

        return (
            <TouchableNativeFeedback
                onPress={this.onItemPress}
            >
                <View style={styles.container}>
                    <View style={styles.textColumn}>
                        <Typography style={styles.titleText}>
                            { label }
                        </Typography>
                        <Typography variant="tiny">
                            { `${cardAmount} cards` }
                        </Typography>
                    </View>
                    <TouchableOpacity
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
        );
    }
}

StackListItem.propTypes = propTypes;
StackListItem.defaultProps = defaultProps;

export default StackListItem;
