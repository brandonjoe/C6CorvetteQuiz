import React, { Component } from 'react';
import {cars} from  './data';
export const MyContext = React.createContext();
class MyProvider extends Component {
    state={
        questionsRight: 231423,
        questionsWrong: 12321321,
        carSelection: [],
        questionsList: [],
        selectedCar: cars[0]
    }
    componentWillMount(){
        this.setCars();
        
    }
  
    setCars = () => {
        let tempCars = [];
        cars.forEach(item => {
            tempCars.push(item)
        })
        this.setState(() => {
            return {carSelection: tempCars}
        })
        
    }
    getRandomCar = () => {
        let newCar = this.state.carSelection[Math.floor(Math.random()*this.state.carSelection.length)];
        let index = this.state.carSelection.indexOf(newCar)
        this.state.carSelection.splice(index, 1)
        this.setState(() => {
            return {selectedCar: newCar}
        })
        return newCar;
    }
    render() {
        return (
          <MyContext.Provider value={{
              ...this.state,
              getRandomCar: this.getRandomCar
          }}>
              {this.props.children}
          </MyContext.Provider>
        );
    }
}
const MyConsumer = MyContext.Consumer;

export{MyProvider, MyConsumer}
