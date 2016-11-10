import React, {Component} from 'react';

class Page extends Component {
	render(){
		const {page} = this.props;
		return <div>
			<p>Photos: {page.photos.length}. Year: {page.year}</p>
		    </div>
	}
}
export default Page;
