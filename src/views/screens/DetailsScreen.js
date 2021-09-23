import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ImageBackground, StyleSheet, View, Text, FlatList, Image, Dimensions } from 'react-native'
import events from "../../consts/data"
import COLORS from "../../consts/colors"
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler'

const { width } = Dimensions.get('screen');

const style = StyleSheet.create({
    backgroundContainer: {
        //elevation: 20,??
        marginHorizontal: 20,
        marginTop: 20,
        alignItems: "center",
        height: 400,
    },
    backgroundImage: {
        height: "100%",
        width: "100%",
        borderRadius: 20,
        overflow: "hidden"
    },
    header: {
        paddingVertical: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10,
    },
    headerBtn: {
        height: 40,
        width: 40,
        backgroundColor: COLORS.white,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center"
    },
    buyTicket: {
        top: -30,
        width: 140,
        backgroundColor: COLORS.dark,
        paddingHorizontal: 20,
        height: 40,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    detailsContainer: {
        flex: 1,
        paddingHorizontal: 20,
        marginTop: 40 //btn
    },
    lastTickets: {
        height: 30,
        width: 100,
        backgroundColor: COLORS.blue,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center"

    },
    upcoming: {
        width: 150,
        height: 150,
        marginRight: 10,
        borderRadius: 10
    },
    footer: {
        height: 70,
        backgroundColor: COLORS.light,
        borderRadius: 10,
        paddingHorizontal: 20,
        marginVertical: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    footerBtn: {
        height: 30,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.blue,
        borderRadius: 10,
        paddingHorizontal: 20
    }
})

const DetailsScreen = ({ navigation, route }) => {

    const event = route.params; //**data.js de olan tüm bilgileri (image,location,description) event e uygun alırız.
    const UpcomingEvents = ({ image }) => {
        return <Image source={image} style={style.upcoming} />

    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <ScrollView>
                <View style={style.backgroundContainer}>
                    <ImageBackground style={style.backgroundImage} source={event.image}>
                        <View style={style.header}>
                            <View style={style.headerBtn}>
                                <Ionicons
                                    onPress={navigation.goBack}
                                    name="arrow-back-sharp"
                                    size={20}
                                    color={COLORS.dark}
                                />
                            </View>
                            <View style={style.headerBtn}>
                                <MaterialIcons
                                    name="favorite-border"
                                    size={20}
                                    color={COLORS.dark}
                                />
                            </View>
                        </View>
                    </ImageBackground>
                    {/* //button */}
                    <View style={style.buyTicket}>
                        <Text style={{ color: COLORS.white }}>Buy a ticket</Text>
                    </View>
                </View>
                {/* //Details of event */}
                <View style={style.detailsContainer}>
                    <View style={{
                        flexDirection: "row", justifyContent: "space-between"
                    }}>
                        <Text style={{ fontSize: 20, fontWeight: "bold" }}>{event.title}</Text>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Ionicons style={{ marginRight: 5 }} name="add-circle" size={30} color={COLORS.blue} />
                            <View style={style.lastTickets}>
                                <Text style={{ color: COLORS.white }}>last 6 tickets</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Ionicons name="location-sharp" size={24} color={COLORS.dark} />
                        <View >
                            <Text style={{ color: COLORS.dark, fontSize: 16 }}>{event.location}</Text>
                        </View>
                    </View>
                    <Text style={{ fontSize: 14, fontWeight: "bold", marginTop: 20 }}>Event Schedule</Text>
                    <Text style={{ fontSize: 14, marginTop: 10 }}>Event Time : 21.00</Text>
                    <Text style={{ fontSize: 14, marginTop: 4, color: COLORS.grey }}>{event.details}</Text>
                    {/* //upcoming events */}
                    <Text style={{ fontSize: 14, marginTop: 6, marginBottom: 6, fontWeight: "bold" }}>Upcoming Events</Text>
                    <FlatList
                        snapToInterval={width - 10} //carousel effect
                        keyExtractor={(_, key) => key.toString()} //**
                        contentContainerStyle={{ marginTop: 10 }}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={event.upcoming}
                        renderItem={({ item }) => <UpcomingEvents image={item} />}
                    />
                    {/* //Footer */}
                    <View style={style.footer}>
                        <View>
                            <Text style={{ fontSize: 16, color: COLORS.grey }}>Price</Text>
                            <Text style={{ fontWeight: "bold", fontSize: 18, color: COLORS.blue }}>10₺</Text>
                        </View>
                        <View style={style.footerBtn}>
                            <Text style={{ color: COLORS.white, fontSize: 16 }}>Select Ticket</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

export default DetailsScreen
