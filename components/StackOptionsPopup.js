import React from 'react';
import PropTypes from 'prop-types';
import { View, Dimensions, StyleSheet, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import Button from './Button';
import IconButton from './IconButton';
import * as actions from '../actions';
import theme from "../theme";

const SCREEN_HEIGHT = Dimensions.get('window').height + StatusBar.currentHeight;

const propTypes = {
    selectedStack: PropTypes.object,
};

const styles = StyleSheet.create({
    popupBackdrop: {
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        height: SCREEN_HEIGHT,
        zIndex: 3,
    },
    popupWrapper: {
        alignItems: 'center',
        paddingLeft: theme.unit * 6,
        paddingRight: theme.unit * 6,
    },
    buttonList: {
        width: '100%',
        marginBottom: theme.unit * 3,
    },
});

class StackOptionsPopup extends React.Component {
    handleAddToFavourites = () => {
        console.log('add to favourites');
    };

    handleCancelPress = () => {
        this.props.hideStackPopup();
    };

    render() {
        if (!this.props.selectedStack) return null;

        return (
            <View style={styles.popupBackdrop}>
                <View style={styles.popupWrapper}>
                    <View style={styles.buttonList}>
                        <Button
                            label="Add to favourites"
                            onPress={this.handleAddToFavourites}
                        />
                    </View>
                    <IconButton
                        name="x"
                        onPress={this.handleCancelPress}
                    />
                </View>
            </View>
        );
    }
}

StackOptionsPopup.propTypes = propTypes;

export default connect(null, actions)(StackOptionsPopup);
