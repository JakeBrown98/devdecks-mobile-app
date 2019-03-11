import React from 'react';
import HTML from 'react-native-render-html';
import { StyleSheet } from 'react-native';
import { Screen } from '../components';
import theme from '../theme';

const styles = StyleSheet.create({
    pTag: {
        fontFamily: theme.font.regular,
        color: theme.palette.black,
        fontSize: 19,
        lineHeight: 24,
    },
    sectionTag: {
        backgroundColor: '#34313F',
        paddingTop: theme.unit * 3,
        paddingBottom: theme.unit * 3,
        paddingLeft: theme.unit * 2,
        paddingRight: theme.unit * 2,
        borderRadius: theme.unit,
    },
    preTag: {
        color: theme.palette.white,
        fontSize: 13,
    }
});

const testString = "<section><pre>function greet(param) {\n&emsp;&emsp;if (typeof param === 'string')\n}</pre>\n</section>";

class Answer extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Markdown Example'
    };

    render() {
        return (
            <Screen
                hideMenu
                title="How to check if an object is an array or not?"
                titleVariant="large"
                {...this.props}
            >
                <HTML
                    html={`${testString}`}
                    tagsStyles={{
                        p: styles.pTag,
                        pre: styles.preTag,
                        section: styles.sectionTag,
                    }}
                />
            </Screen>
        );
    }
}

export default Answer;
