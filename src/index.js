import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Display } from './display'


class Parent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      initialNumber: 0,
      presentNumber: 0,
      sticksToRemove: 0,
      history: [0] //[intial state, then record of number of sticks removed]
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleRemoveSticks = this.handleRemoveSticks.bind(this)
    this.removeSticks = this.removeSticks.bind(this)
  }
  //initial number of sticks managed
  handleChange (event) {
    const num = parseInt(event.target.value, 10);
    this.setState({ initialNumber: num });
    this.setState({ presentNumber: num });
    this.setState({ history: [num] });
  }

  handleRemoveSticks (event) {
    const num = parseInt(event.target.value, 10);
    this.setState({ sticksToRemove: num })
  }

  removeSticks () {
    //remove sticks
    const removeNumber = this.state.sticksToRemove
    const mostRemove = this.state.history[this.state.history.length - 1] * 2;
    if (removeNumber > mostRemove || removeNumber < 1) {
      alert(`You must remove between 1 and ${mostRemove} sticks`);
      return;
    }
    const currentNumber = this.state.presentNumber
    const numberOfSticks = currentNumber - removeNumber
    if (numberOfSticks <= 0) {
      alert(`You removed the last stick, you win!`);
    }
    this.setState({ presentNumber: numberOfSticks })

    //update history
    let tempHistory = this.state.history
    tempHistory.push(removeNumber)
    this.setState({ history: tempHistory })

    //alert(`history is : ${this.state.history}`)
  }

 render () {
    const value = this.state.initialNumber
    const presentNumber = this.state.presentNumber
    const handleChange = this.handleChange
    const sticksToRemove = this.state.sticksToRemove
    const removeSticks = this.removeSticks
    const handleRemoveSticks = this.handleRemoveSticks
    const history = this.state.history

    return (
      <div className='game'>
        <Display
          value={value}
          handleChange={handleChange}
          presentNumber={presentNumber}
          sticksToRemove={sticksToRemove}
          removeSticks={removeSticks}
          handleRemoveSticks={handleRemoveSticks}
          history={history}
        />{' '}
      </div>
    )
  }
}




ReactDOM.render(<Parent />, document.getElementById('root'))
