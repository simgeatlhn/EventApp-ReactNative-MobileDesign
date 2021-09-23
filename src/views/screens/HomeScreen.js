import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet, FlatList, Dimensions, Text, StatusBar, View, Image, ScrollView, TextInput, Pressable } from 'react-native'
import events from "../../consts/data"
import COLORS from "../../consts/colors"
import { EvilIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const { width } = Dimensions.get('screen');

const style = StyleSheet.create({
    header: {
        paddingVertical: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
    },
    profile: {
        height: 60,
        width: 60,
        borderRadius: 25,
    },
    searchInputContainer: {
        height: 50,
        backgroundColor: COLORS.light,
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    sortButton: {
        backgroundColor: COLORS.blue,
        height: 50,
        width: 50,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10
    },
    optionListContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
        paddingHorizontal: 20
    },
    optionCard: {
        height: 240,
        width: "100%",
        flex: 1, //
        elevation: 10,
        backgroundColor: COLORS.white,
        alignItems: "center",
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingTop: 10
    },
    optionCardImage: {
        height: 180,
        width: "100%",
        borderRadius: 20
    },
    optionCardTitle: {
        fontSize: 16,
        fontWeight: "bold",
        color: COLORS.dark
    },
    categoryListContainer: {
        marginTop: 30,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 40
    },
    categoryListTitle: {
        fontWeight: "bold",
        fontSize: 16,
        color: COLORS.grey
    },
    activeCategoryListTitle: {
        color: COLORS.dark,
        borderBottomWidth: 1,
        paddingBottom: 5
    },
    card: {
        height: 300,
        backgroundColor: COLORS.white,
        elevation: 10,
        width: width - 40,
        marginRight: 20,
        borderRadius: 20,
        padding: 15,
    },
    cardImage: {
        width: "100%",
        height: 150,
        borderRadius: 15,
    },
    icons: {
        flexDirection: "row",
        marginRight: 25,
    }
})

const HomeScreen = ({ navigation }) => {

    //Event List
    const ListOptions = () => {
        const optionsList = [
            { title: "Concerts", img: require("../../assets/slider-2.jpg") },
            { title: "Festivals", img: require("../../assets/Festival.jpg") },
            { title: "Events", img: require("../../assets/slider-3.jpg") },
        ]
        return (
            <View style={style.optionListContainer}>
                {/* //**map */}
                {optionsList.map((option, index) => (
                    <View style={style.optionCard} key={index} >
                        <Image source={option.img} style={style.optionCardImage} />
                        <Text style={style.optionCardTitle}>{option.title}</Text>
                    </View>
                ))}
            </View>
        )
    }

    //Category List
    const ListCategories = () => {
        const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
        const categoryList = ["Today", "Upcoming", "All"]
        return (
            <View style={style.categoryListContainer}>
                {categoryList.map((category, index) => (
                    <Pressable key={index} onPress={() => setSelectedCategoryIndex(index)}>
                        <Text
                            style={[
                                style.categoryListTitle,
                                index == selectedCategoryIndex && style.activeCategoryListTitle
                            ]}>
                            {category}
                        </Text>
                    </Pressable>
                ))}
            </View >
        );
    }

    //Card-Concert-Festival
    const Card = ({ event }) => {
        return (
            <Pressable onPress={() => navigation.navigate("DetailsScreen", event)}>
                <View style={style.card}>
                    <Image source={event.image} style={style.cardImage} />
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginTop: 10
                    }}>
                        <Text style={{ fontWeight: "bold", fontSize: 16 }}>{event.title}</Text>
                        <Text style={{ color: COLORS.blue, fontSize: 12 }}>{event.date}</Text>
                    </View>
                    <Text style={{ color: COLORS.grey, fontSize: 14, marginTop: 5 }}>{event.location}</Text>
                    <Text style={{ color: COLORS.dark }}>{event.description}</Text>
                    <View style={{
                        marginTop: 10,
                        flexDirection: "row",

                    }}>
                        <View style={style.icons}>
                            <MaterialIcons name="favorite-border" size={22} color={COLORS.dark} />
                            <Entypo name="share-alternative" style={{ marginLeft: 270 }} size={22} color={COLORS.dark} />
                        </View>
                    </View>
                </View>
            </Pressable>

        )
    }

    return (
        <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
            {/* //StatusBar */}
            <StatusBar
                translucent={false}
                backgroundColor={COLORS.white}
                barStyle="dark-content"
            />
            {/* //Header-Profile */}
            <View style={style.header}>
                <View>
                    <Text style={{ color: COLORS.blue }}>Hi Simge !</Text>
                    <Text style={{ color: COLORS.dark, fontWeight: "bold", fontSize: 16 }}>Discover Fantastic Concert & Events</Text>
                </View>
                <Image
                    style={style.profile}
                    source={require("../../assets/profile.png")}
                />
            </View>
            <ScrollView>
                {/* //Search */}
                <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 20 }}>
                    <View style={style.searchInputContainer}>
                        <EvilIcons name="search" size={28} color={COLORS.dark} />
                        <TextInput placeholder="Search event..." />
                    </View>
                    <View style={style.sortButton}>
                        <MaterialCommunityIcons name="sort-ascending" size={25} color={COLORS.dark} />
                    </View>
                </View>
                {/* //EventList */}
                <ListOptions />
                {/* //CategoryList */}
                <ListCategories />
                {/* //Card-Concert-Festival */}
                <FlatList
                    contentContainerStyle={{ paddingLeft: 20 }}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={events}
                    renderItem={({ item }) => <Card event={item} />}
                />
            </ScrollView>
        </SafeAreaView>

    )
}

export default HomeScreen
