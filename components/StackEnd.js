import React from 'react';
import { View, Text } from 'react-native';

class StackEnd extends React.Component {
    render() {
        const { helpRequiredCount, data } = this.props;
        
        return (
            <View>
                <Text>
                    { `You requried help on ${helpRequiredCount} / ${data.length} questions` }
                </Text>
            </View>
        );
    }
}

export default StackEnd;