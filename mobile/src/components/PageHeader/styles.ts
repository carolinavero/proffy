import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingHorizontal: 40,
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
        marginBottom: 20,
    },
    logo: {
        maxWidth: 40
    },
    backIcon: {
        maxWidth: 30
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
});

export default styles;