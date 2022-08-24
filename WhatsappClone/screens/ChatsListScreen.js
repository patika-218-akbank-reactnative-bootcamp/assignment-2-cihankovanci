import React, { useState } from "react";
import { Text, View, StyleSheet, FlatList, SafeAreaView } from 'react-native';

import Chats from "../components/Chats";

import Chat_data from "../Chat_data.json";




const ChatsListScreen = () => {

    const renderChats = ({ item }) =>
        <Chats chat={item} />;

    return (

        <View style={styles.container}>
            <SafeAreaView>
                <FlatList
                    data={Chat_data}
                    renderItem={renderChats}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>

        </View>

    );
};

export default ChatsListScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    },
});