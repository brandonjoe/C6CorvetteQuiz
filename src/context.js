import React, { Component } from 'react';
import {cars} from  './data';
export const MyContext = React.createContext();
class MyProvider extends Component {
    constructor(props){
        super(props);
        this.state={
            questionsRight: 0,
            questionsWrong: 0,
            carSelection: [],
            questionsList: [],
            completed: false
        }
    }
    
    componentWillMount(){
        this.setCars();
    }
  
    setCars = () => {
        console.log('setting cars')
        let tempCars = [];
        cars.forEach(item => {
            tempCars.push(item)
        })
        console.log('we here')
        this.shuffle(tempCars)
        this.setState(() => {
            return {carSelection: tempCars}
        }, this.setState({
            selectedCar: tempCars[0]
        }))
        
    }
    incrementQuestionsRight = () =>{
        this.setState({
            questionsRight: this.state.questionsRight + 1
        })
    }
    incrementQuestionsWrong = () =>{
        this.setState({
            questionsWrong: this.state.questionsWrong + 1
        })
    }
    restartPage = () => {
        this.setState({
            questionsRight: 0,
            questionsWrong: 0,
            questionsList: [],
            selectedCar: cars[0],
            completed: false
        }, () => {
            this.setCars();
        })
    }

    shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }
    getNextCar = () => {
        let carlist = this.state.carSelection;
        carlist.shift()
        console.log(carlist)
        this.setState({
            carSelection: carlist
        }, this.setState({
            selectedCar: carlist[0]
        }))
    }
    render() {
        return (
          <MyContext.Provider value={{
              ...this.state,
              setCars: this.setCars,
              getNextCar: this.getNextCar,
              incrementQuestionsRight: this.incrementQuestionsRight,
              incrementQuestionsWrong: this.incrementQuestionsWrong,
              restartPage: this.restartPage,
              freshCar: this.freshCar
          }}>
              {this.props.children}
          </MyContext.Provider>
        );
    }
}
const MyConsumer = MyContext.Consumer;

export{MyProvider, MyConsumer}
