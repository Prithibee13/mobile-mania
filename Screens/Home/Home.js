import LottieView from "lottie-react-native"
import { Image, Pressable, StyleSheet, Text, View } from "react-native"
import Greet from "../../Components/Home/Greet"
import HomeButton from "../../Components/Home/Button"

const Home = (props) => {

    const { navigation } = props

    const goBrands = () =>
    {
        navigation.navigate('Brands')
    }
    return (
        <View style={styles.homeContainer}>
                <Greet></Greet>
                <HomeButton brand = {goBrands}></HomeButton>
            
        </View>
    )
}

export default Home

const  styles = StyleSheet.create({
    homeContainer : 
    {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    }
})