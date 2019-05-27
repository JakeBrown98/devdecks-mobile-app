import React from 'react';
import PropTypes from 'prop-types';
import {
    View,
    TouchableNativeFeedback,
    TouchableOpacity,
    Animated,
    StyleSheet,
} from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Typography from './Typography';
import StackListItemOptions from './StackListItemOptions';
import Toast from './Toast';
import theme from '../theme';


const propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string.isRequired,
        questions: PropTypes.array.isRequired,
        disabled: PropTypes.bool,
    }),
    onItemPress: PropTypes.func.isRequired,
    isFavourite: PropTypes.bool.isRequired,
    animateInSection: PropTypes.func.isRequired,
    itemIndex: PropTypes.number.isRequired,
};

const defaultProps = {
    item: {
        name: '',
        questions: [],
    },
    onItemPress: () => {},
    isFavourite: false,
    animateInSection: () => {},
    itemIndex: 0,
};

const styles = StyleSheet.create({
    container: {
        overflow: 'hidden',
        marginBottom: theme.unit * 2,
    },
    itemWrapper: {
        backgroundColor: theme.palette.primary,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: theme.unit,
        paddingRight: 0,
        borderRadius: theme.unit,
    },
    textColumn: {
        textAlign: 'left',
    },
    titleText: {
        marginBottom: theme.unit / 2,
    },
    moreButton: {
        padding: theme.unit,
    },
});

class StackListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showOptions: false,
            toastMessage: null,
        };
        this.height = new Animated.Value();
        this.minHeight = null;
        this.maxHeight = null;
    }

    setMinHeight = e => {
        const { itemIndex, animateInSection } = this.props;
        this.minHeight = e.nativeEvent.layout.height;

        this.height.setValue(this.minHeight);

        if (itemIndex === 0) {
            animateInSection();
        }
    }

    setMaxHeight = e => {
        this.maxHeight = e.nativeEvent.layout.height;
    }

    animateShowOptions = toValue => {
        Animated.timing(this.height, {
            toValue,
            duration: theme.animation.duration,
        }).start();
    }

    onMorePress = () => {
        const { showOptions } = this.state;
        let initialValue = showOptions ? this.maxHeight + this.minHeight : this.minHeight;

        this.setState({ showOptions: !showOptions });

        this.height.setValue(initialValue);

        this.animateShowOptions(showOptions ? this.minHeight : this.maxHeight + this.minHeight)
    }

    onFavouriteChangeComplete = toastMessage => {
        this.animateShowOptions(this.minHeight);

        this.setState({
            toastMessage,
            showOptions: false,
        }, () => {
            this.setState({ toastMessage: null });
        });
    }

    getContainerStyle = () => {
        return [
            styles.container,
            {
                height: this.height,
            }
        ];
    }

    render() {
        const { toastMessage } = this.state;
        const { item, onItemPress, isFavourite } = this.props;

        return (
            <Animated.View style={this.getContainerStyle()}>
                <TouchableNativeFeedback onPress={onItemPress} onLayout={this.setMinHeight}>
                    <View style={styles.itemWrapper}>
                        <View style={styles.textColumn}>
                            <Typography style={styles.titleText}>
                                { item.name }
                            </Typography>
                            <Typography variant="tiny">
                                { `${item.questions.length} cards` }
                            </Typography>
                        </View>
                        <TouchableOpacity style={styles.moreButton} onPress={this.onMorePress}>
                            <MaterialIcons
                                name="more-vert"
                                size={theme.unit * 3}
                                color={theme.palette.secondary}
                            />
                        </TouchableOpacity>
                    </View>
                </TouchableNativeFeedback>
                <View onLayout={this.setMaxHeight}>
                    <StackListItemOptions
                        item={item}
                        isFavourite={isFavourite}
                        onFavouriteChangeComplete={this.onFavouriteChangeComplete}
                    />
                </View>
                <Toast message={toastMessage} />
            </Animated.View>
        );
    }
}

StackListItem.defaultProps = defaultProps;
StackListItem.propTypes = propTypes;

export default StackListItem;
