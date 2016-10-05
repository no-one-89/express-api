import React, { Component } from 'react';
import map from 'lodash/fp/map';
import axios from 'axios';
import {Link} from 'react-router'


export default class PostList extends Component {
  constructor() {
    super();
    this.state={
      posts: []
    };
  }
  getStyles() {
    return {
      container: {
        position: 'relative',
        width: '100%',
        maxWidth: '600px',
        margin: '20px auto',
        backgroundColor: '#fff',
        borderRadius: '5px',
        padding: '16px',
        boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px'
      },
      title: {
        fontSize: '1.2em'
      },
      div:{
        display:"flex",
        flexDirection:'column',
        alignItems:'flex-end'
      },
      button:{
        display:'block',
        width:'10vw',
        maxWidth:'120px',
        minWidth:'65px',
        marginTop:'10px',
        textAlign:'center',
        textDecoration:'none',
        borderRadius:'5px',
        backgroundColor:'deeppink',
        color:'#fff',
        padding:'5px 8px'
      },
      span:{
        color:'#444',
        backgroundColor:'#ccc',
        padding:'2px'
      },
      content:{
        textIndent:'2em',
        backgroundColor:'#ddeeee'
      },
      title:{
        backgroundColor:'#FFFF66'
      },
      link:{
        textDecoration:'none',
        padding:'2px 6px',
        backgroundColor:'#9933CC',
        borderRadius:'6px',
        fontSize:'14px',
        color:'#fff'
      }
    }
  }
  componentWillMount() {
    //  Promise
    axios.get('http://localhost:3000/posts').then(res => {
      // console.log('axios');
      this.setState({
        posts: res.data.posts
      });
      // console.log(this.state.posts);
    });
  }
  render() {
    const styles = this.getStyles();
    const postList = map((post) => {
      return (
        <div style={styles.container} key={post._id}>
          <h3 style={styles.title}>{post.title}</h3>
          <h5 style={styles.category}>分类：<span style={styles.span}>{post.category}</span></h5>
          <p style={styles.content}>{post.content}</p>
          <Link to={`/post/${post._id}`} style={styles.link}>查看</Link>
        </div>
      )
    }, this.state.posts);
    return(
      <div>
        <div style={styles.div}>
          <Link to="/write" style={styles.button}>添加文章</Link>
        </div>
        { postList }
      </div>
    );
  }
}
