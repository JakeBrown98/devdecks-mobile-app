import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import Typography from './Typography';
import theme from '../theme';

const propTypes = {
    label: PropTypes.string.isRequired,
    result: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
    container: {
        marginBottom: theme.unit * 3,
    },
    resultText: {
        color: theme.palette.light,
    },
});

const Stat = ({ label, result }) => (
    <View style={styles.container}>
        <Typography>
            { label }
        </Typography>
        <Typography variant="small" style={styles.resultText}>
            { result }
        </Typography>
    </View>
);

Stat.propTypes = propTypes;

export default Stat;
