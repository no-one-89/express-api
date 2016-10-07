import React, { PropTypes } from 'react';
import axios from 'axios';

class DeleteList extends React.Component {
  constructor(){
    super();
    this.state={
    show:false
    }
  }
  handleShow(e){
    e.preventDefault();
    this.setState({
      show:true
    })
  }
  handleCancel(){
    this.setState({
      show:false
    })
  }
  handleDelete(e){
    var id = this.props.id;
    axios.delete(`http://localhost:3000/post/${id}`)
    .then(res => {
      alert('删除成功')
      this.context.router.push('/write');
      this.context.router.push('/');
    })

  }
  render () {
    let styles={
      div1:{
        display:'inline-block',
        position:'relative'
      },
      div2:{
        position:'absolute',
        top:'-10px',
        left:'50px',
        display:'inline-block',
        backgroundColor:'#eee',
        width:'85px',
        padding:'10px 15px',
        zIndex:'10',
        borderRadius:'10px'
      },
      span1:{
        textDecoration:'none',
        padding:'2px 6px',
        backgroundColor:'#ff0000',
        borderRadius:'6px',
        fontSize:'14px',
        color:'#fff',
        marginRight:'5px',
        cursor:'pointer'
      },
      span2:{
        textDecoration:'none',
        padding:'2px 6px',
        backgroundColor:'#ff0000',
        borderRadius:'6px',
        fontSize:'14px',
        color:'#fff',
        cursor:'pointer'
      },
      p:{
        position:'fixed',
        top:'0',
        left:'0',
        margin:'0',
        width:'100vw',
        height:'100vh',
        backgroundColor:'rgba(0,0,0,0.3)'
      }
    }
    let confirm = (
      <div>
        <p style={styles.p} onClick={this.handleCancel.bind(this)}></p>
        <div style={styles.div2}>
          <span style={styles.span1} onClick={this.handleDelete.bind(this)}>确认</span>
          <span style={styles.span2} onClick={this.handleCancel.bind(this)}>取消</span>
        </div>
      </div>)
    return(
      <div style={styles.div1}>
        <a href='#' style={this.props.style} onClick={this.handleShow.bind(this)}>删除</a>
        {this.state.show ? confirm : null}
      </div>
    )
  }
}
DeleteList.contextTypes = {
  router: React.PropTypes.object
};
export default DeleteList;
