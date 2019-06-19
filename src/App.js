import React,{Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
class App extends Component {
  render(){

    return (
      <div className="container">
        <div className="row">
        <div className="col-md-6">Hello</div>
        <div className="col-md-6">
          <span><i className="fa fa-home"/></span>
        </div>
        </div>
    </div>
  );
}
}

export default App;
