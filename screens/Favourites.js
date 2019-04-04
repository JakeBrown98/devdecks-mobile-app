import React from 'react';
import { Screen } from '../components';

class Favourites extends React.Component {
    render() {
        return (
            <Screen
                title="Favourites"
                navigation={this.props.navigation}
            >
            </Screen>
        );
    }
}

export default Favourites;
