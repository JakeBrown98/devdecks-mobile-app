import React from 'react';
import PropTypes from 'prop-types';
import { Animated, StyleSheet } from 'react-native';
import Typography from './Typography';
import theme from '../theme';

const propTypes = {
    text: PropTypes.string.isRequired,
    cardIndex: PropTypes.number.isRequired,
    listLength: PropTypes.number.isRequired,
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
        const cardOpacity = new Animated.Value(0);

        this.cardOpacity = cardOpacity;
    }

    componentDidMount() {
        Animated.timing(this.cardOpacity, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
        }).start();
    }

    render() {
        const { text, cardIndex, listLength } = this.props;
        const cardContainerStyle = [styles.container, { opacity: this.cardOpacity }];

        return (
            <Animated.View style={cardContainerStyle}>
                {/*<Typography variant="large" style={styles.cardIndex}>*/}
                    {/*{ `${cardIndex}/${listLength}` }*/}
                {/*</Typography>*/}
                <Typography style={styles.cardText}>
                    { text }
                </Typography>
            </Animated.View>
        );
    }
}

Card.propTypes = propTypes;

export default Card;
