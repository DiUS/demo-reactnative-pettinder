import React, { useState, } from 'react'
import { Image, Text, View, StyleSheet } from 'react-native'
import { Title, Paragraph, IconButton, Colors } from 'react-native-paper'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import BottomTabBar from '../../components/BottomTabBar/BottomTabBar';
import Toggle from 'react-native-toggle-element'
import HotToggle from '../../components/ToggleButton/ToggleButton';
import CardStack, { Card } from 'react-native-card-stack-swiper';

const cards = [
    { name: 'Wreckit Ralph', image: 'https://media.giphy.com/media/GfXFVHUzjlbOg/giphy.gif' },
    { name: 'Baby Boi', image: 'https://media.giphy.com/media/irTuv1L1T34TC/giphy.gif' },
    { name: 'Two for One', image: 'https://media.giphy.com/media/LkLL0HJerdXMI/giphy.gif' },
    { name: 'Say Wha', image: 'https://media.giphy.com/media/fFBmUMzFL5zRS/giphy.gif' },
    { name: 'All my own', image: 'https://media.giphy.com/media/oDLDbBgf0dkis/giphy.gif' },
    { name: 'Num Nums', image: 'https://media.giphy.com/media/7r4g8V2UkBUcw/giphy.gif' },
    { name: 'Water Goddess', image: 'https://media.giphy.com/media/K6Q7ZCdLy8pCE/giphy.gif' },
    { name: 'What a Good Boi', image: 'https://picsum.photos/id/237/400/600' },
    { name: 'Chillin', image: 'https://media.giphy.com/media/3oEduJbDtIuA2VrtS0/giphy.gif' },
]

export default function HomeScreen(props) {
    const [toggleValue, setToggleValue] = useState(true);
    const [cardDeck, setCardDeck] = useState(loadCards())
    const { extraData } = props;

    return (
        <View style={styles.container}>

            <View style={styles.content} >
                <HotToggle />
                <CardStack
                    style={styles.content}
                    loop="true"
                    renderNoMoreCards={() => <Text style={{ fontWeight: '700', fontSize: 18, color: 'gray', marginTop: 100}}>No more cards :(</Text>}
                    // ref={swiper => {
                    //     this.swiper = swiper
                    // }}
                    onSwiped={() => console.log('onSwiped')}
                    onSwipedLeft={() => console.log('onSwipedLeft')}
                >
                    {cardDeck}

                </CardStack>
                
                <View style={styles.buttons}>
                    <IconButton icon="close" size={50} color="red" onPress={() => setCardDeck(loadCards())} />
                    <IconButton icon="heart" size={50} color="green" onPress={() => console.log('I <3 you')} />
                </View>
            </View>
            <View style={styles.bottom}>
                <BottomTabBar />
            </View>
        </View>
    )
}

const loadCards = () => {
    console.log('Calling loadCards');
    return cards.map((card) => {
        return (<Card style={[styles.card]}>
            <Title style={styles.title}>{card.name}</Title>
            <Image
                style={styles.cardImage}
                source={{
                    uri: card.image,
                }}
            />
            <Paragraph>What a pretty picture</Paragraph>
        </Card>)
    })
}

const moveToBottom = (component) => {
    <View style={styles.bottom}>
        {component}
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexGrow: 6,
        alignItems: 'center',
    },
    content: {
        flex: 1,
        flexGrow: 10,
        marginTop: 10,
        alignItems: 'center',
    },
    card: {
        justifyContent: "center",alignItems: "center",
        borderRadius: 20,
        width: 350,
        height: 300,
        marginTop: 20,
        backgroundColor: Colors.grey300
    },
    buttons: {
        flexDirection: 'row',

    },
    bottom: {
        flex: 1,
        flexGrow: 1,
        justifyContent: 'flex-end',
        marginBottom: 18,
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    cardImage: {
        width: 200,
        height: 200,
    },
    title: {
        textAlign: "center",
        paddingTop: 8,
        paddingBottom: 8,
        fontWeight: "bold",
    }
})

