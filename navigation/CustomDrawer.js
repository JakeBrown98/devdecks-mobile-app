import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { DrawerItems, SafeAreaView } from 'react-navigation';

const CustomDrawerComponent = (props) => {
    return (
        <ScrollView>
            <SafeAreaView 
                style={styles.safeArea} 
                forceInset={{ 
                    top: 'always', 
                    horizontal: 'never' 
                }}
            >
                <DrawerItems {...props} />
            </SafeAreaView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
});

export default CustomDrawerComponent;
