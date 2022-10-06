import React, { Component } from "react";
import './style.css'
import { Audio } from  'react-loader-spinner'
import DataIp from "./DataIp";
import getInfo from "./services/getInfo";
export default class IpInfo extends Component{
    constructor(props){
        super(props);
        this.state = {
            info: null,
            isLoading : true
        }

    }
 
    componentDidMount(){
        getInfo().then(data=>{
            this.setState({
                info : data,
                isLoading : false
            })
        });
    }
    render(){
        return(
           
            <>
            {this.state.isLoading ?  <Audio
             height="100"
             width="100"
             color='blue'
              ariaLabel='loading'
             /> 
           
           :  
           <DataIp data={this.state.info}/>
     }
    </>
        )
    }
}