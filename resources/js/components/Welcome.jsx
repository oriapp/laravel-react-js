import React from 'react';
import ReactDOM from 'react-dom';
import Skeleton from 'react-loading-skeleton';
import { Offline, Online } from "react-detect-offline";
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
        time: null,
        x: [{app: [2, 1]}, "ori", "apple"]
      }
    }

    componentWillMount(){
        this.setState({time: new Date().toLocaleTimeString()});
    }

    componentDidMount(){
        this.interval = setInterval(()=>{this.setState({time: new Date().toLocaleTimeString()})}, 1000);
        localStorage.setItem('state', this.state.something);
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }

    handleClick(){
        this.setState({ something : this.state.something + 'i', data: Math.round(Math.random() * 10) });
        setTimeout( () => {this.setState({isLoggedIn: true})} , 150 );
    }

    render(){
        const {something, time, data, isLoggedIn, x} = this.state;
        return(
            <>
            <h1 style={{color: 'red'},{ backgroundColor: 'black'}, {WebkitUserSelect: 'none'}, {userSelect: 'none'}} className="text-base text-gray-700 leading-normal" onClick={this.handleClick.bind(this)}>{something}</h1>

            <h2>The time is: <mark >{time || <Skeleton variant="text" />}</mark> </h2>


            {isLoggedIn ? data : <Skeleton />}

            <br />{localStorage.getItem('state') || <Skeleton />}

            {
            x.map((r, l)=> {
                // {console.log(r, l , ` t:${time}`)}
                <h1>{r , l} x</h1>
            })
            }


            <div>
    <Online>Only shown when you're online</Online>
    <Offline>Only shown offline (surprise!)</Offline>
  </div>


            </>
        )
    }
}

export default Welcome;

if (document.getElementById('welcome')) {
    ReactDOM.render(<Welcome />, document.getElementById('welcome'));
}
