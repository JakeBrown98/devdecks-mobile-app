import React from 'react';
import _ from 'lodash';
import HTML from 'react-native-render-html';
import { View, StyleSheet } from 'react-native';
import { Screen, Typography } from '../components';
import theme from '../theme';

const styles = StyleSheet.create({
    pTag: {
        fontFamily: theme.font.regular,
        color: theme.palette.black,
        fontSize: 19,
        lineHeight: 24,
        marginBottom: theme.unit * 2,
    },
    spanTag: {
        paddingLeft: theme.unit,
    },
    sectionTag: {
        backgroundColor: '#34313F',
        paddingTop: theme.unit * 3,
        paddingBottom: theme.unit * 3,
        paddingLeft: theme.unit * 2,
        paddingRight: theme.unit * 2,
        borderRadius: theme.unit,
        marginTop: theme.unit * 2,
        marginBottom: theme.unit * 4,
    },
    preTag: {
        color: theme.palette.white,
        fontSize: 13,
    },
    linksWrapper: {
        marginBottom: theme.unit * 4,
    },
    linksTitle: {
        marginBottom: theme.unit * 2,
    },
    linkLabel: {
        color: theme.palette.primary,
    }
});

const exampleJSON = `
{
      "answer": "<p>Actions are payloads of information that send data from your application to your store.</p><p>They are defined JavaScript objects and must have a type property that indicates the type of action being performed. Types should typically be defined as string constants.</p>\\n\\n<p>\\nHere is an example action which represents posting a comment:\\n</p>\\n<section><pre>\\nconst ADD_TODO = 'ADD_TODO';\\n\\n{\\n\\ttype: ADD_TODO,\\n\\ttext:'Take the dog for a walk'\\n}\\n</pre></section>",
      "links": [
        {
          "label": "Redux Docs: Actions",
          "url": "https://redux.js.org/basics/actions#actions"
        }
      ],
      "question": ""
    }
`;

const testString = JSON.parse(exampleJSON);

class AnswerScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Markdown Example'
    };

    render() {
        const { links, answer } = testString;

        return (
            <Screen
                title="How to check if an object is an array or not?"
                titleVariant="large"
                {...this.props}
            >
                <HTML
                    html={answer}
                    tagsStyles={{
                        p: styles.pTag,
                        pre: styles.preTag,
                        b: styles.spanTag,
                        section: styles.sectionTag,
                    }}
                />
                {
                    !_.isEmpty(links) &&
                        <View style={styles.linksWrapper}>
                            <Typography
                                variant="large"
                                style={styles.linksTitle}
                            >
                                Learning resources:
                            </Typography>
                            {
                                links.map(link =>
                                    <Typography
                                        style={styles.linkLabel}
                                        key={link.label}
                                    >
                                        { link.label }
                                    </Typography>
                                )
                            }
                        </View>
                }
            </Screen>
        );
    }
}

export default AnswerScreen;
