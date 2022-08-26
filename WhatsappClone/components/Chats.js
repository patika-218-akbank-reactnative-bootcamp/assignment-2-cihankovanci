import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

import { useNavigation } from "@react-navigation/native";

const Chats = ({ chat }) => {

    const navigation = useNavigation();

    function selectMessageHandler() {
        navigation.navigate('Messages', {
            itemId: 86,
            otherParam: 'anything you want here',
            chat_name: chat.name,
            profile: chat.image,
            messages1: chat.message1,
            messages2: chat.message2,
            messages3: chat.message3,

        });
    }




    return (
        <View>
            <TouchableOpacity style={styles.container} onPress={selectMessageHandler}>
                <View style={styles.image_container}>
                    <Image style={styles.profilePhoto} source={{ uri: chat.image }} />
                </View>

                <View style={styles.text_container}>
                    <Text style={styles.Name_TextStyle}>{chat.name}</Text>
                    <Text numberOfLines={2} style={styles.Message_TextStyle}>{chat.message3}</Text>
                </View>
                <View style={styles.time_container}>
                    <Text>{chat.time}</Text>
                </View>
            </TouchableOpacity>
            <View
                style={{
                    borderBottomColor: 'gray',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                }}
            />
        </View >
    );
};

export default Chats;

const styles = StyleSheet.create({
    profilePhoto: {
        width: 65,
        height: 65,
        borderRadius: 50,
        alignItems: 'center',


    },

    container: {
        flexDirection: 'row',
        margin: 9,
        marginRight: +9,
        backgroundColor: 'white',
        alignContent: 'space-between',
    },
    Name_TextStyle: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 25,
        alignSelf: 'flex-start',
        justifyContent: 'flex-start'


    },
    Message_TextStyle: {
        flexDirection: 'row',

    },
    text_container: {
        flex: 3,
        justifyContent: 'center',
        justifyContent: 'flex-start',


    },
    image_container: {
        flex: 1,
    },
    time_container: {
        alignSelf: 'flex-start',
        justifyContent: 'flex-end',
    }

});