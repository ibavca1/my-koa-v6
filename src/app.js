import React, {Component}  from 'react';
import {connect} from 'react-redux';

//const a = "1";

class App extends Component {
	constructor(props, context){
		super(props, context);
	}
	render(){
	    const {user} = this.props.user;
	    const {photos, year} = this.props.page;
	    console.log(year);
		return <div>
			    <p>Привет, {user.name}! You are age: {user.age}</p>
			    <p>Photos: {photos.length}, year: {year}</p>.
			</div>
	}
}

function mapStateToProps (state) {
  return {
    user: state.user,
    page: state.page
  }
}

export default connect(mapStateToProps)(App);
