import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Tilt from 'react-parallax-tilt';


export class testimonials extends Component {
  render() {
    return (
      <div id="testimonials">
        <div className="container">
        <div className="section-title text-center">
            <h2>Industries</h2>
            <br/>
            <br/>
            <br/>
          </div>
          <div className="row">
            {this.props.data
              ? this.props.data.map((d, i) => (
                  <div key={`${d.name}-${i}`} className="col-md-4">
                    <div className="testimonial">
                        {" "}
                       <Tilt>
                           <img style={{height: '50%', width: '100%'}} src={d.icon} />
                           <div style={{boxShadow : '10px 10px 7px 0px rgba(65, 3, 15, 0.404)' , borderRadius: '0%', width: '60%', height: '10%', background: 'whitesmoke' }}>
                         <h2 style={{paddingTop: '10%', textAlign: 'center',  font: 'message-box', fontWeight: '700', color: 'black' }}>{d.name}</h2>
                           </div>
                       </Tilt>
                        
                      </div>
                     
                      </div>
                ))
              : "loading"}
          </div>
        </div>
      </div>
    );
  }
}

export default testimonials;
