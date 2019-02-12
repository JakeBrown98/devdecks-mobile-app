import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { DrawerItems, SafeAreaView } from 'react-navigation';
import theme from '../theme';
import { Typography } from '../components';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    drawerHeader: {
        // backgroundColor: theme.palette.light,
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
        fontSize: 17,
        fontWeight: 'normal',
    },
    activeLabelStyle: {
        color: theme.palette.dark,
    },
    inactiveLabelStyle: {
        color: theme.palette.black,
    },
    feedbackWrapper: {
        position: 'absolute',
        bottom: theme.unit * 3,
    },
});

class CustomDrawerComponent extends React.Component {
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
                        activeBackgroundColor={theme.palette.light}
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

export default CustomDrawerComponent;
