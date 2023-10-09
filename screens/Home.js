import { StyleSheet, Text, SafeAreaView, ScrollView } from "react-native";
import Navbar from "../components/Navbar";
import CarouselCPN from "../components/CarouselCPN";
import ProductList from "../components/ProductList";

function Home() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header_text}>Hello Michael</Text>
            <Navbar />
            <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom: 100}}>
                <CarouselCPN />
                <ProductList title={"Recommended for you"} />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: "#fff"
    },
    header_text: {
        fontSize: 32,
        fontWeight: "bold",
    },
});

export default Home;
