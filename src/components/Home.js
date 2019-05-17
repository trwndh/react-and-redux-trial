import React, {Component} from 'react';
import {Link} from 'react-router-dom';
// import axios from 'axios'
import pokeball from './pokeball.png'
import {connect} from 'react-redux';

class Home extends Component{
    // state={
    //     posts:[],

    // }
    // componentDidMount(){
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //     .then(res=>{
    //         console.log(res)
    //         this.setState({
    //             posts: res.data.slice(0,10)
    //         })
    //     })
    // }

    render(){
        console.log(this.props)
        const {posts} = this.props;
        const postList = posts.length?(
            posts.map(post=>{
                return(
                    <div className="post card" key={post.id}>
                        <img src={pokeball} alt=""/>
                        <div className="card-content">
                            <Link to={'/'+post.id}>
                            <span className="card-title red-text">{post.title}</span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ):(
            <div className="center">No Posts Yet</div>
        )
        return(
            <div className="container home">
                <h4 className="center">Home</h4>
                {postList}                
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Home)