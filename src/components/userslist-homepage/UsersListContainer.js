import React from 'react'
import {loadusers} from '../../actions/users'
import {connect} from 'react-redux'
import UsersList from './UsersList'
import {Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import gangmakers from './gangmakers.png';

class UsersListContainer extends React.Component {
   
  componentDidMount() {
      this.props.loadusers()
    }
 
    render(){ 
      
      if(this.props.user){
      
        return <Container>
          <Container><img style={{width: '100%', position:'center'}} src={gangmakers} alt={'homepage'}/></Container>
        
        <UsersList users={this.props.users} />
       
        </Container>
      } else {
        return <Container> 
          <Container>
            <img style={{width: '100%', position:'center'}} src={gangmakers} alt={'homepage'}/>
            </Container>
         <p> Log in or Sign up! <Link to={`/login`}>
            <Button style={{margin:'3px'}} variant="primary" type="submit" value='Submit'>
                            Login/Signup
                         </Button></Link></p>
          <UsersList users={this.props.users} />
        </Container>
          
      }
      }
}



const mapStateToProps = state => ({
    users: state.users.users,
    user: state.user
  })

  export default connect(mapStateToProps, {loadusers})(UsersListContainer)
