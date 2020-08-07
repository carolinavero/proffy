import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#e6e6f0',
        borderRadius: 8,
        marginBottom: 16,
        overflow: "hidden"
    },

    profile: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 24
    },

    avatar: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: '#eee'
    },

    profileInfo: {
        marginLeft: 16
    },

    name: {
        fontFamily: 'Oswald_400Regular',
        color: '#173d7a',
        fontSize: 20
    }, 

    subject: {
        fontFamily: 'Montserrat_600SemiBold',
        color: "#ccc",
        fontSize: 12,
        marginTop: 4
    },

    bio: {
        fontFamily: 'Montserrat_600SemiBold',
        color: "#ccc",
        fontSize: 14,
        marginHorizontal: 24,
        lineHeight: 24
    },

    footer: {
        backgroundColor: '#fafafc',
        padding: 24,
        alignItems: 'center',
        marginTop: 24
    },

    price: {
        fontFamily: 'Montserrat_600SemiBold',
        color: '#ccc',
        fontSize: 14
    },

    priceValue: {
        fontFamily: 'Oswald_400Regular',
        color: '#173d7a',
        fontSize: 16,
    }, 

    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 16,
        padding: 10
    },

    favoriteButton: {
        backgroundColor: '#173d7a',
        width: 56,
        height: 56,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 8
    },

    favorited: {
        backgroundColor: '#e33d3d'
    },

    contactButton: {
        backgroundColor: '#ff2c9c', //'#04d361',
        flex:1,
        height: 56,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        marginRight: 8
    },

    contactButtonText: {
        fontFamily: 'Oswald_400Regular',
        color: '#fff',
        fontSize: 16,
        marginLeft: 16
    }

});

export default styles;