import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableNativeFeedback, TouchableOpacity, Animated, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';
import Typography from './Typography';
import StackListItemOptions from './StackListItemOptions';
import Toast from './Toast';
import * as actions from '../actions';
import theme from '../theme';


const propTypes = {
    onItemPress: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    cardAmount: PropTypes.number.isRequired,
    isFavourite: PropTypes.bool.isRequired,
    animateInSection: PropTypes.func.isRequired,
    itemIndex: PropTypes.number.isRequired,
};

const defaultProps = {
    onItemPress: () => {},
    label: '',
    cardAmount: 0,
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
            showToast: false,
        };
        this.height = new Animated.Value();
        this.minHeight = null;
        this.maxHeight = null;
    }

    setMinHeight = e => {
        const { itemIndex, animateInSection } = this.props;
        this.minHeight = e.nativeEvent.layout.height;

        this.height.setValue(this.minHeight);

        animateInSection(itemIndex);
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

    handleAddToFavourites = () => {
        this.setState({
            showOptions: false,
            showToast: true,
        }, () => {
            this.animateShowOptions(this.minHeight);

            this.setState({ showToast: false });
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
        const { showToast } = this.state;
        const { label, cardAmount, onItemPress, isFavourite } = this.props;

        return (
            <Animated.View style={this.getContainerStyle()}>
                <TouchableNativeFeedback onPress={onItemPress} onLayout={this.setMinHeight}>
                    <View style={styles.itemWrapper}>
                        <View style={styles.textColumn}>
                            <Typography style={styles.titleText}>
                                { label }
                            </Typography>
                            <Typography variant="tiny">
                                { `${cardAmount} cards` }
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
                        optionText={isFavourite ? 'Remove from favourites' : 'Add to favourites'}
                        handleAddToFavourites={this.handleAddToFavourites}
                    />
                </View>
                <Toast
                    visible={showToast}
                    message={isFavourite ? 'Stack removed from favourites' : 'Stack added to favourites'}
                />
            </Animated.View>
        );
    }
}

StackListItem.defaultProps = defaultProps;
StackListItem.propTypes = propTypes;

export default connect(null, actions)(StackListItem);
