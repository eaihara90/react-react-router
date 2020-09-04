import React, { Component } from 'react';
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
                posts: data.slice(0, 10)
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
                        <h4 className="post__title">{ post.title }</h4>
                        
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

                {/* <p className="home__content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, tempora! Accusantium, explicabo architecto. Repellat perferendis vero possimus nobis delectus laboriosam architecto reiciendis nisi modi, cumque temporibus soluta doloribus debitis dolore.</p> */}
                
                { postList }
            </div>
        )
    }
}
export default Home