import { useState } from "react"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./data/FeedbackData"

function App() {
    const title = 'Blog Post'
    const body = 'This is my blog'
    // list
    const comments = [
        {id: 1, text: 'Comment One'},
        {id: 2, text: 'Comment Two'},
        {id: 3, text: 'Comment Three'},
        {id: 4, text: 'Comment Me'}
    ]

    // when set to true it visually mimics what a loading screen
    // may look like
    const loading = false
    const showComments = true

    const [feedback, setFeedback] = useState
    (FeedbackData)

    // double check that all returns happen after any constants
    // are declared
    if (loading) return <h1>Loading ...</h1>

    // ternary marks are ? &&

    // code block is used in the return, check for the name of the const
    const commentBlock = (            
        <div className="comments">
            <h3>Comments ({comments.length})</h3>
            <ul>
                {comments.map((comment, index) => (
                    <li key={index}>{comment.text}</li>
                ))}
            </ul>
        </div>
    )


    return (
        <>
            <Header />
            <div className='container'>
                <h1>My App</h1>
                <FeedbackList feedback={feedback}/>

                {/* 
                    <h1>{title}</h1> 
                    <p>{body}</p>
                    {5 + 5}
                    {showComments && commentBlock}
                */}
                
                {/* to comment in jsx within react use curly braces*/ }
            </div>
        </>
    )
}

/* multi-line comment */

// the return statement can only use one parent element
// the main wrapper element can be empty brackets

// I needed to add a blank line after the export to
// get the code to work!!!
export default App
