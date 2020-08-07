import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f7'
    },

    teacherList: {
        marginTop: -16,
    },

    searchForm: {
        marginBottom: 10
    },

    label: {
        color: '#fff',
        fontFamily: 'Oswald_400Regular'
    },

    inputGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    inputBlock: {
        width: '48%'
    },

    input: {
        height: 48,
        backgroundColor: '#fff',
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginTop: 3,
        marginBottom: 10
    },

    submitButton: {
        backgroundColor: '#ff2c9c',
        height: 56,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10
    },

    submitButtonText: {
        fontFamily: 'Oswald_400Regular',
        color: '#fff',
        fontSize: 16,
    },

});

export default styles;