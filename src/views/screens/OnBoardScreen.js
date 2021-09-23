import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet, Image, StatusBar, View, Text, Pressable } from 'react-native'
import events from "../../consts/data"
import COLORS from "../../consts/colors"


const style = StyleSheet.create({
    image: {
        height: 420,
        width: "100%",
        borderBottomLeftRadius: 140
    },
    indicatorContainer: {
        height: 20,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    indicator: {
        height: 3,
        width: 30,
        backgroundColor: COLORS.grey,
        marginHorizontal: 5,
        borderRadius: 5,
    },
    indicatorActive: {
        backgroundColor: COLORS.dark,
    },
    titleContainer: {
        paddingHorizontal: 20,
        paddingTop: 20
    },
    title: {
        fontSize: 26,
        fontWeight: "bold",
    },
    text: {
        marginTop: 10,
        fontSize: 16,
        color: COLORS.dark,
    },
    btn: {
        height: 50,
        marginHorizontal: 10,
        borderRadius: 20,
        backgroundColor: COLORS.dark,
        justifyContent: "center",
        alignItems: "center",
    }
})


const OnBoardScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <StatusBar translucent={true} backgroundColor={COLORS.tranparent} />
            <Image
                style={style.image}
                source={require("../../assets/slider-1.jpg")}
            />
            <View style={style.indicatorContainer}>
                <View style={style.indicator}></View>
                <View style={style.indicator}></View>
                <View style={style.indicator}></View>
                <View style={[style.indicator, style.indicatorActive]}></View>
            </View>
            <View style={style.titleContainer}>
                <View>
                    <Text style={style.title}>Discover your event ❤️</Text>
                </View>
                <View>
                    <Text style={style.text}>Get tickets to the most loved artists, the biggest festivals and the most popular events at very affordable prices!</Text>
                </View>
                <View>
                    <Pressable style={{ flex: 1, paddingBottom: 50, marginTop: 70 }} onPress={() => navigation.navigate("HomeScreen")}>
                        <View style={style.btn}>
                            <Text style={{ color: COLORS.white }}>Get Started</Text>
                        </View>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default OnBoardScreen
