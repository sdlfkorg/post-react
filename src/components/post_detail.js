import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPost} from '../actions';


class PostDetail extends Component {
	componentDidMount(){
		const id = this.props.match.params.id;
		this.props.fetchPost(id);
	}
	render(){
		// posts[this.props.match.params.id];
		console.log(this.props);
		return (
			<div>
			PostDetail
			<ul>
				<li>{this.props.post ? this.props.post.title : 'not yet'}</li>
			</ul>
			</div>
		);
	}
}

function mapStateToProps({posts}, ownProps){
	return {post: posts[ownProps.match.params.id]};
}

export default connect(mapStateToProps, {fetchPost})(PostDetail);