import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';

const propTypes = {
    children: PropTypes.array.isRequired,
};

const styles = StyleSheet.create({
    row: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
});

const ThumbnailRow = ({ children }) => (
    <View style={styles.row}>
        { children }
    </View>
);

ThumbnailRow.propTypes = propTypes;

export default ThumbnailRow;
