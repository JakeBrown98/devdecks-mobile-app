import React from 'react';
import { ScrollView, View, StatusBar, TouchableOpacity, StyleSheet } from 'react-native';
import { DrawerActions } from 'react-navigation-drawer';
import { Feather } from '@expo/vector-icons';
import { STATUS_BAR_HEIGHT } from '../constants';
import Typography from './Typography';
import theme from '../theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    screenWrapper: {
        paddingLeft: theme.unit * 3,
        paddingRight: theme.unit * 3,
    },
    headerWrapper: {
        marginBottom: theme.unit * 3,
    },
    menuIcon: {
        marginTop: theme.unit * 2 + STATUS_BAR_HEIGHT,
        marginBottom: theme.unit * 4,
    },
});

class Screen extends React.Component {
    onMenuPress = () => {
        this.props.navigation.dispatch(DrawerActions.openDrawer());
    };

    render() {
        const { title, children } = this.props;

        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor={theme.palette.white}
                    barStyle="dark-content"
                />
                <ScrollView style={styles.screenWrapper}>
                    {
                        title &&
                        <View style={styles.headerWrapper}>
                            <TouchableOpacity
                                onPress={this.onMenuPress}
                                style={styles.menuIcon}
                            >
                                <Feather
                                    name="menu"
                                    size={theme.unit * 3}
                                    color={theme.palette.black}
                                />
                            </TouchableOpacity>
                            <Typography variant="title1">
                                { title }
                            </Typography>
                        </View>
                    }
                    { children }
                </ScrollView>
            </View>
        );
    }
}

export default Screen;
