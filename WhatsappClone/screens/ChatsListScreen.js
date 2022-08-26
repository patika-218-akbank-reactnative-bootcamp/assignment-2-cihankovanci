import React, { useState } from "react";
import { Text, View, StyleSheet, FlatList, Pressable, TouchableOpacity } from 'react-native';

import Chats from "../components/Chats";
import chatList from "../chatList";

import Chat_data from "../Chat_data.json";




const ChatsListScreen = (props) => {

    const renderChats = ({ item }) =>
        <Chats chat={item} />;




    return (

        <View style={styles.container}>
            <TouchableOpacity >
                <View>
                    <FlatList
                        data={Chat_data}
                        renderItem={renderChats}
                        keyExtractor={item => item.id}
                    />
                </View>
            </TouchableOpacity>

        </View>

    );
};

export default ChatsListScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    },
});