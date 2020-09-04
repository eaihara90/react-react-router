import React from 'react';

const Rainbow = (WrappedComponent) =>
{   
    const colours = ['orangered', 'dodgerblue', 'aqua', 'fuchsia', 'gray', 'grey', 'green', 'lime', 'maroon', 'navy', 'olive', 'purple', 'silver', 'teal', 'white', 'yellow'];
    
    const randomColor = colours[Math.floor(Math.random() * 16)];
    
    const style = { color: randomColor }

    return (props) =>
    {
        return(
            <div style={ style }>
                <WrappedComponent { ...props }/>
            </div>
        )
    }
}

export default Rainbow
