import React from 'react'
import { DisplaySticks } from './displaySticks'

export class Display extends React.Component {
  render () {
    // const stringProps = JSON.stringify(this.props)
    const {
      value,
      presentNumber,
      handleChange,
      removeSticks,
      sticksToRemove,
      handleRemoveSticks,
      history
    } = this.props

    const odd = history.length % 2
    const playerNumber = odd ? 1 : 2
    const sticks = []
    for (let i = 0; i < presentNumber; i++) {
      sticks.push(<DisplaySticks key={i} />)
    }

    return (
      <div>
        <h1> Fibonacci Nim </h1>{' '}
        <p>
          {' '}
          Each player removes sticks.The person removing the last stick
          wins!After the first move, each player may remove between 1 and{' '}
          <br></br>twice the number of sticks removed in the prior turn. The
          first move may remove as many sticks as desired.{' '}
        </p>{' '}
        <h1> Fibonacci Sequence: </h1>{' '}
        <h1> 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ... </h1>{' '}
        <p> Enter the number of sticks you would like to begin with: </p>{' '}
        <input
          name='initialNumber'
          type='integer'
          onChange={handleChange}
          value={value}
        />{' '}
        <p>
          {' '}
          The number of sticks is <b> CURRENTLY: {presentNumber} </b>{' '}
        </p>{' '}
        <p>
          {' '}
          The player turn is: <b> PLAYER {playerNumber} </b>{' '}
        </p>{' '}
        <p> How many sticks would you like to remove ? </p>{' '}
        <input
          name='removeSticks'
          type='text'
          value={sticksToRemove}
          onChange={handleRemoveSticks}
        />{' '}
        <button onClick={removeSticks}> Click to Remove Sticks </button>{' '}
        <ul>
          {' '}
          {history.slice(1).map(function (item, i) {
            return (
              <li key={item}>
                {' '}
                Player {i % 2 ? 2 : 1}
                removed {item}
                sticks{' '}
              </li>
            )
          })}{' '}
        </ul>{' '}
        <div className='display-sticks'> {sticks} </div>{' '}
      </div>
    )
  }
}
