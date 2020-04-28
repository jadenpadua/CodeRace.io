import React, {Component} from 'react';
import Preview from './Preview';
import Speed from './Speed';
class App extends Component {
  render() {
    return(
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <Preview/>
            <textarea
              className="form-control mb-3"
              placeholder="Start Typing..."
            ></textarea>
            <Speed/>

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