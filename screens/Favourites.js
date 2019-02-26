import React from 'react';
import { Screen } from '../components';

class Favourites extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Favourites'
    };

    render() {
        return (
            <Screen
                title="Favourites"
                {...this.props}
            >
            </Screen>
        );
    }
}

export default Favourites;
