import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { fetchPost } from '../actions';

class PostsShow extends Component {

	componentDidMount() {
		const { id }  = this.props.match.params;
		console.log("test",id);
		this.props.fetchPost(id);
	}

	render() {
		const { post } = this.props;

		if(!post) {
			return <div>loading...</div>
		}
		return(
			<div>
				<Link to="/" className="btn btn-primary">
							Back to Home
				</Link>
				<button
					className="btn btn-danger pull-xs-right">
					Delete Post
				</button>
				<h3>{post.title}</h3>
				<h6>categories: {post.categories}</h6>
				<p>{post.content}</p>
			</div>
			
		);
	}	
}

function mapStateToProps({ posts }, ownProps) {
	return { post: posts[ownProps.match.params.id] }
}	

export default connect(mapStateToProps, { fetchPost } )(PostsShow);

