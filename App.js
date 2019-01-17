import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { createDrawerNavigator, createAppContainer, DrawerItems, SafeAreaView } from 'react-navigation';
import DeckScreen from './screens/DeckScreen';
import DeckOverviewScreen from './screens/DeckOverviewScreen';
import SettingsScreen from './screens/SettingsScreen';

const CustomDrawerComponent = (props) => {
    return (
        <ScrollView>
            <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'always', horizontal: 'never' }}>
                <DrawerItems {...props} />
            </SafeAreaView>
        </ScrollView>
    );
};

const AppDrawerNavigator = createDrawerNavigator(
    {
        DeckOverview: DeckOverviewScreen,
        SingleDeck: DeckScreen,
    },
    {
        contentComponent: CustomDrawerComponent
    }
);

export default createAppContainer(AppDrawerNavigator);
