import React, {Component}  from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import User from '../components/User';
import Page from '../components/Page';
import * as pageActions from '../actions/pageActions';


class App extends Component {
	constructor(props, context){
		super(props, context);
	}
	render(){
	    const {user, page} = this.props;
		const {setYear} = this.props.pageActions;
	    return <div>
		    <User user={user} />
		    <Page page={page} setYear={setYear}/>
		</div>
	}
}

function mapStateToProps (state) {
  return {
    user: state.user,
    page: state.page
  }
}

function mapDispatchToProps(dispatch){
	return {
		pageActions: bindActionCreators(pageActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
