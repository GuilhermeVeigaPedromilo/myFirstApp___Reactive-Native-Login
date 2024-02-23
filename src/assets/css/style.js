import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

      container: {
        flex: 1,
        },

        input: {
          borderWidth: 1,
          padding: 15,
          fontSize: 20,
          width: 300,
        },

        submenu: {
          height: 300,
          padding: 30,
          backgroundColor: 'white',
          borderRadius: 10,
          alignItems: 'center',
          gap: 25,
        },

        body: {
          flex: 1,
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        },
  });

  export default styles;