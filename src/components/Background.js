import React, {Component} from 'react';
import {Row, Col} from 'antd';
import elvideo  from './principal/imagenes/video.mp4';
import  '../App.css' ;



class Background extends Component{

          render() {
            return (
                  <div>
                  <div  className = "video">

                <video autoPlay loop muted  style={{ width: "100%", height: "100%" }}>
                  <source src={elvideo} type="video/mp4"/>
                </video>

                <div className= "vi">


                  <h2 style={{textAlign:"center"}}> Creando las más bellas sonrisas </h2>
              </div>

              <div className="vidos">

<img src={require ('../components/principal/imagenes/diente.png')} className="logodos" />
              </div>


                  </div>
                  </div>

        );
    }
}

export default Background;
