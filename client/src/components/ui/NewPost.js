import React, { Component } from 'react';
import Form from './Form';
import axios from 'axios';

class NewPost extends Component {
  getStyles() {
    return {
      content: {
        width: '100%',
        maxWidth: '600px',
        margin: '30px auto',
        backgroundColor: '#339933',
        borderRadius: '10px',
        boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px'
      },
      title: {
        fontSize: '1.2em',
        textAlign: 'center',
        paddingTop: '20px'
      }
    };
  }
  newPost(data){
    axios.post('http://localhost:3000/posts',data)
    .then(res => {
      // console.log(res.data.message);
      this.context.router.push('/');
    })
    console.log(data);
  }
  
  render() {
    const styles = this.getStyles();
    return (
      <div style={styles.content}>
        <div style={styles.title}>写文章</div>
        <Form label='发布文章' newPost={this.newPost.bind(this)} />
      </div>
    );
  }
}

NewPost.contextTypes = {
  router: React.PropTypes.object
};

export default NewPost;
