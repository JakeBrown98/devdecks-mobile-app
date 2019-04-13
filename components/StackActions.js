import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Typography from './Typography';
import theme from '../theme';

const propTypes = {

};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: theme.unit * 3,
        width: '100%',
    },
    actionButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.palette.secondary,
        height: theme.unit * 5,
        width: theme.unit * 5,
        borderRadius: theme.unit * 5,
    },
    actionIcon: {
        color: theme.palette.primary,
        fontFamily: theme.font.bold,
    },
});

class StackActions extends React.Component {
    onActionPress = () => {
        console.log('action press');
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={this.onActionPress}
                    style={styles.actionButton}
                >
                    <Typography style={styles.actionIcon}>
                        ?
                    </Typography>
                </TouchableOpacity>
            </View>
        );
    }
}

StackActions.propTypes = propTypes;

export default StackActions;
