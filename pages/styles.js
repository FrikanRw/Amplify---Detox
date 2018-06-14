import { StyleSheet} from 'react-native';


const styles = StyleSheet.create({
  TextInputContainer: {
    borderBottomColor: '#0F2051',
    borderBottomWidth: 1,
    paddingBottom: 8.5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height: 52,
    width: 279,
  },
  TextInput: {
    marginTop: 23,
    width: 279,
    color: '#0F2051',
    padding: 0,
    fontSize: 16,
  },
  ButtonContainer: {
    marginTop: 32,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Bumper: {
    height: 350,
  },
});

export default styles;
