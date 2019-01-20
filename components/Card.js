import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import theme from '../theme';

const propTypes = {
    text: PropTypes.string.isRequired,
};

const Card = ({ text }) => (
    <View style={styles.container}>
        <Text>{ text }</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        height: theme.unit * 40,
        width: theme.unit * 40,
        borderRadius: theme.unit / 2,
    },
});

Card.propTypes = propTypes;

export default Card;
