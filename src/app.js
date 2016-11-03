import React, {Component}  from 'react';
import {connect} from 'react-redux';

//const a = "1";

class App extends Component {
	constructor(props, context){
		super(props, context);
	}
	render(){
		return <div>Hello from react from {this.props.user}.</div>
	}
}

function mapStateToProps (state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(App);
