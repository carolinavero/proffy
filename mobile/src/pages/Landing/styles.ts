import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#173d7a',
        flex: 1,
        justifyContent: 'center',
        padding: 40
    },

    banner: {
        width: '100%',
        resizeMode: 'contain'
    },

    title: {
        fontFamily: 'Montserrat_400Regular',
        color: '#fff',
        fontSize: 20,
        lineHeight: 30,
        marginTop: 40,
    },

    titleBold: {
        fontFamily: 'Montserrat_600SemiBold'

    },

    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 40,
        justifyContent: 'space-between',
    }, 

    button: {
        height: 150,
        width: '48%',
        backgroundColor: '#333',
        borderRadius: 8,
        padding: 24,
        justifyContent: 'space-between',
    },

    buttonText: {
        fontFamily: 'Oswald_400Regular',
        color: '#ffffff',
        fontSize: 20
    },

    buttonPrimary: {
        backgroundColor: '#396baa',
    },

    buttonSecondary: {
        backgroundColor: '#ff2c9c',
    },

    totalConnections: {
        color: '#fff',
        fontFamily: 'Montserrat_400Regular',
        fontSize: 12,
        lineHeight: 20,
        maxWidth: 140,
        marginTop: 40,
    }
});

export default styles;