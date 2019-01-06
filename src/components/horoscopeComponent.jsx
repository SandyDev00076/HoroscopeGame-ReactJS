import React, { Component } from "react";
import './horoscopeComponent.css'

class HoroscopeComponent extends Component {
  state = {
      animalArray: ['Dog', 'Cat', 'Snake', 'Centipede', 'Frog', 'Donkey'],
      verbArray: ['hit', 'bake', 'marry', 'kiss', 'bite', 'sting', 'tickle', 'eat', 'sit on'],
      objectArray: ['coin', 'wallet', 'passport', 'photo', 'pen', 'suitcase'],
      placeArray: ['a hospital', 'a bus Stand', 'a restaurent', 'School', 'College', 'your home', 'the parking'],
      selectedAnimal: "-----",
      selectedVerb: "-----",
      selectedObject: "-----",
      selectedPlace: "-----",
      formedSentence: "-----"
  };
  render() {
    return (
    <div className="container">
        <span className="title-name2">The</span> <span className="title-name1">Horoscope</span> <span className="title-name2">Game</span>

        <br/>
        <div className="tip" style={{ margin: "5px", fontWeight: "bold" }}>
            Hello! Just click on Get to get your random choice.
        </div>
        <br/>
        <div>
            <div className="workitem">
                <span className="title-name3">Get an animal</span>
                <span className="arrayele"><span style={{ fontWeight: "bold" }}>{this.state.selectedAnimal}</span></span> 
                <button className="btn btn-primary" onClick={this.getRandomAnimal}>Get</button>
            </div>
        </div>
        <br/>
        <div>
            <div className="workitem">
                <span className="title-name3">Get a verb</span>
                <span className="arrayele"><span style={{ fontWeight: "bold" }}>{this.state.selectedVerb}</span></span> 
                <button className="btn btn-primary" onClick={this.getRandomVerb}>Get</button>
            </div>
        </div>
        <br/>
        <div>
            <div className="workitem">
                <span className="title-name3">Get an object</span>
                <span className="arrayele"><span style={{ fontWeight: "bold" }}>{this.state.selectedObject}</span></span> 
                <button className="btn btn-primary" onClick={this.getRandomObject}>Get</button>
            </div>
        </div>
        <br/>
        <div>
            <div className="workitem">
                <span className="title-name3">Get a place</span>
                <span className="arrayele"><span style={{ fontWeight: "bold" }}>{this.state.selectedPlace}</span></span> 
                <button className="btn btn-primary" onClick={this.getRandomPlace}>Get</button>
            </div>
        </div>
        <br/>
        <div className="sentence">
            {this.state.formedSentence}
        </div>
    </div>
    );
  }

  getRandomAnimal = () => {
    this.setState({ selectedAnimal : this.state.animalArray[Math.floor((Math.random() * (this.state.animalArray.length - 1)) + 0)] }, () => {
        this.getFormedSentence();
    });
  }

  getRandomVerb = () => {
    this.setState({ selectedVerb : this.state.verbArray[Math.floor((Math.random() * (this.state.verbArray.length - 1)) + 0)] }, () => {
        this.getFormedSentence();
    });
  }

  getRandomObject = () => {
    this.setState({ selectedObject : this.state.objectArray[Math.floor((Math.random() * (this.state.objectArray.length - 1)) + 0)] }, () => {
        this.getFormedSentence();
    });
  }

  getRandomPlace = () => {
    this.setState({ selectedPlace : this.state.placeArray[Math.floor((Math.random() * (this.state.placeArray.length - 1)) + 0)] }, () => {
        this.getFormedSentence();
    });
  }

  getFormedSentence() {
      if(this.state.selectedAnimal !== "-----" && this.state.selectedVerb !== "-----" && this.state.selectedObject !== "-----" && this.state.selectedPlace !== "-----") {
          this.setState({ formedSentence: "A " + this.state.selectedAnimal + " is going to " + this.state.selectedVerb + " you today! You will find a dropped " + this.state.selectedObject + " in " + this.state.selectedPlace + "!" });
      }
  }
}

export default HoroscopeComponent;