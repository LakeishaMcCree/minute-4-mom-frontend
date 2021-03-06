


export const deletePost = (postId) => {

    return (dispatch) => {
        return fetch(`http://localhost:3000/posts/${postId}`,{
            method: 'DELETE', 
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(resp => resp.json())
        .then(post => 
            dispatch({ type: 'DELETE_POST', payload: post.id }))
         .then(document.location.reload(true)) 
    }
   
}
 