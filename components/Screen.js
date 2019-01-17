import React from 'react';
import { View, StyleSheet } from 'react-native';

const Screen = ({ children }) => (
    <View style={styles.container}>
        { children }
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Screen;
