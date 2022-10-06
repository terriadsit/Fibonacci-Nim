import React from 'react';


export class DisplaySticks extends React.Component {
    render () {
      const randomColor = Math.floor(Math.random()*16777215).toString(16);
      const stickStyle = '#' + randomColor;
      const stickTilt = 'rotate(' + Math.floor(Math.random()*360) + 'deg)';
      //alert(stickTilt);
      return (
        <p className='stick' style={{backgroundColor: stickStyle, transform: stickTilt }}></p>
      )
    }
  }
  