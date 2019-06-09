import React from 'react';
import PropTypes from 'prop-types';
import { TouchableNativeFeedback, View, StyleSheet } from 'react-native';
import theme from '../theme';


import Typography from './Typography';

const propTypes = {
    label: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    variant: PropTypes.oneOf(['primary', 'secondary']),
};

const defaultProps = {
    label: '',
    onPress: () => {},
    variant: 'primary',
};

const styles = StyleSheet.create({
    button: {
        width: '100%',
        paddingBottom: theme.unit,
        paddingTop: theme.unit,
        paddingRight: theme.unit * 2,
        paddingLeft: theme.unit * 2,
        borderRadius: theme.unit * 5,
    },
    label: {
        textAlign: 'center',
    },
});

class Button extends React.Component {
    getButtonStyles = () => {
        let buttonStyles = {
            button: {
                ...styles.button,
                backgroundColor: theme.palette.primary,
            },
            label: {
                ...styles.label,
                color: theme.palette.white,
            },
        };

        if (this.props.variant === 'secondary') {
            buttonStyles = {
                button: {
                    ...styles.button,
                    backgroundColor: theme.palette.white,
                },
                label: {
                    ...styles.label,
                    color: theme.palette.primary,
                },
            }
        }

        return buttonStyles;
    }

    render() {
        const { label, onPress } = this.props;
        const buttonStyles = this.getButtonStyles();

        return (
            <TouchableNativeFeedback onPress={onPress}>
                <View style={buttonStyles.button}>
                    <Typography style={buttonStyles.label}>
                        { label.toUpperCase() }
                    </Typography>
                </View>
            </TouchableNativeFeedback>
        );
    }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
