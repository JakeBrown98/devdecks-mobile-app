import React from 'react';
import _ from 'lodash';
import { Screen } from '../components';
import data from '../data/index';

class AllDecksScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'All Decks'
    };

    state = {
        decks: []
    };

    componentDidMount() {
        if (_.isEmpty(this.state.decks)) {
            this.setState({
                decks: data,
            });
        }
    }

    renderThumbnail = item => {
        return (

        );
    }

    render() {
        return (
            <Screen title="All Decks" {...this.props}>
                {
                    this.state.data.map(item => this.renderThumbnail(item))
                }
            </Screen>
        );
    }
}

export default AllDecksScreen;
