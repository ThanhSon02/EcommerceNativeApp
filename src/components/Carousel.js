import { Text, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";

function CarouselCPN() {
    return ( 
        <View style={{display: 'flex', flexDirection: "column", marginTop: 36}}>
            <View style={{display: 'flex', flexDirection: "row", alignItems: "center",justifyContent: "space-between"}}>
                <Text style={{fontSize: 20, fontWeight: "bold"}}>Deals of the day</Text>
                <Text style={{color: "#B0B5B9"}}>See all</Text>
            </View>
            <View>
                <Carousel
                    loop
                    autoPlay={true}
                    data={[...new Array(6).keys()]}
                    scrollAnimationDuration={1000}
                    onSnapToItem={(index) => console.log('current index:', index)}
                    renderItem={({ index }) => (
                        <View
                            style={{
                                flex: 1,
                                borderWidth: 1,
                                justifyContent: 'center',
                            }}
                        >
                            <Text style={{ textAlign: 'center', fontSize: 30 }}>
                                {index}
                            </Text>
                        </View>
                    )}
                />
            </View>
        </View>
     );
}

export default CarouselCPN;