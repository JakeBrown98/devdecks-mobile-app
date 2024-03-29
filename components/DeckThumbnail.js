import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableNativeFeedback, StyleSheet } from 'react-native';
import theme from '../theme';


import Typography from './Typography';
import DeckIcon from './DeckIcon';

const propTypes = {
    name: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
    stacks: PropTypes.array.isRequired,
    onThumbnailPress: PropTypes.func.isRequired,
    amountCompleted: PropTypes.number,
};

const defaultProps = {
    name: '',
    icon: {},
    stacks: [],
    onThumbnailPress: () => {},
    amountCompleted: 0,
};

const styles = StyleSheet.create({
    container: {
        paddingBottom: theme.unit * 2.5,
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
    render() {
        const { name, amountCompleted, stacks, icon, onThumbnailPress } = this.props;

        return (
            <TouchableNativeFeedback onPress={onThumbnailPress}>
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

DeckThumbnail.propTypes = propTypes;
DeckThumbnail.defaultProps = defaultProps;

export default DeckThumbnail;
