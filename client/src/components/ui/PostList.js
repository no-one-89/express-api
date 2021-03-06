import React, { Component } from 'react';
import map from 'lodash/fp/map';
import axios from 'axios';
import {Link} from 'react-router';
import filter from 'lodash/fp/filter';

import DeleteList from './DeleteList'

export default class PostList extends Component {
  constructor() {
    super();
    this.state={
      posts: [],
      id: '1',
      searchPosts:[]
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
        paddingTop:'10px',
        justifyContent:'space-between'
      },
      button:{
        display:'block',
        width:'10vw',
        maxWidth:'120px',
        minWidth:'75px',

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
        color:'#fff',
        marginRight:'5px'
      }
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/posts').then(res => {
      this.setState({
        posts: res.data.posts,
        searchPosts: res.data.posts
      });
    });
  }
  handleChange(){
    axios.get('http://localhost:3000/posts').then(res => {
      this.setState({
        posts: res.data.posts,
        searchPosts: res.data.posts
      });

      var arr = this.state.searchPosts
      let value = this.refs.search.value;
      let posts = []
      console.log('arr:'+arr);
      for(let i in arr){
        // console.log('title:'+arr[i].title.match(value));
        if(arr[i].title.match(value) != null)
        posts.push(arr[i])
      }
      // console.log('posts:'+posts);
      this.setState({
        posts:posts
      })
      // console.log(this.state.posts);
    });

  }
  filterPosts(id) {
    const posts = filter((post) => {
      return post._id !== id
    }, this.state.posts);
    this.setState({
      posts: posts,
      searchPosts: posts
    })
  }
 handleClick(value){
   this.setState({id: value});
   this.refs.dialog.handleShow();
 }
  render() {
    const styles = this.getStyles();
    const postList = map((post) => {
      return (
        <div style={styles.container} key={post._id}>
          <h3 style={styles.title}>{post.title}</h3>
          <h5 style={styles.category}>分类：<span style={styles.span}>{post.category}</span>
          </h5>
          <p style={styles.content}>{post.content}</p>
          <Link to={`/post/${post._id}`} style={styles.link}>查看</Link>
          <Link to={`/post/${post._id}/edit`} style={styles.link}>编辑</Link>
          <Link to='' style={styles.link} onClick={this.handleClick.bind(this,post._id)}>删除</Link>
        </div>
      )
    }, this.state.posts);
    return(
      <div>
        <div style={styles.div}>
          <div className="row">
            <div className="col-lg-6">
              <div className="input-group">
                <span className="input-group-addon">
                  <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
                </span>
                <input type="text" className="form-control" aria-label="..." placeholder="搜索标题..." ref="search" onChange={this.handleChange.bind(this)}/>
              </div>
            </div>
          </div>
          <Link to="/posts/new" style={styles.button}>添加文章</Link>
        </div>
        { postList }
        <DeleteList id={this.state.id} ref='dialog' filterPosts={this.filterPosts.bind(this)} />
      </div>
    );
  }
}
