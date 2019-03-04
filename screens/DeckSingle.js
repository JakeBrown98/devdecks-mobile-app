import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Screen, Typography, FavouriteThumbnail } from '../components';
import theme from '../theme';

const FAVOURITES = [
    { id: 1, label: 'Scope & Closures', cardAmount: 10 },
    { id: 2, label: 'Regular Expressions', cardAmount: 8 },
    { id: 3, label: 'Hoisting & Memoization', cardAmount: 14 },
    { id: 4, label: 'Event Loop', cardAmount: 12 },
];

const styles = StyleSheet.create({
    favouritesWrapper: {
        marginBottom: theme.unit * 5,
    },
    favouritesTitle: {
        marginLeft: theme.unit * 3,
        marginBottom: theme.unit * 3,
    },
    favouritesList: {
        marginLeft: theme.unit * 3, 
    },
    favouriteThumbnail: {
        marginRight: theme.unit * 2,
    },
    horizontalSeparator: {
        height: 1,
        width: theme.unit * 2,
    },
});

class DeckSingle extends React.Component {
    renderHorizontalSeperator = () => (
        <View style={styles.horizontalSeparator} />
    );
    
    render() {
        return (
            <Screen
                title="JavaScript"
                noPadding
                {...this.props}
            >
                <View style={styles.favouritesWrapper}>
                    <Typography 
                        style={styles.favouritesTitle}
                        variant="large"
                    >
                        Your Favourites
                    </Typography>
                    <FlatList
                        horizontal
                        data={FAVOURITES}
                        showsHorizontalScrollIndicator={false}
                        styles={styles.favouritesList}
                        ItemSeparatorComponent={this.renderHorizontalSeperator}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => (
                            <FavouriteThumbnail
                                label={item.label}
                                cardAmount={item.cardAmount}
                            />
                        )}
                    />
                </View>
            </Screen>
        );
    }
}

export default DeckSingle;
