import React from "react";
import { createpost, loadposts } from "../../actions/posts";
import { connect } from "react-redux";
import PostsList from "./PostsList";
import PostForm from "./PostForm";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class PostsContainer extends React.Component {
  componentDidMount() {
    this.props.loadposts(this.props.match.params.id);
  }
  state = {
    owner: this.props.user.users
      ? this.props.user.users.find(
          user => (user.id = this.props.match.params.id)
        )
      : "",
    userId: this.props.user.id,
    content: ""
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    console.log("user", this.state.owner);
    event.preventDefault();
    this.props.createpost(this.state, this.props.match.params.id);
  };
  render() {
    if (this.props.user) {
      return (
        <div>
          <PostForm
            onSubmit={this.onSubmit}
            onChange={this.onChange}
            value={this.state.content}
          />
          <PostsList posts={this.props.posts} />
        </div>
      );
    } else {
      return (
        <div>
          <p>
            {" "}
            Log in or Sign up to add new Ticket!
            <Link to={`/login`}>
              <Button
                style={{ margin: "3px" }}
                variant="primary"
                type="submit"
                value="Submit"
              >
                Login/Signup
              </Button>
            </Link>
          </p>
          <PostsList posts={this.props.posts} />
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  posts: state.posts,
  user: state.user
});

export default connect(mapStateToProps, { loadposts, createpost })(
  PostsContainer
);
