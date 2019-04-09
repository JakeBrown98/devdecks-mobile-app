import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Animated, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Typography from './Typography';
import theme from '../theme';

const propTypes = {
    handleAddToFavourites: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.palette.tertiary,
        marginLeft: theme.unit * 4,
        marginRight: theme.unit * 4,
        borderBottomLeftRadius: theme.unit,
        borderBottomRightRadius: theme.unit,
    },
    optionsWrapper: {
        padding: theme.unit,
    },
});

class StackListItemOptions extends React.Component {
    constructor(props) {
        super(props);
        // @todo need to finish
        this.position = new Animated.ValueXY();
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.props.handleAddToFavourites}>
                    <View style={styles.optionsWrapper}>
                        <Typography variant="small">
                            Add to favourites
                        </Typography>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

StackListItemOptions.propTypes = propTypes;

export default connect(null, actions)(StackListItemOptions);