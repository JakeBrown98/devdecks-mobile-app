import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Button from './Button';
import Typography from './Typography';
import theme from '../theme';

const propTypes = {

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        bottom: theme.unit * 5,
        width: '100%',
        paddingLeft: theme.unit * 3,
        paddingRight: theme.unit * 3,

    },
    buttonWrapper: {

    },
    bottomRow: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: theme.unit * 2,
    },
    barWrapper: {

    },
    favouriteButton: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    starIcon: {
        marginRight: theme.unit / 2,
    }
});

class StackActions extends React.Component {
    onButtonPress = e => {
        console.log(e);
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.buttonWrapper}>
                    <Button
                        label="Answer"
                        onPress={this.onButtonPress}
                    />
                </View>
                <View style={styles.bottomRow}>
                    <View style={styles.barWrapper}>
                    </View>
                    <TouchableOpacity
                        onPress={this.onFavouritePress}
                        style={styles.favouriteButton}
                    >
                        <MaterialIcons
                            name="star"
                            size={13}
                            color={theme.palette.dark}
                            style={styles.starIcon}
                        />
                        <Typography variant="tiny">
                            Add to favourites
                        </Typography>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

StackActions.propTypes = propTypes;

export default StackActions;
