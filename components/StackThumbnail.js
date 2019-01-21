import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Typography from './Typography';
import theme from '../theme';

const propTypes = {
    label: PropTypes.string.isRequired,
    cardAmount: PropTypes.number,
    favourite: PropTypes.bool,
};

const defaultProps = {
    label: '',
    cardAmount: 0,
    favourite: false,
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        height: (theme.unit * 18) - 3,
        width: theme.unit * 18,
        padding: theme.unit,
        borderWidth: 3,
        borderStyle: 'solid',
        borderColor: theme.palette.grey,
        borderTopColor: theme.palette.light,
    },
    bottomRow: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        position: 'absolute',
        bottom: theme.unit,
        width: '100%',
        marginLeft: theme.unit,
        marginRight: theme.unit,
    },
});

class StackThumbnail extends React.Component {
    onThumbnailPress = () => {
        console.log(123);
    };

    render() {
        const { cardAmount, label, favourite } = this.props;

        return (
            <TouchableOpacity
                onPress={this.onThumbnailPress}
                activeOpacity={theme.activeTouchOpacity}
                style={styles.container}
            >
                <Typography>
                    { label } 
                </Typography>
                <View style={styles.bottomRow}>
                    <Typography variant="tiny">
                        { `${cardAmount} cards` }
                    </Typography>
                    {
                        favourite && 
                        <Feather
                            name="star"
                            size={13}
                            color={theme.palette.yellow}
                        />
                    }
                </View>
            </TouchableOpacity>
        );
    }
}

StackThumbnail.propTypes = propTypes;
StackThumbnail.defaultProps = defaultProps;

export default StackThumbnail;
