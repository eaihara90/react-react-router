import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Pokeball from '../pokeball.png';

const getPostsUrl = 'https://jsonplaceholder.typicode.com/posts';
const fetchOptions = { method: 'GET', headers: { 'Content-Type': 'application/json' } }

class Home extends Component
{   
    state = 
    {
        posts: []
    }

    async componentDidMount()
    {
        try
        {
            const response = await fetch(getPostsUrl, fetchOptions);
            const data = await response.json();
        
            this.setState
            ({
                posts: data.slice(0, 20)
            });
        }
        catch(err)
        {
            console.log(err);
        }
    }

    render()
    {
        const { posts } = this.state;
        const postList = posts.length ?
        (
            posts.map(post =>
            {
                return (
                    <div className="post" key={ post.id }>
                        <img src={Pokeball} alt="pokeball" className="post__img" />

                        <Link to={ `/${post.id}` } className="post__link">
                            <h4 className="post__title">{ post.title }</h4>
                        </Link>
                        
                        <div className="post__text">{ post.body }</div>
                    </div>
                )
            })
        ) :
        (
            <div> No posts yet</div>
        )

        return(
            <div className="home">

                <h3 className="home__title">Home</h3> 
                { postList }
            </div>
        )
    }
}
export default Home