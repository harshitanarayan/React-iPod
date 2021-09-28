//import ZingTouch from 'zingtouch';

const Touchpad = (props) => {
    const {onTouchpadRotation} = props;
    return (
        <div className="touchpad" onMouseOver={() => onTouchpadRotation()}>
            <div className="action-icons" id="menu"> 
                MENU 
            </div>
            <div> 
                <img 
                    className="action-icons"
                    id="forward"
                    src="https://i.dlpng.com/static/png/6910377_preview.png" 
                    alt="forward"
                /> 
            </div>
            <div>
                <img
                    className="action-icons" 
                    id="backward"
                    src="https://icon-library.com/images/backward-icon/backward-icon-5.jpg" 
                    alt="backward"
                />
            </div>
            <div>
                <img 
                    className="action-icons"
                    id="pause-play"
                    src="https://cdn2.iconfinder.com/data/icons/media-controls-5/100/play_pause-512.png" 
                    alt="pause-play"
                />
            </div>
            <div className="select-button">
  
            </div>
        </div>
    );
  }
  
  export default Touchpad;