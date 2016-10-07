import React, { PropTypes } from 'react'
import {Link} from 'react-router';
import Radium from 'radium';
import axios from 'axios';


class Modify extends React.Component {
  constructor(){
    super();
    this.state={
      title:'',
      category:'',
      content:'',
      wait:true
    }
  }

  componentDidMount() {
    var id = this.props.params.id
    axios.get(`http://localhost:3000/post/${id}`).then(res => {

      this.setState({
        content: res.data.post.content,
        category: res.data.post.category,
        title:res.data.post.title,
        wait:false
      });
      this.refs.title.value = this.state.title;
      this.refs.category.value = this.state.category;
      this.refs.content.value = this.state.content;
    });
  }
  handleModify(e){
    e.preventDefault();
    var id = this.props.params.id
    const category = this.refs.category.value;
    const title = this.refs.title.value;
    const content = this.refs.content.value;
    if(title.length == 0 || category.length == 0 || content.length == 0) return alert('内容不能为空！')
    axios.put(`http://localhost:3000/post/${id}`,{title,category,content})
    .then(res => {
      alert('修改成功')
      this.context.router.push('/');
    })

  }
  getStyles() {
    return {
      form: {
        padding: '20px 40px',
        backgroundColor:'#CCCC99'
      },
      div: {
        marginBottom: '10px'
      },
      label: {
        display: 'block',
        fontSize: '.9em',
        color: 'rgba(0,0,0,.6)',
        paddingBottom: '10px'
      },
      input: {
        width: '100%',
        height: '48px',
        border: '1px solid #ddd',
        borderRadius: '5px',
        fontSize: '1em',
        padding: '10px',
        boxSizing: 'border-box',
        ':focus': {
          border: '1px solid #00bcd4',
          outline: 'none'
        }
      },
      actions: {
        textAlign: 'center'
      },
      button: {
        width: '120px',
        height: '36px',
        border: 'none',
        backgroundColor: '#ff4081',
        fontSize: '1em',
        color: '#fff',
        display: 'inline-block',
        margin: '20px auto 0',
        borderRadius: '20px',
        ':hover': {
          cursor: 'pointer'
        },
        ':focus': {
          outline: 'none'
        }
      },
      link: {
        display: 'inline-block',
        marginLeft: '15px',
        fontSize: '1em',
        color: '#003366',
        opacity: '.8',
        textDecoration: 'none'
      }
    };
  }
  render() {
    const styles = this.getStyles();
    return (
      <form style={styles.form} onSubmit={this.handleModify.bind(this)}>

        <div style={styles.div}>
          <label style={styles.label}>标题</label>
          <input style={styles.input} key='1' ref='title' />
        </div>

        <div style={styles.div}>
          <label style={styles.label}>类别</label>
          <input style={styles.input} key='2' ref='category' />
        </div>

        <div style={styles.div}>
          <label style={styles.label}>内容</label>
          <textarea style={styles.input} key='3' ref='content' />
        </div>

        <div style={styles.actions}>
          <button type='submit' style={styles.button}>保存修改</button>
          <Link to='/' style={styles.link}>取消</Link>
        </div>
      </form>
    );
  }
}
Modify.contextTypes = {
  router: React.PropTypes.object
};
export default Modify;
