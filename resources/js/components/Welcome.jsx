import React from 'react';
import ReactDOM from 'react-dom';


class Welcome extends React.Component {
    constructor() {
      super();
      this.state = {
        isLoggedIn: false,
        user: {},
        something: 'Hai',
        data: 0,
        errorMsg: '',
        time: null
      }
    }
    

    componentWillMount(){
        this.setState({time: new Date().toLocaleTimeString()})
    }

    componentDidMount(){
        this.interval = setInterval(()=>{this.setState({time: new Date().toLocaleTimeString()})}, 1000)
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }
    

    handleClick(){
        this.setState({something : this.state.something + 'i'});
    }

    render(){
        const {something, time, data} = this.state;
        return(
            <div>
            <h1 style={{color: 'red'},{ backgroundColor: 'black'}, {WebkitUserSelect: 'none'}, {userSelect: 'none'}} className="text-base text-gray-700 leading-normal" onClick={this.handleClick.bind(this)}>{something}</h1>

            <h2>{time}</h2>
            </div>
        )
    }
}

export default Welcome;

if (document.getElementById('welcome')) {
    ReactDOM.render(<Welcome />, document.getElementById('welcome'));
}
