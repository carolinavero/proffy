import React, { useContext } from 'react';
import { View, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
});

const Login: React.FC = () =>  {

  

    function handleLogin() {
        
    }

    return (

        <View style={styles.container}>
            <Button title="Login" onPress={handleLogin} />
        </View>
    
    );
};

export default Login;