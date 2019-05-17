import  React, {Component} from 'react'
import {connect} from 'react-redux'


class Post extends Component{
    handleClick = () =>{
        this.props.deletePost(this.props.post.id)
        this.props.history.push('/')
    }
    render(){
        console.log(this.props)
        const post = this.props.post ? (
            <div className="post">
                <h4 className="center">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <div className="center">
                    <button className="btn gre y " onClick={this.handleClick}>Delete</button>
                </div>
            </div>
        ) : (
            <div className="center">Loading Post..</div>
        )
        return(
            <div className="container">
                {post}
            </div>
        )
    }
}

const mapStateToProps = (state,ownProps) =>{
    let id = ownProps.match.params.post_id;
    return {
        post: state.posts.find(post=>post.id===id)
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        deletePost: function deletePost(id){ // dont know why cant use ES6 func
            dispatch({
                type:'DELETE_POST',
                id:id
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Post)