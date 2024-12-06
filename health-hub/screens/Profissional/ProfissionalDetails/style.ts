import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginTop: Platform.OS == 'ios' ? 20 : 20,
    flex: 1,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    alignItems: 'center',
     paddingVertical: 15
  },
  avatarContainer: {
    width: "100%",
    justifyContent: "center",
    flex: 1,
  },
  profileInfo: {
    paddingHorizontal: 10,
    borderBottomEndRadius:20,
    borderBottomStartRadius: 20,
    backgroundColor:"#ddd",
    flexDirection: "row",
    paddingVertical: 20,
    alignItems: "center",
  },
  avatar: {
    alignSelf: 'center',
  },
  infoContainer: {
    marginLeft: 15,
  },
  name: {
    alignSelf: "flex-start",
    fontSize: 22,
  },
  profession: {
    alignSelf: "flex-start",
    fontSize: 18,
  },
  scrollView: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  description: {
    marginTop: 20,
    fontSize: 16,
  },
  formation: {
  
    marginTop: 20,
    marginBottom:5,
    fontSize: 18,
  },
  buttonsContainer: {
    bottom:20,

    width: "100%",
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: "gray",
    flex: .5,
  },
});

export default styles;
