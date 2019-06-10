import React, { Component } from 'react';
import {cars} from  './data';
export const MyContext = React.createContext();
class MyProvider extends Component {
    state={
        questionsRight: 0,
        questionsWrong: 0,
        carSelection: [],
        questionsList: [],
        selectedCar: cars[0],
        completed: false
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
        if(this.state.carSelection.length > 0){
            let newCar = this.state.carSelection[Math.floor(Math.random()*this.state.carSelection.length)];
            let index = this.state.carSelection.indexOf(newCar)
            this.state.carSelection.splice(index, 1)
            this.setState(() => {
                return {selectedCar: newCar}
            })
            return newCar;
        } else {
            this.setState(() => {
                return {completed: true}
            })
        }
        
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
