
import React, { useState } from 'react';

const Post = ({ children, maxLength}) => {

    const [hidden, setHidden] = useState(true);

    if (children.length < maxLength) {
        return children;
    }
        
    return (
        <div>
            {hidden ?
                (`${children.substr(0, maxLength).trim()}... `)
                : children}

            {hidden ? (<button className="bg-red-500 py-1 px-2 ml-8 border border-purple-200 rounded-full hover:text-white bg-green-200 " onClick={() => setHidden(false)}>Read More</button>)
                : (<button onClick={() => setHidden(true)}>Read Less</button>)
                }
        </div>
        )
}

export default Post;