import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';


interface Props {
    
}
 
interface State {
    count:number
}
 
class ClassCounter extends React.Component<Props, State> {
    constructor(props: Props){
        super(props)
        this.state ={
            count:0
        }
    }

    increment=()=>{
        this.setState({count:this.state.count+1})
    }
    render() { 
        return (<View style={styles.rootViewStyle}>
            <Button
             title={'Count ' +this.state.count} 
             color='000000'
            onPress={()=>this.increment()}/>
        </View>  );
    }
}


const styles = StyleSheet.create({
    rootViewStyle:{
      justifyContent:'center',
      alignSelf:'center',
      flex:1
    },
    buttonStyle:{
        backgroundColor:'#007AFF'
    }
    }); 
export default ClassCounter ;