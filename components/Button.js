import React from 'react';
import PropTypes from 'prop-types';
import { TouchableNativeFeedback, View, StyleSheet } from 'react-native';
import Typography from './Typography';
import theme from '../theme';

const propTypes = {
    label: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
};

const defaultProps = {
    onPress: () => {},
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: theme.palette.primary,
        paddingBottom: theme.unit,
        paddingTop: theme.unit,
        borderRadius: theme.unit * 5,
    },
    label: {
        textAlign: 'center',
        color: theme.palette.white,
    },
});

const Button = ({ label, onPress }) => {
    return (
        <TouchableNativeFeedback
            onPress={onPress}
            style={styles.button}
        >
            <View style={styles.button}>
                <Typography style={styles.label}>
                    { label.toUpperCase() }
                </Typography>
            </View>
        </TouchableNativeFeedback>
    );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
