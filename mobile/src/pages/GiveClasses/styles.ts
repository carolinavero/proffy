import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#173d7a',
        justifyContent: 'center',
        padding: 40

    },

    content: {
        flex: 1,
        justifyContent: 'center',
        
    },

    title: {
        fontFamily: 'Oswald_400Regular',
        color: '#fff', 
        fontSize: 32,
        lineHeight: 37,
        maxWidth: 180
    },

    description: {
        marginTop: 24,
        color: '#fff',
        fontSize: 16,
        lineHeight: 26,
        fontFamily: 'Montserrat_400Regular',
        maxWidth: 240
    },

    okButton: {
        marginVertical: 40,
        backgroundColor: '#ff2c9c',
        height: 58,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },

    okButtonText: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Oswald_400Regular'
    }
});

export default styles;