import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // TODO: Complete
  container: {
    padding: 20,
    display: 'flex',
    flexDirection: 'column'
  },
  image: {
    width: '100%',
    minHeight: 400
  },
  containerTexts: {
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    paddingTop: 20
  },
  title: {
    fontSize: 21,
    fontWeight: 'bold'
  },
  subtitle: {
    color: '#959595'
  }
});
