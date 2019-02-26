import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import Typography from './Typography';
import Button from './Button';
import theme from '../theme';

const propTypes = {
    helpRequiredCount: PropTypes.number.isRequired,
    data: PropTypes.array.isRequired,
};

const defaultProps = {
    helpRequiredCount: 0,
    data: [],
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: theme.unit * 5,
        paddingBottom: theme.unit * 5,
    },
    helpRequiredText: {
        marginTop: theme.unit,
        marginBottom: theme.unit,
    },
    button: {
        marginTop: theme.unit * 4,
    }
});

class StackEnd extends React.Component {
    onReturnPress = () => {
        console.log('return presssed')
    };

    render() {
        const { helpRequiredCount, data } = this.props;
        
        return (
            <View style={styles.container}>
                <Typography>
                    You required help for
                </Typography>
                <Typography
                    variant="title1"
                    style={styles.helpRequiredText}
                >
                    { `${helpRequiredCount} / ${data.length}` }
                </Typography>
                <Typography>
                    of the questions
                </Typography>
                <Button
                    onPress={this.onReturnPress}
                    label="Return to deck"
                />
            </View>
        );
    }
}

StackEnd.propTypes = propTypes;
StackEnd.defaultProps = defaultProps;

export default StackEnd;
