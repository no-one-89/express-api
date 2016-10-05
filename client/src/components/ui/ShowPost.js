import React, { PropTypes } from 'react'
import axios from 'axios';

class ShowPost extends React.Component {
  constructor(){
    super();
    this.state={
      title:'',
      content:'',
      wait:true
    }
  }
  componentDidMount() {
    let id = this.props.params.id
    axios.get(`http://localhost:3000/post/${id}`).then(res => {

      this.setState({
        content: res.data.post.content,
        title:res.data.post.title,
        wait:false
      });
      // console.log(res.data);
    });
  }
  render () {
    let styles={
      h3:{
        textAlign:'center'
      },
      p:{
        textIndent:'2em'
      }
    }
    let article = (
      <div>
        <h3 style={styles.h3}>{this.state.title}</h3>
        <p style={styles.p}>{this.state.content}</p>
      </div>
    )
    return(
      <div>
        {this.state.wait ? '正在载入。。。。' : article }
      </div>
    )
  }
}

export default ShowPost;
