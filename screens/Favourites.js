import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

import { Screen, ThumbnailRow, FavouriteThumbnail } from '../components';


class Favourites extends React.Component {
    onThumbnailPress = ({ questions }) => {
        this.props.navigation.navigate('SingleStack', {
            questions: _.shuffle(questions),
        });
    }

    renderRows = favourites => (
        _.chunk(favourites, 2).map((row, i) =>
            <ThumbnailRow key={i + row.length}>
                { row.map(item => this.renderThumbnail(item)) }
            </ThumbnailRow>
        )
    )

    renderThumbnail = item => (
        <FavouriteThumbnail
            key={item.name}
            onItemPress={this.onThumbnailPress}
            label={item.name}
            cardAmount={item.questions.length}
        />
    )

    render() {
        const { favourites } = this.props;

        return (
            <Screen
                title="Favourites"
                navigation={this.props.navigation}
            >
                {
                    _.isEmpty(favourites)
                    ? null
                    : this.renderRows(favourites)
                }
            </Screen>
        );
    }
}

const mapStateToProps = ({ app }) => ({
    favourites: app.favourites,
});

export default connect(mapStateToProps)(Favourites);
