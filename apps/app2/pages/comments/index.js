import { useState } from "react";

function CommentsPage(){
    const [comments, setComments] = useState([])

    const fetchComments = async () => {
        const response = await fetch('https://www.googleapis.com/customsearch/v1?key=AIzaSyC9ntEwOZg7dixTbfbVOTLr3YNx6fvOI4g&cx=017576662512468239146:omuauf_lfve&q=poland')
        const data = await response.json()
        setComments(data)
    }
    return(
        <div>
        <button onClick = {fetchComments}> Load comments </button>
        {comments.kind}
        </div>
    )
}
// https://stackoverflow.com/questions/54229018/objects-are-not-valid-as-a-react-child-found-object-promise-if-you-meant-t
export default CommentsPage
