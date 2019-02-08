import React from 'react';
import { View, StyleSheet } from 'react-native';
import Markdown from 'react-native-markdown-renderer';
import { Screen, Typography } from '../components';
import theme from '../theme';

const styles = StyleSheet.create({
    codeWrapper: {
        marginTop: theme.unit * 6,
    },
    exampleHeading: {
        marginBottom: theme.unit * 3,
    },
});

const TEST_STRING = `
~~~
ReactDOM.createPortal(child, container)
~~~
`;

class MarkdownScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Markdown Example'
    };

    render() {
        return (
            <Screen
                hideMenu
                title="What is context?"
                titleVariant="large"
                {...this.props}
            >
                <Typography>
                    Context provides a way to pass data through the component tree without having to pass props down manually at every level. For example, authenticated user, locale preference, UI theme need to be accessed in the application by many components.
                </Typography>
                <View style={styles.codeWrapper}>
                    <Typography variant="large" style={styles.exampleHeading}>
                        Code Example
                    </Typography>
                    <Markdown>
                        { TEST_STRING }
                    </Markdown>
                </View>
            </Screen>
        );
    }
}

export default MarkdownScreen;
