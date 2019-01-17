import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet } from 'react-native';
import { colours } from '../theme';

const propTypes = {
    type: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired,
};

const Typography = ({ type, children }) => {
    let textStyle;

    switch (type) {
        case 'title1':
            textStyle = styles.titleOne;
            break;
        case 'title2':
            textStyle = styles.titleTwo;
            break;
        case 'title3':
            textStyle = styles.titleThree;
            break;
        case 'large':
            textStyle = styles.titleFour;
            break;
        case 'regular':
            textStyle = styles.titleFive;
            break;
        case 'small':
            textStyle = styles.titleSix;
            break;
        case 'tiny':
            textStyle = styles.titleSeven;
            break;
        deafult:
            // Do nothing.
    }
    
    return (
        <Text style={textStyle}>
            { children }
        </Text>
    );
};

const styles = StyleSheet.create({
    titleOne: {
        color: colours.black,
        fontSize: 44,
        fontWeight: 700,
    },
    titleTwo: {
        color: colours.black,
        fontSize: 32,
        fontWeight: 700,
    },
    titleThree: {
        color: colours.black,
        fontSize: 24,
        fontWeight: 400,
    },
    titleFour: {
        color: colours.black,
        fontSize: 19,
        fontWeight: 400,
    },
    titleFive: {
        color: colours.black,
        fontSize: 17,
        fontWeight: 400,
    },
    titleSix: {
        color: colours.black,
        fontSize: 14,
        fontWeight: 400,
    },
    titleSeven: {
        color: colours.grey,
        fontSize: 8,
        fontWeight: 700,
    },
});

Typography.propTypes = propTypes;

export default Typography;
