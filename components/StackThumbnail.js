import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableNativeFeedback, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
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
        textAlign: 'center',
        height: theme.unit * 18,
        width: theme.unit * 18,
        padding: theme.unit,
        backgroundColor: theme.palette.light,
        borderRadius: theme.roundEdges,
    },
    thumbnailText: {
        color: theme.palette.white,
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
            <TouchableNativeFeedback
                onPress={this.onThumbnailPress}
            >
                <View style={styles.container}>
                    <View style={styles.topBorder} />
                    <Typography style={styles.thumbnailText}>
                        { label } 
                    </Typography>
                    <View style={styles.bottomRow}>
                        <Typography variant="tiny" style={styles.thumbnailText}>
                            { `${cardAmount} cards` }
                        </Typography>
                        {
                            favourite && 
                            <MaterialIcons
                                name="star"
                                size={13}
                                color={theme.palette.yellow}
                            />
                        }
                    </View>
                </View>
            </TouchableNativeFeedback>
        );
    }
}

StackThumbnail.propTypes = propTypes;
StackThumbnail.defaultProps = defaultProps;

export default StackThumbnail;
