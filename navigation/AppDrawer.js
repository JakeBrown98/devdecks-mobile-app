import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { DrawerItems, SafeAreaView } from 'react-navigation';
import theme from '../theme';

import { Typography } from '../components';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.palette.white,
        alignItems: 'center',
    },
    drawerHeader: {
        height: theme.unit * 17,
        width: '100%',
    },
    safeArea: {
        width: '100%',
    },
    itemStyle: {
        paddingTop: theme.unit,
        paddingBottom: theme.unit,
    },
    labelStyle: {
        fontFamily: theme.font.regular,
        fontSize: (theme.unit * 2) + 1,
        fontWeight: 'normal',
    },
    activeLabelStyle: {
        color: theme.palette.primary,
    },
    inactiveLabelStyle: {
        color: theme.palette.black,
    },
    feedbackWrapper: {
        position: 'absolute',
        bottom: theme.unit * 3,
    },
});

class AppDrawer extends React.Component {
    onFeedbackPress = () => {
        console.log(123);
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.drawerHeader} />
                <SafeAreaView 
                    style={styles.safeArea} 
                    forceInset={{ 
                        top: 'always', 
                        horizontal: 'never' 
                    }}
                >
                    <DrawerItems
                        activeLabelStyle={styles.activeLabelStyle}
                        inactiveLabelStyle={styles.inactiveLabelStyle}
                        labelStyle={styles.labelStyle}
                        activeBackgroundColor={theme.palette.secondary}
                        {...this.props}
                    />
                </SafeAreaView>
                <TouchableOpacity
                    style={styles.feedbackWrapper}
                    activeOpacity={theme.activeTouchOpacity}
                    onPress={this.onFeedbackPress}
                >
                    <Typography variant="tiny">
                        Have some feedback?
                    </Typography>
                </TouchableOpacity>
            </View>
        );
    }
}

export default AppDrawer;
