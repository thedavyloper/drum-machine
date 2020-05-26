import React, {Component} from 'react';



export class DrumMachine extends Component {


    constructor(props) {
        super(props);
        this.state = {
            keys: [
                {
                    key: 'Q',
                    pad: 81,
                    id: 'Heater-1',
                    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
                },
                {
                    key: 'W',
                    pad:87,
                    id: 'Heater-2',
                    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
                },
                {
                    key: 'E',
                    pad:69,
                    id: 'Heater-3',
                    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
                },
                {
                    key: 'A',
                    pad:65,
                    id: 'Heater-4',
                    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
                },
                {
                    key: 'S',
                    pad:83,
                    id: 'Clap',
                    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
                },
                {
                    key: 'D',
                    pad:68,
                    id: 'Open-HH',
                    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
                },
                {
                    key: 'Z',
                    pad:90,
                    id: "Kick-n'-Hat",
                    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'

                },
                {
                    key: 'X',
                    pad:88,
                    id: 'Kick',
                    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'

                },
                {
                    key: 'C',
                    pad:67,
                    id: 'Closed-HH',
                    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'

                },
            ]
        };
    }


    handleKeyPress = (e) => {
        var keyCode = e.keyCode || e.target.getAttribute('data-key');
        var key = this.state.keys.find(function(key) {
            return key.pad  === parseInt(keyCode);
        });

        


        if (key && key.url){

            var audio = new Audio(key.url);
            audio.play();

            /*change display*/

            this.setState({display:key.id})
            /*change style*/
            document.getElementById("Pad"+keyCode).classList.add('clicked')

            /*remove class after 400 MS*/
            setTimeout(function () {
                document.getElementById("Pad"+keyCode).classList.remove('clicked')

            },50)
        }
    }

    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyPress, false);
    }

    render() {


        return (
            <div id="drum-machine">
                <div id="main">
                    <div className="row">
                        <div id="display">{this.state.display}</div>
                    </div>
                    <div className="row">
                        {this.state.keys.map((key) => {
                                return   <div key={key.id} onClick={this.handleKeyPress} data-key={key.pad}  className="drum-pad btn"  id={"Pad"+key.pad}>
                                    {key.key}
                                    <audio  src={key.url}  className="clip"  id={key.key} >
                                    </audio>
                                </div>

                            }
                        )}

                    </div>
                </div>
            </div>
        );
    }


}

export default DrumMachine;
