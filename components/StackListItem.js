import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableNativeFeedback, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';
import Typography from './Typography';
import * as actions from '../actions';
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
        paddingRight: 0,
        marginBottom: theme.unit * 2,
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
    }
});

class StackListItem extends React.Component {
    onItemPress = () => {
        console.log('item press');
    };

    onMorePress = () => {
        const { id, label, cardAmount } = this.props;

        this.props.showStackPopup({
            id, label, cardAmount
        });
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
        );
    }
}

StackListItem.defaultProps = defaultProps;
StackListItem.propTypes = propTypes;

export default connect(null, actions)(StackListItem);
