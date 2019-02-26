import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet } from 'react-native';
import theme from '../theme';

const propTypes = {
    children: PropTypes.any.isRequired,
    variant: PropTypes.string,
    style: PropTypes.object,
};

const defaultProps = {
    variant: 'regular',
};

const styles = StyleSheet.create({
    title1: {
        fontFamily: theme.font.bold,
        color: theme.palette.white,
        fontSize: 44,
        lineHeight: 44,
    },
    title2: {
        fontFamily: theme.font.bold,
        color: theme.palette.white,
        fontSize: 32,
        lineHeight: 32,
    },
    large: {
        fontFamily: theme.font.regular,
        color: theme.palette.white,
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
        color: theme.palette.white,
        fontSize: 17,
    },
    tiny: {
        fontFamily: theme.font.bold,
        color: theme.palette.grey,
        fontSize: 14,
    },
});

const Typography = ({ variant, children, style }) => {
    return (
        <Text style={[styles[variant], style]}>
            { children }
        </Text>
    );
};

Typography.propTypes = propTypes;
Typography.defaultProps = defaultProps;

export default Typography;
