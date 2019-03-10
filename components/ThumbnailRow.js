import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import theme from '../theme';

const propTypes = {
    children: PropTypes.array.isRequired,
};

const styles = StyleSheet.create({
    row: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: theme.unit * 39,
        marginBottom: theme.unit * 2,
    },
});

const ThumbnailRow = ({ children }) => (
    <View style={styles.row}>
        { children }
    </View>
);

ThumbnailRow.propTypes = propTypes;

export default ThumbnailRow;
