import React from 'react';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { AppLoading, Font } from 'expo';
import { initializeApp } from './actions';
import reducers from './reducers';

import AppNavigator from './navigation/AppNavigator';


const store = createStore(
    reducers,
    applyMiddleware(thunk)
);

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoadingComplete: false,
        };
    }

    loadResourcesAsync = async () => {
        store.dispatch(initializeApp());

        return Promise.all([
            Font.loadAsync({
                'acumin': require('./assets/fonts/acumin-regular.otf'),
                'acumin-bold': require('./assets/fonts/acumin-bold.otf'),
            }),
        ]);
    };

    handleLoadingError = error => {
        console.log(error);
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
            <Provider store={store}>
                <AppNavigator />
            </Provider>
        );
    }
}

export default App;
