import React from 'react';
import { Screen } from '../components';

class DeckSingle extends React.Component {
    render() {
        return (
            <Screen
                title="JavaScript"
                {...this.props}
            >

            </Screen>
        );
    }
}

export default DeckSingle;
