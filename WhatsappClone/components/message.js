import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Message = ({ MessageProp, Username }) => {
    return (
        <View style={styles.container}>
            {/*  <Text style={styles.italic}>{Username}</Text> */}

            <View style={styles.contentContainer}>
                <Text style={styles.content}>{MessageProp}</Text>
                <Text style={styles.italic}>11:22</Text>
            </View>
        </View>
    );
};

export default Message;

const styles = StyleSheet.create({
    container: {
        margin: 10,
        marginRight: '30%',
        backgroundColor: '#fff',
        padding: 7,
        borderRadius: 10,
        minHeight: 60,

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },

    italic: {
        fontStyle: 'italic',
    },

    contentContainer: {
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        //  alignItems: 'flex-end'
    },
    content: {
        fontWeight: 'bold',
        fontSize: 15,
        flexWrap: 'wrap',
        flexShrink: 1,
        color: 'black',
    },
});
