import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { View, Text, StyleSheet } from 'react-native';
import IconButton from './IconButton';
import { unit } from '../theme';

const propTypes = {
    data: PropTypes.array.isRequired,  
    listIndex: PropTypes.number.isRequired,
};

class DeckActions extends React.Component {
    state = {
        hint: null,
        example: null,
        actionText: '',
    };

    componentDidUpdate(prevProps) {
        if (prevProps.listIndex < this.props.listIndex) {
            this.getValues();
            
            this.setState({
                actionText: ''
            });
        }
    }
    
    getValues = () => {
        const { data, listIndex } = this.props;
        const { hint, example } = data[listIndex];

        this.setState({
            hint,
            example,
        });
    };

    onButtonPress = type => () => {
        let actionText;
        const { data, listIndex } = this.props;
        const question = data[listIndex];

        switch (type) {
            case 'hint': 
                actionText = question.hint;
                break;
            case 'example':
                actionText = question.example;
                break;
            default:
                actionText = question.answer;
                break;
        }

        this.setState({
            actionText,
        });
    };

    render() {
        const { actionText, hint, example } = this.state;

        return (
            <View style={styles.container}>
                <View style={styles.buttonRow}>
                    <View style={styles.column}>
                        {
                            !_.isEmpty(hint) &&
                            <IconButton
                                icon="bulb1"
                                text="Hint"
                                onPress={this.onButtonPress('hint')}
                            />
                        }
                    </View>
                    <View style={styles.column}>
                        {
                            !_.isEmpty(example) &&
                            <IconButton
                                icon="gift"
                                text="Example"
                                onPress={this.onButtonPress('example')}
                            />
                        }
                    </View>
                    <View style={styles.column}>
                        <IconButton
                            icon="staro"
                            text="Answer"
                            onPress={this.onButtonPress()}
                        />
                    </View>
                </View>
                {
                    !_.isEmpty(actionText) &&
                    <Text>
                        { actionText }
                    </Text>
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: unit * 5,
    },
    buttonRow: {
        width: '100%',
        flexDirection: 'row',
    },
    column: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

DeckActions.propTypes = propTypes;

export default DeckActions;
