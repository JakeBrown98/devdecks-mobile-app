import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableNativeFeedback, StyleSheet } from 'react-native';
import Typography from './Typography';
import DeckIcon from './DeckIcon';
import theme from '../theme';

const propTypes = {
    name: PropTypes.string.isRequired,
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
        backgroundColor: theme.palette.primary,
        alignItems: 'center',
        justifyContent: 'center',
        height: theme.unit * 22,
        marginBottom: theme.unit,
        borderRadius: theme.unit,
    },
    descriptionRow: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingBottom: theme.unit / 2,
    },
});

class DeckThumbnail extends React.Component {
    onThumbnailPress = () => {
        this.props.onPress();
    };

    render() {
        const { name, amountCompleted, stacks, icon } = this.props;

        return (
            <TouchableNativeFeedback onPress={this.onThumbnailPress}>
                <View style={styles.container}>
                    <View style={styles.thumbnailWrapper}>
                        <DeckIcon icon={icon} />
                    </View>
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

DeckThumbnail.defaultProps = defaultProps;
DeckThumbnail.propTypes = propTypes;

export default DeckThumbnail;
