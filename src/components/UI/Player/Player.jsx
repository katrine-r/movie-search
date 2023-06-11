import React from 'react';
import ReactPlayer from 'react-player/youtube';

const Player = ({ videoById }) => {
    const key = videoById.key
    console.log('key player', key)

    return (
        <ReactPlayer 
            url={`//www.youtube.com/embed/${key}?showinfo=0&enablejsapi=1&origin=http://localhost:3000`}
            controls={true}
            config={{
                youtube: {
                    playerVars: { 
                        enablejsapi: 1,
                        origin: window.location.origin,
                        // origin: window.location.hostname,
                        host: 'https://www.youtube.com'
                    }
                }
            }}
        />
    )
}

export default Player