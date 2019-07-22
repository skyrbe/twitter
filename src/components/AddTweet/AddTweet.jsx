import React, { Component } from 'react';
import Input from '@components/common/FormElements/Input';
import styles from './AddTweet.module.css';

class AddTweet extends Component {
  state = {
    content: this.props.content || '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onAdd(this.state.content);
    this.setState({
      content: ''
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={`position-sticky l-0 fw d-flex ${styles.addTweetContainer}`}>
        <Input
          type="text"
          label=""
          showLabel={false}
          placeholder="Type To Tweet"
          name="content"
          onChange={this.handleChange}
          value={this.state.content}
          classNames="mb-0 b-0 h-40"
          formGroupClassNames={`mb-0 ${styles.formGroup}`}
        />
        <button type="submit" className="btn btn-primary br-tl-0 br-bl-0">Post</button>
      </form>
    );
  }
}

export default AddTweet;
