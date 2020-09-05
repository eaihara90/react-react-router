import React, { Component } from 'react';

const getPostUrlById = (_id) => `https://jsonplaceholder.typicode.com/posts/${_id}`;
const fetchOptions = { method: 'GET', headers: { 'Content-Type': 'application/json' } }


class Post extends Component
{
    state =
    {
        post: null
    }
    
    async componentDidMount()
    {
        const id = parseInt(this.props.match.params.post_id);
        
        try
        {
            const response = await fetch(getPostUrlById(id), fetchOptions);
            const data = await response.json();
            
            this.setState
            ({
                post: data
            })

        }
        catch(err)
        {
            console.log(err);
        }
    }

    render()
    {
        let post = null;

        if (this.state.post)
        {
            post =
            <div className="single-post__content">
                <h4 className="single-post__title">{ this.state.post.title }</h4>
                <p className="single_post__text">{ this.state.post.body }</p>
            </div>
        }
        else
        {
            post = 
            
            <div className="single-post__title">Loading post...</div>
        }

        return(
            <div className="single-post">
                { post }
            </div>
        )
        
    }
}




export default Post