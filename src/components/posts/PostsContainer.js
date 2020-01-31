import React from 'react'
import {createpost, loadposts} from '../../actions/posts'
import {connect} from 'react-redux'
import PostsList from './PostsList'
import PostForm from './PostForm'
import {Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class PostsContainer extends React.Component {
    componentDidMount() {
      this.props.loadposts(Number(this.props.match.params.id))
    }
    state = {
      owner: this.props.user.name,
      userId: this.props.user.id,
      content: ''
    }
  
    onChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      })
    }
  
    onSubmit = (event) => {
      event.preventDefault();
      this.props.createTicket(this.state, Number(this.props.match.params.id));
      this.setState({
        owner: this.props.user.name,
        userId: this.props.user.id,
        content: '',
    });
     }
    render() { if(this.props.user){
      return <div>
          <PostForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        value={this.state.name}
      />
          <PostsList posts={this.props.posts} />
         
          </div>
    } else {
      return <div> 
       <p> Log in or Sign up to add new Ticket! 
         <Link to={`/login`}>
          <Button style={{margin:'3px'}} variant="primary" type="submit" value='Submit'>
                          Login/Signup
         </Button>
         </Link>
         </p>
         <PostsList posts={this.props.posts} /></div>
  
    }
    }
}



const mapStateToProps = state => ({
    posts: state.posts,
    user: state.user
  })

  export default connect(mapStateToProps, {loadposts, createpost})(PostsContainer)


  