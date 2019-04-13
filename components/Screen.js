import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { ScrollView, View, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
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
    loading: PropTypes.bool,
};

const defaultProps = {
    hideMenu: false,
    titleVariant: 'title1',
    footerText: '',
    noPadding: false,
    loading: false,
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
    }

    render() {
        const {
            noPadding,
            title,
            titleVariant,
            loading,
            children,
            footerText,
        } = this.props;

        return (
            <View style={styles.container}>
                <ScrollView style={( noPadding ? null : styles.screenWrapper )}>
                    {
                        title &&
                        <View style={( noPadding ? styles.headerWrapperPadding : styles.headerWrapper )}>
                            <TouchableOpacity onPress={this.onMenuPress} style={styles.menuIcon}>
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
                    {
                        loading
                        ? <ActivityIndicator size="large" color={theme.palette.primary} />
                        : children
                    }
                    {
                         !_.isEmpty(footerText) &&
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

Screen.defaultProps = defaultProps;
Screen.propTypes = propTypes;

export default Screen;
