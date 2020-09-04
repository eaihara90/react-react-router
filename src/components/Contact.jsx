import React from 'react';

const Contact = (props) =>
{
    setTimeout(() => 
    {
        props.history.push('/about');
    }, 1500);

    return(
        <div className="contact">

            <h4 className="contact__title">Contact</h4>

            <p className="contact__content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, tempora! Accusantium, explicabo architecto. Repellat perferendis vero possimus nobis delectus laboriosam architecto reiciendis nisi modi, cumque temporibus soluta doloribus debitis dolore.</p>
            
        </div>
    )
}
export default Contact