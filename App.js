import React from 'react';
import { AppLoading, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';

class App extends React.Component {
    state = {
      isLoadingComplete: false,
    };
  
    loadResourcesAsync = async () => {
        return Promise.all([
            Font.loadAsync({
                // This is the font that we are using for our tab bar
                //   ...Icon.Ionicons.font,
                // We include SpaceMono because we use it in HomeScreen.js. Feel free
                // to remove this if you are not using it in your app
                'acumin': require('./assets/fonts/acumin-regular.otf'),
                'acumin-bold': require('./assets/fonts/acumin-bold.otf'),
            }),
        ]);
    };
  
    handleLoadingError = errorr => {
        console.warn(errorr);
    };
  
    handleFinishLoading = () => {
        this.setState({ isLoadingComplete: true });
    };
  
    render() {
        if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
            return (
                <AppLoading
                    startAsync={this.loadResourcesAsync}
                    onError={this.handleLoadingError}
                    onFinish={this.handleFinishLoading}
                />
            );
        }
  
        return (
            <AppNavigator />
        );
    }
}

export default App;
