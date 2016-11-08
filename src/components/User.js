import React, {Component} from 'react';

class User extends Comonent {
	render(){
		const {user} = this.props;
		return <div>
				<p>Hello, {user.name}</p>
			</div>
	}
}
export default User;
