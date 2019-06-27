import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
class App extends Component{
    state={
        lat:null,
        err:null
    }

    // constructor(props){
    //     super(props);

    //     this.state={
    //         lat:null,
    //         err:null
    //     }
    // }
    
    
    conditionalRendering=()=>{
        if(this.state.err)return <Spinner/>
        else if(this.state.lat) return<div><SeasonDisplay latOfMyPos={this.state.lat}/></div>
        else return (
            <Spinner text="Please accept location access"/>
        );
    }
    
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position)=>{
                this.setState({lat:position.coords.latitude});
            },
            (error)=>{
               this.setState({err:error.message});
            }
        );
    }

    // componentDidUpdate(){
    // }

    render(){
        return (
              <div>
                 {this.conditionalRendering()}
              </div>
        );
        // return(
        // <div>
        //     Latitude : {this.state.lat}<br/>
        //     Error : {this.state.err}
        //     {<SeasonDisplay/>}
        // </div>
        // );
   }
}
ReactDOM.render(<App/>,document.querySelector('#root'));