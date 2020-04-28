import React, {Component} from 'react';

class App extends Component {
  render() {
    return(
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <textarea
              className="form-control mb-3"
              placeholder="Start Typing..."
            ></textarea>
            <div className="text-right">
              <button className="btn btn-light">Restart</button>
            </div>
          </div>
        </div> 
      </div>
    );
    }
  }
export default App;