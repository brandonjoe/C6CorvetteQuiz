import React, { Component } from "react";
import Select from "react-select";
import { MyConsumer } from "../context.js";
import Correct from '../Correct/Correct'
import Wrong from '../Wrong/Wrong';
// import classes from './QuestionPage.module.css'
const options = [
  { value: 2005, label: "2005" },
  { value: 2006, label: "2006" },
  { value: 2007, label: "2007" },
  { value: 2008, label: "2008" },
  { value: 2009, label: "2009" },
  { value: 2010, label: "2010" },
  { value: 2011, label: "2011" },
  { value: 2012, label: "2012" },
  { value: 2013, label: "2013" }
];
class QuestionPage extends Component {
  state = { 
    selectedOption: [],
    isPicking: true,
    showCorrect: false,
    showWrong: false
  };
  componentWillMount() {
    let value = this.context;
    this.setState({
      current: value.getRandomCar()
    });
  }
  handler = selectedOption => {
    this.setState({ selectedOption });
  };
  arraysEqual(_arr1, _arr2) {
    if (
      !Array.isArray(_arr1) ||
      !Array.isArray(_arr2) ||
      _arr1.length !== _arr2.length
    )
      return false;

    var arr1 = _arr1.concat().sort();
    var arr2 = _arr2.concat().sort();

    for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }

    return true;
  }
  checkAnswer = () => {
    this.setState(() => {
      return {isPicking: false}
    })
    let arr = [];
    this.state.selectedOption.map(item => {
      return arr.push(parseInt(item.label));
    });
    if (this.arraysEqual(this.state.current.year, arr) === true) {
      this.setState(() => {
        return {showCorrect: true}
      })
    } else {
      this.setState(() => {
        return {showWrong: true}
      })
    }
  };
  reset = () => {
    let value = this.context
    this.setState({
      isPicking: true,
      isCorrect: false,
      selectedOption: [],
      current: value.getRandomCar()      
    })
  }
  render() {
    const { selectedOption } = this.state;
    const isCorrect = this.state.showCorrect;
    const isWrong = this.state.showWrong;
    const isPicking = this.state.isPicking;
    let modal;
    if(isCorrect && isPicking === false) {
      modal = <Correct reset={this.reset} description={this.state.current.description} />;
    } else if (isWrong && isPicking === false) {
      modal = <Wrong /> 
    }
    return (
      <div>
        <MyConsumer>
          {value => {
            console.log(value);
            return (
              <React.Fragment>
                <div>What is the year of this car?</div>

                <div>
                  {value.selectedCar.year.map((item, index) => {
                    return <div key={index}>{item}</div>;
                  })}
                </div>
                <Select
                  isSearchable={true}
                  isMulti={true}
                  value={selectedOption}
                  onChange={this.handler}
                  options={options}
                />
                <input
                  type="submit"
                  value="Submit"
                  onClick={this.checkAnswer}
                />
                {modal}
              </React.Fragment>
            );
          }}
        </MyConsumer>
      </div>
    );
  }
}
QuestionPage.contextType = MyConsumer;
export default QuestionPage;
