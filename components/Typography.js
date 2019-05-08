import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { TYPOGRAPHY_VARIANTS } from '../constants';
import theme from '../theme';


const propTypes = {
    children: PropTypes.any.isRequired,
    variant: PropTypes.oneOf(['title1', 'title2', 'large', 'regular', 'small', 'tiny']),
    style: PropTypes.object,
    onPress: PropTypes.func,
};

const defaultProps = {
    children: '',
    variant: 'regular',
    onPress: null,
};

const styles = StyleSheet.create({
    title1: {
        fontFamily: theme.font.bold,
        color: theme.palette.black,
        fontSize: 40,
        lineHeight: 40,
    },
    title2: {
        fontFamily: theme.font.bold,
        color: theme.palette.black,
        fontSize: 32,
        lineHeight: 32,
    },
    large: {
        fontFamily: theme.font.regular,
        color: theme.palette.black,
        fontSize: 24,
        lineHeight: 30,
    },
    regular: {
        fontFamily: theme.font.regular,
        color: theme.palette.white,
        fontSize: 19,
        lineHeight: 24,
    },
    small: {
        fontFamily: theme.font.regular,
        color: theme.palette.black,
        fontSize: 17,
    },
    tiny: {
        fontFamily: theme.font.bold,
        color: theme.palette.secondary,
        fontSize: 14,
    },
    withPadding: {
        padding: theme.unit * 2,
        margin: -`${theme.unit * 2}`,
    },
});

class Typography extends React.Component {
    renderText = () => {
        let { children, variant, style } = this.props;

        if (!TYPOGRAPHY_VARIANTS.includes(variant)) {
            variant = 'regular';
        }

        return (
            <Text style={[styles[variant], style]}>
                { children }
            </Text>
        );
    }

    render() {
        const { onPress } = this.props;

        if (onPress) {
            return (
                <TouchableOpacity style={styles.withPadding} onPress={onPress}>
                    { this.renderText() }
                </TouchableOpacity>
            );
        }

        return this.renderText();
    }
}

Typography.defaultProps = defaultProps;
Typography.propTypes = propTypes;

export default Typography;
