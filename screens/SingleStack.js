import React from 'react';
import { View, StyleSheet } from 'react-native';
import theme from '../theme';

import { Stack, StackEnd, StackActions } from '../components';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.palette.white,
        width: '100%',
    },
});

class StackSingleScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listIndex: 0,
            questions: [],
            helpRequiredCount: 0,
        };
    }

    componentDidMount() {
        this.setState({ questions: this.props.navigation.getParam('questions') });
    }

    onSwipeComplete = () => {
        this.setState({ listIndex: this.state.listIndex + 1 });
    }

    render() {
        const { questions, listIndex, helpRequiredCount } = this.state;

        return (
            <View style={styles.container}>
                {
                    listIndex < questions.length
                    ? <Stack
                        data={questions}
                        listIndex={listIndex}
                        onSwipeComplete={this.onSwipeComplete}
                    />
                    : <StackEnd 
                        helpRequiredCount={helpRequiredCount}
                        data={questions}
                    />
                }
                <StackActions />
            </View>
        );
    }
}

export default StackSingleScreen;
