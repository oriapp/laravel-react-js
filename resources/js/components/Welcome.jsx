import React from 'react';
import ReactDOM from 'react-dom';
import Skeleton from 'react-loading-skeleton';
import Toast from 'react-bootstrap/Toast';


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
        this.interval = setInterval(()=>{this.setState({time: new Date().toLocaleTimeString()})}, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }

    handleClick(){
        this.setState({ something : this.state.something + 'i', data: Math.round(Math.random() * 10) });
        setTimeout( () => {this.setState({isLoggedIn: true})} , 150 )
    }

    render(){
        const {something, time, data, isLoggedIn} = this.state;
        return(
            <>
            <h1 style={{color: 'red'},{ backgroundColor: 'black'}, {WebkitUserSelect: 'none'}, {userSelect: 'none'}} className="text-base text-gray-700 leading-normal" onClick={this.handleClick.bind(this)}>{something}</h1>

            <h2>The time is: <mark >{time || <Skeleton variant="text" />}</mark></h2>


            {isLoggedIn ? data : <Skeleton />}


            </>
        )
    }
}

export default Welcome;

if (document.getElementById('welcome')) {
    ReactDOM.render(<Welcome />, document.getElementById('welcome'));
}
