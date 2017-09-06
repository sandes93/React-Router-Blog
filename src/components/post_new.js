import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createPost } from '../actions';


class PostNew extends Component {

	renderField(field) {
		
		const { meta: { touched, error } } =field;
		const className = `form-group ${touched && error ? 'has-danger' : ''}`

		return (
			<div className={className}>
			<label>{field.label}</label>
				<input className="form-control"
					type="text" 
					{...field.input}
				/>
			{touched ? error: ''} 
			</div>
		);
	}

	onSubmit(values) {
		this.props.createPost(values);
	}

	render() {

		const { handleSubmit } = this.props;

		return (
			
			<div>
				<div className="text-xs-right">
				</div>
				<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
					<Field 
						label="Title"
						name="title"
						component={this.renderField}
					/>
					<Field 
						label="Categories"
						name="categories"
						component={this.renderField}
					/>
					<Field 
						label="Post Content"
						name="content"
						component={this.renderField}
					/>
					<button type="submit" className="btn btn-primary">submit
					</button>
					<Link to="/" className="btn btn-danger">
						Back
					</Link>
				</form>
			</div>
		);
	}

}

function validate(values) {
	
	const errors = {};

	
	if(!values.title || values.title.length<3) {
		errors.title = "Enter a title more than 3 characters";
	}

	if(!values.categories) {
		errors.categories = "Enter a title";
	}

	if(!values.content) {
		errors.content = "Enter a title";
	}

	return errors;

}

export default reduxForm({
	validate,
	form: 'PostNewForm'
})(
connect (null, { createPost })(PostNew)
);



