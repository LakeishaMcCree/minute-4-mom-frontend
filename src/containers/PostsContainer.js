import React from 'react' 
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import {fetchPosts} from '../actions/fetchPosts'
import PostInput from '../components/PostInput'
import PostList from '../components/PostList'
import PostShow from '../components/PostShow'


class PostsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchPosts()
    }

    render() {
        return (
            <div>
                <Route path='/posts/new' component={PostInput}/>
                <Route path='/posts/:id' render={(routerProps) => <PostShow {...routerProps} posts={this.props.posts} />} />
                <Route exact path='/posts' render={(routerProps) => <PostList {...routerProps} posts={this.props.posts} />} />
            </div>
        )
    }
        
    

}

//to see the list, create a mapStateToProps function

const mapStateToProps = state => {
    return {//returning an object called posts
        posts: state.posts 
    }
}

export default connect(mapStateToProps, {fetchPosts})(PostsContainer)