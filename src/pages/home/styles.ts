import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 100,
  },
  container2:{
    paddingBottom: 50,

  },

  image: {
    
    width: 350,
    height: 350,
    padding: 50,
    marginBottom: 50, 

  },

  botoes:
  {
   display: 'flex',
   flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: 100,
  },

  text: { 
    padding: 10,
    textAlign: 'left',
    fontSize: 15,
    fontWeight: 'bold', 

  }


});