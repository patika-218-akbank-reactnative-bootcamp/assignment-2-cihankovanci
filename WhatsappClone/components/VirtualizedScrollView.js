import React from 'react';
import { FlatList } from 'react-native';
/*I had a error due to using ScrollView Component so i created another one*/
const VirtualizedScrollView = props => {
    return (
        <FlatList
            {...props}
            data={[]}
            keyExtractor={(e, i) => 'dom' + i.toString()}
            ListEmptyComponent={null}
            renderItem={null}
            ListHeaderComponent={() => <>{props.children}</>}
        />
    );
};

export default VirtualizedScrollView;
