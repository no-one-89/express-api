import React, { PropTypes } from 'react';
import axios from 'axios';

class DeleteList extends React.Component {
  constructor(){
    super();
    this.state={
    show:false
    }
  }
  handleShow(){
    this.setState({
      show:true
    })
  }
  handleCancel(){
    this.setState({
      show:false
    })
  }
  handleDelete(){
    let id = this.props.id;
    axios.delete(`http://localhost:3000/post/${id}`)
    .then(res => {
      this.setState({show:false})
      this.props.filterPosts(this.props.id)
      this.context.router.push('/');
    })
  }
  render () {
    let styles={
      div1:{
        position:'relative'
      },
      div2:{
        position:'fixed',
        top:'20vw',
        left:'35%',
        backgroundColor:'#ccffff',
        width:'30vw',
        height:'20vw',
        padding:'10px 15px',
        zIndex:'10',
        borderRadius:'10px'
      },
      span1:{
        padding:'10px 20px',
        backgroundColor:'#ff0000',
        borderRadius:'6px',
        fontSize:'14px',
        color:'#fff',
        marginLeft:'45px',
        cursor:'pointer'
      },
      span2:{
        padding:'10px 20px',
        backgroundColor:'#ff0000',
        borderRadius:'6px',
        fontSize:'14px',
        color:'#fff',
        cursor:'pointer',
        marginLeft:'45px',

      },
      cover:{
        position:'fixed',
        top:'0',
        left:'0',
        margin:'0',
        width:'100vw',
        height:'100vh',
        backgroundColor:'rgba(0,0,0,0.3)'
      },
      h3:{
        textAlign:'center',
        marginBottom:'60px'
      }
    }
    let confirm = (
      <div style={styles.div1}>
        <p style={styles.cover} onClick={this.handleCancel.bind(this)}></p>
        <div style={styles.div2}>
          <h3 style={styles.h3}>确认删除吗？</h3>
          <span style={styles.span1} onClick={this.handleDelete.bind(this)}>确认</span>
          <span style={styles.span2} onClick={this.handleCancel.bind(this)}>取消</span>
        </div>
      </div>)
    return(
      <div>
        {this.state.show ? confirm : null}
      </div>
    )
  }
}
DeleteList.contextTypes = {
  router: React.PropTypes.object
};
export default DeleteList;
