import Touchpad from './Touchpad'
import Screen from './Screen'

const Ipod = (props) => {

    return (
        <div className="ipod">
            <Screen/>
            <Touchpad
                onMenuSelection = {props.onMenuSelection}
            />
        </div>
    );
  }
  
export default Ipod;