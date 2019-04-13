import React from 'react';
import { 
    View, Animated, PanResponder,
    Dimensions, StyleSheet,
} from 'react-native';
import theme from '../theme';

import Card from './Card';


const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = 0.15 * SCREEN_WIDTH;
const SWIPE_OUT_DURATION = 200;

const styles = StyleSheet.create({
    container: {
        width: '89%',
        marginBottom: theme.unit * 7,
    },
});

class Stack extends React.Component {
    constructor(props) {
        super(props);
        this.position = new Animated.ValueXY();
        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: (evt, gesture) => this.handlePanResponderMove(evt, gesture),
            onPanResponderRelease: (evt, gesture) => this.handlePanResponderRelease(evt, gesture),
        });
    }

    handlePanResponderMove = (evt, gesture) => {
        this.position.setValue({ 
            x: gesture.dx,
            y: gesture.dy,
        });
    };

    handlePanResponderRelease = (evt, gesture) => {
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

    cardSwipeDirection = (direction) => {
        Animated.timing(this.position, {
            toValue: { 
                x: direction === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH,
                y: 0,
            },
            duration: SWIPE_OUT_DURATION,
        }).start(() => this.onSwipeComplete());
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
        const { listIndex, data } = this.props;

        return data.map((item, i) => {
            if (i !== listIndex) return null;

            if (i === listIndex) {
                return (
                    <Animated.View
                        key={item.question}
                        style={this.getCardStyle()}
                        {...this.panResponder.panHandlers}
                    >
                        <Card text={item.question} cardIndex={listIndex} />
                    </Animated.View>
                );
            }
        }).reverse();
    }

    render() {
        return (
            <View style={styles.container}>
                { this.renderCards() }
            </View>
        );
    }
}

export default Stack;
