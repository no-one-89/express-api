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
      },
      a:{
        position:'fixed',
        right:'10px',
        top:'50vh'
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
        <a style={styles.a} target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=67049155&site=qq&menu=yes"><img style={{border:"0"}} src="http://wpa.qq.com/pa?p=2:67049155:53" alt="点击这里给我发消息" title="点击这里给我发消息"  /></a>
      </div>
    )
  }
}

export default ShowPost;
