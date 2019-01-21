import React from 'react';
import PropTypes from 'prop-types';
import hexToRgba from 'hex-to-rgba';
import { View, Text, TouchableNativeFeedback, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo';
import Typography from './Typography';
import theme from '../theme';

const propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    backgroundColour: PropTypes.string.isRequired,
    stackCount: PropTypes.number.isRequired,
    onPress: PropTypes.func.isRequired,
    amountCompleted: PropTypes.number,
    whiteText: PropTypes.bool,
};

const defaultProps = {
    amountCompleted: 0,
    whiteText: false,
    onPress: () => {},
};

const styles = StyleSheet.create({
    container: {
        marginBottom: theme.unit * 2.5,
    },
    thumbnailWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        height: theme.unit * 18,
        marginBottom: theme.unit,
        borderRadius: theme.roundEdges,
    },
    label: {
        color: theme.palette.white,
    },
    descriptionRow: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingBottom: theme.unit / 2,
    },
});

class DeckThumbnail extends React.Component {
    getThumbnailStyle = () => {
        const { backgroundColour, whiteText } = this.props;

        return {
            backgroundColours: [hexToRgba(backgroundColour), hexToRgba(backgroundColour, '0.6')],
            textColor: whiteText ? styles.label : null,
        };
    };

    onThumbnailPress = () => {
        this.props.onPress();
    };

    render() {
        const { label, name, amountCompleted, stackCount } = this.props;
        const { textColor, backgroundColours } = this.getThumbnailStyle();

        return (
            <TouchableNativeFeedback onPress={this.onThumbnailPress}>
                <View style={styles.container}>
                    <LinearGradient
                        style={styles.thumbnailWrapper}
                        colors={backgroundColours}
                    >
                        <Typography
                            variant="title2"
                            style={textColor}
                        >
                            { label }
                        </Typography>
                    </LinearGradient>
                    <View style={styles.descriptionRow}>
                        <View style={styles.descriptionColumn}>
                            <Typography variant="large">
                                { name }
                            </Typography>
                            <Typography variant="small">
                                { `${amountCompleted}/${stackCount} stacks completed` }
                            </Typography>
                        </View>
                    </View>
                </View>
            </TouchableNativeFeedback>
        );
    }
}

DeckThumbnail.propTypes = propTypes;
DeckThumbnail.defaultProps = defaultProps;

export default DeckThumbnail;
