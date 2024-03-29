import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import theme from '../theme';


import Typography from './Typography';

const propTypes = {
    label: PropTypes.string.isRequired,
    result: PropTypes.string.isRequired,
};

const defaultProps = {
    label: '',
    result: '',
};

const styles = StyleSheet.create({
    container: {
        marginBottom: theme.unit * 3,
    },
    statText: {
        color: theme.palette.black,
    },
    resultText: {
        color: theme.palette.primary,
    },
});

const Stat = ({ label, result }) => (
    <View style={styles.container}>
        <Typography style={styles.statText}>
            { label }
        </Typography>
        <Typography variant="small" style={styles.resultText}>
            { result }
        </Typography>
    </View>
);

Stat.propTypes = propTypes;
Stat.defaultProps = defaultProps;

export default Stat;
