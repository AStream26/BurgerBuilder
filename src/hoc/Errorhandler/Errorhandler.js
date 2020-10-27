import React,{Component} from 'react';
import Aux from '../Auxilary.js';
import Modal from '../../components/UI/Modal/Modal';


const error = (Wrappedcomponent,axios)=>{
        return class extends Component{

        	state ={
        		showerror:null
        	}

         componentDidMount(){
          	this.reqintersept=axios.interceptors.request.use(req=>{
             this.setState({showerror:null});
             return req;
          	});
          this.resintersept=	axios.interceptors.response.use(response=>response,error=>{
                this.setState({showerror:error});

          	});
           

          }

          componentWillUnmount(){
            axios.interceptors.request.eject(this.reqintersept);
            axios.interceptors.response.eject(this.resintersept);

          }
           toggleerror=()=>{
           	this.setState({showerror:null});
           }
        	render(){
            
        		return (
        	<Aux>
        	<Modal purchase={this.state.showerror} click={this.toggleerror} >{this.state.showerror?this.state.showerror.message:null} 
        	</Modal>
        	<Wrappedcomponent {...this.props}/>
        	</Aux>
        	);


        	}
        	
        }
}


export default error;