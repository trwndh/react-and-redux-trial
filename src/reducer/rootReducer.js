const initState = {
    posts:[
        {id:'1',title:'judul 1 gan', body:'konten adalah isi'},
        {id:'2',title:'judul 2 gan', body:'2 konten adalah isi'},
        {id:'3',title:'judul 3 gan', body:'3 konten adalah isi'},
    ]
}

const rootReducer = (state=initState,action)=>{
    if(action.type=='DELETE_POST'){
        let newPosts = state.posts.filter(post=>{
            return action.id !== post.id
        })
        return{
            ...state,
            posts:newPosts
        }
    }
    return state;
}

export default rootReducer;