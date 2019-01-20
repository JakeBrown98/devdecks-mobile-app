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
        alignItems: 'center',
        backgroundColor: theme.palette.light,
        paddingBottom: theme.unit,
        paddingTop: theme.unit,
        borderRadius: 3,
    },
    label: {
        color: theme.palette.white,
    },
});

const Button = ({ label, onPress }) => {
    return (
        <TouchableNativeFeedback
            onPress={onPress}
        >
            <View style={styles.button}>
                <Typography style={styles.label}>
                    { label }
                </Typography>
            </View>
        </TouchableNativeFeedback>
    );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
