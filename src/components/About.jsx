import React from 'react';
import Rainbow from '../hoc/Rainbow';

const About = (props) =>
{
    return(
        <div className="about">

            <h4 className="about__title">About</h4>

            <p className="about__content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, tempora! Accusantium, explicabo architecto. Repellat perferendis vero possimus nobis delectus laboriosam architecto reiciendis nisi modi, cumque temporibus soluta doloribus debitis dolore.</p>
            
        </div>
    )
}
export default Rainbow(About)