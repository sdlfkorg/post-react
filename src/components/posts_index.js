import _ from 'lodash';
import React, { Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions';


class PostIndex extends Component {
	componentDidMount(){
		this.props.fetchPosts();
	}

	renderPosts(){
		_.map(this.props.posts, post => {
			return (
				<li className="list-group-item" key={post.id}>
					{post.title}
				</li>
			);
		});
	}

	render(){
		console.log(this.props);
		return (
			<div>
				Posts
			</div>
		);
	}
}

function mapStateToProps(state){
	return {posts: state.posts};
}

export default connect(mapStateToProps, {fetchPosts})(PostIndex);