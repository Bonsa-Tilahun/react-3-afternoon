import React from 'react';
import './App.css';
import { Component } from 'react';
import Card from './components/Card/Card.component';
import data from './assets/data';
import Header from './components/Header/Header.component';
import Controlls from './components/Controlls/Controlls.component';

class App extends Component{
  constructor(){
    super()

    this.state={
      dataSet: data,
      current: [],
      index: 1
    }
    this.handleNext = this.handleNext.bind(this)
    this.handlePrev = this.handlePrev.bind(this)
  }

  componentDidMount(){
    this.setState({
      current: this.state.dataSet.filter(data => data.id === 1)
    })
  }

  handleNext(){
    let nextData = this.state.dataSet.filter(data => data.id === this.state.index+1)
    this.setState({
      current: nextData,
      index: this.state.index + 1
    })
  }

  handlePrev(){
    let prevData = this.state.dataSet.filter(data => data.id === this.state.index-1)
    this.setState({
      current: prevData,
      index: this.state.index - 1
    })
  }

  render(){
    let currentDisplayCard = this.state.current.map(data => <Card key={data.id} cardData={data}/>)
    return(
      <div>
        <Header/>
        {currentDisplayCard}
        <Controlls next={this.handleNext} prev={this.handlePrev} index={this.state.index} total={this.state.dataSet.length}/>
      </div>
    )
  }
}

export default App;
