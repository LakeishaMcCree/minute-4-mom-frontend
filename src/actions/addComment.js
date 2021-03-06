export const addComment = (comment, postId) => {

    return(dispatch) => {
        return fetch(`http://localhost:3000/posts/${postId}/comments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(comment)
        }) 
        .then(resp => resp.json())
        .then(post => dispatch({ type: 'ADD_COMMENT', payload: post}))
    }

}