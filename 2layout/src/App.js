import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
<div className="row">
<div className="wrapper" style={{ backgroundColor: "orange" }}>
        

          <div className="container">
            <div >
              <img src="https://raw.githubusercontent.com/BlackrockDigital/startbootstrap-resume/master/img/profile.jpg" alt="pic of clarence taylor" className="rounded-circle" style={{ width: "13rem" }} />
            </div>
            <div className="col-md-3">
              <div>
                <ul class="list-group">
                  <li class="list-group-item">ABOUT</li>
                  <li class="list-group-item">EXPERIENCE</li>
                  <li class="list-group-item">EDUCATION</li>
                  <li class="list-group-item">SKILLS</li>
                  <li class="list-group-item">INTERESTS</li>
                  <li class="list-group-item">AWARDS</li>
                </ul>
              </div>
            </div>
          </div>


        </div>
        <div >
          <h1>CLARENCE TAYLOR</h1>
        </div>
      </div>
    );
  }
}

export default App;
