import { Pressable, StyleSheet, Text, View } from "react-native"

const HomeButton = (props) => 
{
    const { brand } = props
    return (
        <View style={styles.btn}>
        <Pressable android_ripple={{ color: '#EEE' }} onPress={brand}>
            <View style={styles.buttonConainer}>
                <Text style={styles.btnText}>Let's Go</Text>
            </View>
        </Pressable>
        </View>
    )
}

export default HomeButton

const styles = StyleSheet.create({
    buttonConainer:
    {
        backgroundColor: '#FF4545',
        borderRadius: 20,
        width :150,
        height:50,
        elevation : 15,

    },
    btnText :
    {
        textAlign : 'center',
        color : '#fff',
        marginVertical : 'auto',
        fontSize: 15,
        fontWeight : 'bold'
    },

    btn:
    {
        marginVertical: '10%'
    }
    
})