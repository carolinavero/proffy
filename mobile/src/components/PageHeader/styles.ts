import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 40,
        backgroundColor: '#173d7a',
    },
    topBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        color: '#fff',
        fontFamily: 'Oswald_400Regular',
        fontSize: 24,
        lineHeight: 32,
        maxWidth: 160,
        marginVertical: 40,
    },
    logo: {
        maxWidth: 40
    },
    backIcon: {
        maxWidth: 30
    }
});

export default styles;