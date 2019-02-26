import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Button from './Button';
import Typography from './Typography';
import theme from '../theme';

const propTypes = {

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.palette.tertiary,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        paddingLeft: theme.unit * 3,
        paddingRight: theme.unit * 3,

    },
    buttonWrapper: {
        paddingTop: theme.unit * 2,
        paddingBottom: theme.unit * 2,
    },
    bottomRow: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingBottom: theme.unit * 3,
    },
    barWrapper: {

    },
    actionButton: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    actionButtonText: {
        color: theme.palette.primary,
    },
    actionButtonIcon: {
        marginLeft: theme.unit / 4,
    },
});

class StackActions extends React.Component {
    onButtonPress = e => {
        console.log(e);
    };

    onActionPress = () => {
        console.log('action press');
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.buttonWrapper}>
                    <Button
                        label="Get answer"
                        onPress={this.onButtonPress}
                    />
                </View>
                <View style={styles.bottomRow}>
                    <View style={styles.barWrapper}>
                    </View>
                    <TouchableOpacity
                        onPress={this.onActionPress}
                        style={styles.actionButton}
                    >
                        <Typography
                            variant="tiny"
                            style={styles.actionButtonText}
                        >
                            Next card
                        </Typography>
                        <MaterialIcons
                            name="chevron-right"
                            size={18}
                            color={theme.palette.primary}
                            style={styles.actionButtonIcon}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

StackActions.propTypes = propTypes;

export default StackActions;
