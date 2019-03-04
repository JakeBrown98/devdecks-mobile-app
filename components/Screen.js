import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, View, TouchableOpacity, StyleSheet } from 'react-native';
import { DrawerActions } from 'react-navigation-drawer';
import { Feather } from '@expo/vector-icons';
import { STATUS_BAR_HEIGHT } from '../constants';
import Typography from './Typography';
import theme from '../theme';

const propTypes = {
    children: PropTypes.any.isRequired,
    hideMenu: PropTypes.bool,
    title: PropTypes.string,
    titleVariant: PropTypes.string,
    noPadding: PropTypes.bool,
    footerText: PropTypes.string,
};

const defaultProps = {
    hideMenu: false,
    titleVariant: 'title1',
    footerText: '',
    noPadding: false,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.palette.white,
    },
    screenWrapper: {
        paddingLeft: theme.unit * 3,
        paddingRight: theme.unit * 3,
        paddingBottom: theme.unit * 3,
    },
    headerWrapper: {
        marginBottom: theme.unit * 3,
    },
    headerWrapperPadding: {
        paddingLeft: theme.unit * 3,
        paddingRight: theme.unit * 3,
        marginBottom: theme.unit * 3,
    },
    menuIcon: {
        marginTop: theme.unit * 2 + STATUS_BAR_HEIGHT,
        marginBottom: theme.unit * 4,
    },
    screenFooter: {
        alignItems: 'center',
        marginTop: theme.unit,
        paddingBottom: theme.unit * 3,
    },
});

class Screen extends React.Component {
    onMenuPress = () => {
        this.props.navigation.dispatch(DrawerActions.openDrawer());
    };

    render() {
        const { noPadding, title, titleVariant, children, hideMenu, footerText } = this.props;
        const menuStyle = hideMenu ? [styles.menuIcon, { opacity: 0 }] : styles.menuIcon;

        return (
            <View style={styles.container}>
                <ScrollView style={( noPadding ? null : styles.screenWrapper )}>
                    {
                        title &&
                        <View style={( noPadding ? styles.headerWrapperPadding : styles.headerWrapper )}>
                            <TouchableOpacity
                                onPress={this.onMenuPress}
                                style={menuStyle}
                                disabled={hideMenu}
                            >
                                <Feather
                                    name="menu"
                                    size={theme.unit * 3}
                                    color={theme.palette.black}
                                />
                            </TouchableOpacity>
                            <Typography variant={titleVariant}>
                                { title }
                            </Typography>
                        </View>
                    }
                    { children }
                    {
                        footerText !== '' &&
                        <View style={styles.screenFooter}>
                            <Typography variant="tiny">
                                { footerText }
                            </Typography>
                        </View>
                    }
                </ScrollView>
            </View>
        );
    }
}

Screen.propTypes = propTypes;
Screen.defaultProps = defaultProps;

export default Screen;
