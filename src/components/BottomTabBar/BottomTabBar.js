import React from 'react'
import { View, StyleSheet } from 'react-native'

export default function BottomTabBar(props) {
    return <View style={styles.row}>
        <View style={{ ...styles.cell, ...styles.leftCell }} />
        <View style={{ ...styles.cell, backgroundColor: 'skyblue' }} />
        <View style={{ ...styles.cell, ...styles.rightCell }} />
    </View>
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
        borderTopLeftRadius: 32, borderBottomLeftRadius: 32, backgroundColor: 'powderblue',
    },
    rightCell: {
        borderTopRightRadius: 32, borderBottomRightRadius: 32, backgroundColor: 'steelblue',
    }
})