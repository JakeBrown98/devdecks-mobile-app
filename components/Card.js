import React from 'react';
import PropTypes from 'prop-types';
import { Animated, StyleSheet } from 'react-native';
import Typography from './Typography';
import theme from '../theme';


const propTypes = {
    text: PropTypes.string.isRequired,
    cardIndex: PropTypes.number.isRequired,
};

const defaultProps = {
    text: '',
    cardIndex: 0,
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.palette.primary,
        alignItems: 'center',
        justifyContent: 'center',
        height: theme.unit * 52,
        borderRadius: theme.unit * 2,
    },
    cardIndex: {
        position: 'absolute',
        top: theme.unit * 3,
        right: theme.unit * 3,
    },
    cardText: {
        textAlign: 'center',
        marginLeft: theme.unit * 3,
        marginRight: theme.unit * 3,
    },
});

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.cardOpacity = new Animated.Value(0);
    }

    componentDidMount() {
        Animated.timing(this.cardOpacity, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
        }).start();
    }

    render() {
        const { text } = this.props;
        const cardContainerStyle = [styles.container, { opacity: this.cardOpacity }];

        return (
            <Animated.View style={cardContainerStyle}>
                <Typography style={styles.cardText}>
                    { text }
                </Typography>
            </Animated.View>
        );
    }
}

Card.defaultProps = defaultProps;
Card.propTypes = propTypes;

export default Card;
