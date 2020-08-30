import React from 'react'
import { View, StyleSheet } from 'react-native'
import { IconButton } from 'react-native-paper'

export default function BottomTabBar(props) {
    return ( 
    <View style={styles.row}>
        <View style={{ ...styles.cell, ...styles.leftCell }} >
        <IconButton icon="cards" onPress={() => console.log("Pressed Home")}
                    size={30} 
                    title="match"
                    color="#fff" />
            </View>
        <View style={{ ...styles.cell, alignItems: "center", backgroundColor: 'skyblue' }} >
            <IconButton icon="chat" size={30} onPress={() => console.log("Pressed Chat")} title="Chat" color="#fff" />
        </View>
        <View style={{ ...styles.cell, ...styles.rightCell }} >
            <IconButton icon="account-circle" size={30} onPress={() => console.log("Pressed Profile")} title="Profile" color="#fff" />
        </View>
    </View>
  
    )
}



const styles = StyleSheet.create({
     
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    cell: {
        width: 75,
        height: 50,

    },
    leftCell: {
        borderTopLeftRadius: 32, borderBottomLeftRadius: 32, backgroundColor: 'powderblue', alignItems: "center",
    },
    rightCell: {
        borderTopRightRadius: 32, borderBottomRightRadius: 32, backgroundColor: 'steelblue', alignItems: "center",
    }
})