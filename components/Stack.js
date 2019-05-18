import React from 'react';
import PropTypes from 'prop-types';
import { 
    View, Animated, PanResponder,
    Dimensions, StyleSheet,
} from 'react-native';
import theme from '../theme';

import Card from './Card';
import Typography from './Typography';


const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = 0.15 * SCREEN_WIDTH;
const SWIPE_OUT_DURATION = 200;

const propTypes = {
    cardIndex: PropTypes.number.isRequired,
    questions: PropTypes.array.isRequired,
};

const styles = StyleSheet.create({
    container: {
        width: '89%',
        marginBottom: theme.unit * 7,
    },
    cardText: {
        textAlign: 'center',
        marginLeft: theme.unit * 3,
        marginRight: theme.unit * 3,
    },
});

class Stack extends React.Component {
    constructor(props) {
        super(props);
        this.position = new Animated.ValueXY();
        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: (e, gesture) => this.handlePanResponderMove(e, gesture),
            onPanResponderRelease: (e, gesture) => this.handlePanResponderRelease(e, gesture),
        });
    }

    handlePanResponderMove = (e, gesture) => {
        this.position.setValue({ 
            x: gesture.dx,
            y: gesture.dy,
        });
    }

    handlePanResponderRelease = (e, gesture) => {
        if (gesture.dx > SWIPE_THRESHOLD) {
            this.cardSwipeDirection('right');
        } else if (gesture.dx < -SWIPE_THRESHOLD) {
            this.cardSwipeDirection('left');
        } else {
            Animated.spring(this.position, {
                toValue: { x: 0, y: 0 }
            }).start();
        }
    }

    cardSwipeDirection = direction => {
        Animated.timing(this.position, {
            toValue: { 
                x: direction === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH,
                y: 0,
            },
            duration: SWIPE_OUT_DURATION,
        }).start(this.onSwipeComplete);
    }

    onSwipeComplete = () => {
        this.props.onSwipeComplete();
        this.position.setValue({ x: 0, y: 0 });
    }

    getCardStyle = () => {
        const rotate = this.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
            outputRange: ['-120deg', '0deg', '120deg'],
        });

        return {
            ...this.position.getLayout(),
            transform: [{ rotate }],
        };
    }

    renderCards = () => {
        const { cardIndex, questions } = this.props;

        return questions.map((item, i) => {
            const { id, question } = item;
            if (i !== cardIndex) return null;

            return (
                <Animated.View
                    key={id}
                    style={this.getCardStyle()}
                    {...this.panResponder.panHandlers}
                >
                    <Card bottomRightText={id > 9 ? id : `0${id}`}>
                        <Typography style={styles.cardText}>
                            { question }
                        </Typography>
                    </Card>
                </Animated.View>
            );
        });
    }

    render() {
        return (
            <View style={styles.container}>
                { this.renderCards() }
            </View>
        );
    }
}

Stack.propTypes = propTypes;

export default Stack;
