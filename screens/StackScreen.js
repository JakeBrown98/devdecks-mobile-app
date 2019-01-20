import React from 'react';
import { StyleSheet } from 'react-native';
import { Screen, Card, Stack, StackEnd, StackActions } from '../components';

const DATA = [
    { id: 1, question: 'What is the time?', answer: 'The time is 10.00am' },
    { id: 2, question: 'What is the difference between good and evil?', answer: 'Not much acutually, you stink', hint: 'This is a hint', example: 'Example example example'},
    { id: 3, question: 'Who is the coolest person in the world?', answer: 'This is some random gibbersish answer', example: 'Example!'},
    { id: 4, question: 'Explain how you bake a cake', answer: 'Baking a cake is actually quite complicatied'},
    { id: 5, question: 'Do you enjoy react native?', answer: 'No its fucking horrible to use', hint: 'This is a hint'},
    { id: 6, question: 'What is the time?', answer: 'The time is 10.00am' },
    { id: 7, question: 'What is the difference between good and evil?', answer: 'Not much acutually, you stink', hint: 'This is a hint', example: 'Example example example'},
    { id: 8, question: 'Who is the coolest person in the world?', answer: 'This is some random gibbersish answer', example: 'Example!'},
    { id: 9, question: 'Explain how you bake a cake', answer: 'Baking a cake is actually quite complicatied'},
    { id: 10, question: 'Do you enjoy react native?', answer: 'No its fucking horrible to use', hint: 'This is a hint'},

];

const styles = StyleSheet.create({

});

class StackScreen extends React.Component {
    state = {
        listIndex: 0,
        cardAnswer: null,
        helpRequiredCount: 0,
    };

    onSwipeComplete = () => {
        this.setState({
            listIndex: this.state.listIndex + 1,
            cardAnswer: null,
        });
    };

    renderCard = item => {
        const { cardAnswer } = this.state;
        const cardText = cardAnswer ? cardAnswer : item.question;

        return (
            <Card
                key={item.id}
                text={cardText}
                onLongPress={this.onCardLongPress}
            />
        );
    };

    renderStack = () => (
        <>
            <Stack
                data={DATA}
                listIndex={this.state.listIndex}
                renderCard={this.renderCard}
                renderNoMoreCards={this.renderNoMoreCards}
                onSwipeComplete={this.onSwipeComplete}
            />
            <StackActions
                data={DATA}
                listIndex={this.state.listIndex}
            />
        </>
    );

    render() {
        return (
            <Screen>
                {
                    this.state.listIndex < DATA.length
                    ? this.renderStack()
                    : <StackEnd 
                        helpRequiredCount={this.state.helpRequiredCount}
                        data={DATA}
                    />
                }
            </Screen>
        );
    }
}

export default StackScreen;