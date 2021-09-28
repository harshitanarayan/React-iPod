import React from 'react';
import Screen from './Screen';
import Touchpad from './Touchpad'
import ZingTouch from 'zingtouch';

class App extends React.Component {

  handleTouchpadRotation = () => {
    var touchpad = document.querySelector('.touchpad');
    var myRegion = new ZingTouch.Region(touchpad);

    myRegion.bind(touchpad, 'rotate', function(event){
      console.log('Wheel');
    });
  }

  render() {
    return (
      <div className="App">
        <div className="ipod">
          <Screen/>
          <Touchpad
            onTouchpadRotation = {this.handleTouchpadRotation}
          />
        </div>
      </div>
    );
  }
}

export default App;
