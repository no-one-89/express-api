import React, { PropTypes } from 'react'
import axios from 'axios'
class App extends React.Component {
  constructor(){
    super();
    this.state={
      posts:['123']
    }
  }

  componentWillMount(){
    axios.get('http://localhost:3000/posts').then((res) => {
        console.log(res.data);
      this.setState({
        posts:res.data
      })
    })
  }

  render () {
    let body = this.state.posts.map((item,i) => <p key={i}> <span>第{i+1}条记录</span><br /> id={item._id}   title={item.title}</p>)
    return(
      <div>
        {body}
      </div>
    )
  }
}

export default App;
