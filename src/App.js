import React, { Component }from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
    state = {
        advice: ''
    };
    componentDidMount() {
        this.fetchAdvice();
        
    }
    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
            .then((res) => {
                const { advice } = res.data.slip;
                this.setState({ advice: advice })
                console.log(advice);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    render() {
        return (
            <div className="App">
                <div className="Card">
                    <h1 className="mainheading">{this.state.advice}</h1>
                    <button className="thebutton" onClick={this.fetchAdvice}>
                        <span>
                            ADVICE FOR YOU!
                        </span>
                    </button>
                </div>
               
            </div>
        );
    }
  
}

export default App;
