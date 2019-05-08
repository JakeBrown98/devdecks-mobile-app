import React from 'react';
import _ from 'lodash';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { setActiveStack } from '../actions';

import { Screen, Typography, ThumbnailRow, FavouriteThumbnail } from '../components';


const styles = StyleSheet.create({
    noFavouritesContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

class Favourites extends React.Component {
    onThumbnailPress = ({ questions }) => () => {
        this.props.setActiveStack(questions);

        this.props.navigation.navigate('SingleStack');
    }

    renderRows = favourites => (
        _.chunk(favourites, 2).map((row, i) =>
            <ThumbnailRow key={i}>
                { row.map(item => this.renderThumbnail(item)) }
            </ThumbnailRow>
        )
    )

    renderThumbnail = item => (
        <FavouriteThumbnail
            key={item.name}
            onItemPress={this.onThumbnailPress(item)}
            label={item.name}
            cardAmount={item.questions.length}
        />
    )

    render() {
        const { favourites, navigation } = this.props;

        return (
            <Screen title="Favourites" navigation={navigation}>
                {
                    _.isEmpty(favourites)
                    ? <View style={styles.noFavouritesContainer}>
                        <Typography>
                            No favourites added yet
                        </Typography>
                    </View>
                    : this.renderRows(favourites)
                }
            </Screen>
        );
    }
}

const mapStateToProps = ({ app }) => ({
    favourites: app.favourites,
});

export default connect(mapStateToProps, { setActiveStack })(Favourites);
