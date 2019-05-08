import React from 'react';
import PropTypes from 'prop-types';
import { Animated, StyleSheet } from 'react-native';
import theme from '../theme';


const propTypes = {
    children: PropTypes.any,
    backgroundColor: PropTypes.string,
};

const defaultProps = {
    backgroundColor: theme.palette.primary,
};

const ANIMATED_CONFIG = {
    toValue: 1,
    duration: 250,
    useNativeDriver: true,
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: theme.unit * 52,
        borderRadius: theme.unit * 2,
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
        const { backgroundColor } = this.props;

        return [
            styles.container,
            {
                backgroundColor,
                opacity: this.cardOpacity,
                translateY: this.translateY,
            },
        ];
    }

    render() {
        const { children } = this.props;

        return (
            <Animated.View style={this.getCardStyle()}>
                { children }
            </Animated.View>
        );
    }
}

Card.defaultProps = defaultProps;
Card.propTypes = propTypes;

export default Card;
