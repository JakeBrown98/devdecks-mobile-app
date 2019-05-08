import React from 'react';
import PropTypes from 'prop-types';
import { Animated, StyleSheet } from 'react-native';
import theme from '../theme';

import Typography from './Typography';


const propTypes = {
    children: PropTypes.any,
    backgroundColor: PropTypes.string,
    topLeftText: PropTypes.string,
    bottomRightText: PropTypes.string,
};

const defaultProps = {
    backgroundColor: theme.palette.primary,
    topLeftText: '',
    bottomRightText: '',
};

const ANIMATED_CONFIG = {
    toValue: 1,
    duration: 250,
    useNativeDriver: true,
};

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        height: theme.unit * 52,
        borderRadius: theme.unit * 2,
    },
    topLeftText: {
        position: 'absolute',
        top: theme.unit * 2,
        left: theme.unit * 2,
    },
    bottomRightText: {
        position: 'absolute',
        bottom: theme.unit * 2,
        right: theme.unit * 2,
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
        const { topLeftText, bottomRightText, children } = this.props;

        return (
            <Animated.View style={this.getCardStyle()}>
                <Typography variant="tiny" style={styles.topLeftText}>
                    { topLeftText }
                </Typography>
                { children }
                <Typography variant="tiny" style={styles.bottomRightText}>
                    { bottomRightText }
                </Typography>
            </Animated.View>
        );
    }
}

Card.defaultProps = defaultProps;
Card.propTypes = propTypes;

export default Card;
