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

const ANIMATED_CONFIG = {
    toValue: 1,
    duration: 250,
    useNativeDriver: true,
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
        this.translateY = new Animated.Value(40);
    }

    componentDidMount() {
        Animated.timing(this.cardOpacity, ANIMATED_CONFIG).start();

        Animated.timing(this.translateY, {...ANIMATED_CONFIG, duration: 200 }).start();
    }

    getCardStyle = () => {
        return [
            styles.container,
            {
                opacity: this.cardOpacity,
                translateY: this.translateY,
            }
        ];
    }

    render() {
        const { text } = this.props;

        return (
            <Animated.View style={this.getCardStyle()}>
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
