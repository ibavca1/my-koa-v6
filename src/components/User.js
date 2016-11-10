import React, {Component} from 'react';

class User extends Component {
	render(){
		const {user} = this.props;
		return <div>
				<p>Hello, {user.name}. You age is: {user.age}</p>
			</div>
	}
}
export default User;
