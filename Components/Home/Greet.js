import { Image, StyleSheet, Text, View } from "react-native"

const Greet = () => {
    return (
        <View style={styles.greetContainer}>

            <Text style={styles.title}>Mobile maina</Text>


            <Image style={styles.img} source={{ uri: 'https://i.postimg.cc/6pXMTYyj/pix6.png' }} />
        </View>
    )
}

export default Greet

const styles = StyleSheet.create({
    greetContainer : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    },
    
    img: {
        width : 300,
        height : 300,
        marginVertical : 20,
        
    }
    ,
    title : 
    {
        textAlign : 'center',
        marginVertical : 40,
        fontWeight : 'bold',
        fontSize : 30
    }
})