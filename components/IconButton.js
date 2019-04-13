import React from 'react';
import PropTypes from 'prop-types';
import { AntDesign, Feather } from '@expo/vector-icons';
import { TouchableOpacity, StyleSheet } from 'react-native';
import theme from '../theme';


const propTypes = {
    name: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    family: PropTypes.string,
};

const styles = StyleSheet.create({
    actionButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.palette.secondary,
        height: theme.unit * 5,
        width: theme.unit * 5,
        borderRadius: theme.unit * 5,
    },
});

class IconButton extends React.Component {
    getIcon = () => {
        const iconProps = {
            name: this.props.name,
            size: theme.unit * 2,
            color: theme.palette.primary,
        };

        switch (this.props.family) {
            case 'AntDesign':
                return <AntDesign {...iconProps} />;
            default:
                return <Feather {...iconProps} />;
        }
    }

    render() {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={this.props.onPress}
                style={styles.actionButton}
            >
                { this.getIcon() }
            </TouchableOpacity>
        );
    }
}

IconButton.propTypes = propTypes;

export default IconButton;
