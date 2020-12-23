import Axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';

class Example extends React.Component {
    constructor() {
      super();
      this.state = {
        isLoggedIn: false,
        user: {},
        something: 'ass',
        data: {},
        errorMsg: '',
        time: 0
      }
    }

    componentDidMount(){
        this.interval = setInterval(()=>{this.setState({time: new Date().toLocaleTimeString()})}, 1000)
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }
    

    handleClick(e){
        this.setState({
            something : this.state.something + 's'
        });
        console.log(e)
    }

    render(){
        const {something, errorMsg, data, time} = this.state;
        return(
            <div>

            {/* <h1 style={{color: 'red'},{ backgroundColor: 'black'}} className="text-base text-gray-700 leading-normal" onClick={this.handleClick.bind(this)}>{something}</h1> */}

            <h2>{time}</h2>


            </div>
        )
    }
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
