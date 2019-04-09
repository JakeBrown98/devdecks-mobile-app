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

const INITIAL_STATE = {
    listIndex: 0,
    questions: [],
    helpRequiredCount: 0,
};

class StackSingleScreen extends React.Component {
    state = {...INITIAL_STATE};

    componentDidMount() {
        const { getParam } = this.props.navigation;

        this.setState({ questions: getParam('questions') });
    }

    componentWillUnmount() {
        console.log(123);
        this.setState(INITIAL_STATE);
    }

    onSwipeComplete = () => {
        this.setState({ listIndex: this.state.listIndex + 1 });
    };

    render() {
        const { questions, listIndex } = this.state;

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
                        helpRequiredCount={this.state.helpRequiredCount}
                        data={questions}
                    />
                }
                <StackActions />
            </View>
        );
    }
}

export default StackSingleScreen;
