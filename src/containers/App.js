import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import '../containers/App.css';

class App extends Component{
    constructor(){
        super()
        this.state = {
            robot : [],
            searchfield : '' 
        }
         
    }
    //react life cycle 
componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').
    then(response => response.json())
    .then(user => {this.setState({ robot: user })});
}

onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value})
    
}

render(){
        const filterrobot = this.state.robot.filter(robot => {
        return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    if (this.state.robot.length === 0){
        return <h1> Loading </h1>
    }else {
    return(
        <div className = 'tc'> 
        <h1 className ='f1'>RoboFriends</h1>
        <SearchBox searchchange= {this.onSearchChange} />
        <Scroll>
        <CardList robot = {filterrobot}/>
        </Scroll>
        </div>
    );
    }
}

}

export default App;