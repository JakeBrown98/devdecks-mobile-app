import React from 'react';
import PropTypes from 'prop-types';
import hexToRgba from 'hex-to-rgba';
import { View, TouchableNativeFeedback, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo';
import Typography from './Typography';
import DeckIcon from './DeckIcon';
import theme from '../theme';

const propTypes = {
    name: PropTypes.string.isRequired,
    thumbnailColour: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
    stacks: PropTypes.array.isRequired,
    onPress: PropTypes.func.isRequired,
    amountCompleted: PropTypes.number,
    whiteText: PropTypes.bool,
};

const defaultProps = {
    icon: {},
    amountCompleted: 0,
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
    descriptionRow: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingBottom: theme.unit / 2,
    },
});

class DeckThumbnail extends React.Component {
    getThumbnailBackground = () => {
        const { thumbnailColour, whiteText } = this.props;

        return [hexToRgba(thumbnailColour), hexToRgba(thumbnailColour, '0.6')];
    };

    onThumbnailPress = () => {
        this.props.onPress();
    };

    render() {
        const { name, amountCompleted, stacks, icon } = this.props;
        const thumbnailBackground = this.getThumbnailBackground();

        return (
            <TouchableNativeFeedback onPress={this.onThumbnailPress}>
                <View style={styles.container}>
                    <LinearGradient
                        style={styles.thumbnailWrapper}
                        colors={thumbnailBackground}
                    >
                        <DeckIcon icon={icon} />
                    </LinearGradient>
                    <View style={styles.descriptionRow}>
                        <View style={styles.descriptionColumn}>
                            <Typography variant="large">
                                { name }
                            </Typography>
                            <Typography variant="small">
                                { `${amountCompleted}/${stacks.length} stacks completed` }
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
