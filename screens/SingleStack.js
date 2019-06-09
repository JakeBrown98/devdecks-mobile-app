import React from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
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
            cardIndex: 0,
            questions: [],
            helpRequiredCount: 0,
        };
    }

    componentDidMount() {
        this.setQuestions();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.questions !== this.props.questions) {
            this.setQuestions();
        }
    }

    setQuestions = () => {
        this.setState({
            questions: this.props.questions,
            cardIndex: 0,
            helpRequiredCount: 0,
        });
    }

    onSwipeComplete = () => {
        this.setState({ cardIndex: this.state.cardIndex + 1 });
    }

    onStackEndButtonPress = () => {
        this.props.navigation.goBack();
    }

    render() {
        const { questions, cardIndex, helpRequiredCount } = this.state;
        const hasCardsRemaining = cardIndex < questions.length;

        if (!questions) return null;

        return (
            <View style={styles.container}>
                {
                    hasCardsRemaining
                    ? <Stack
                        questions={questions}
                        cardIndex={cardIndex}
                        onSwipeComplete={this.onSwipeComplete}
                    />
                    : <StackEnd
                        data={questions}
                        helpRequiredCount={helpRequiredCount}
                        onButtonPress={this.onStackEndButtonPress}
                    />
                }
                <StackActions disabled={!hasCardsRemaining} />
            </View>
        );
    }
}

const mapStateToProps = ({ app }) => ({
    questions: app.activeStack,
});

export default connect(mapStateToProps)(StackSingleScreen);
