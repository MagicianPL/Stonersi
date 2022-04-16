import React, { useRef } from 'react';
import YouTube from 'react-youtube';

const BackgroundMusic = () => {

    //It will be player itself with a lot of function
    const player = useRef<any>(null);

    //When player is loaded on page it is setting with ref
    //Also it sets video to start (from 0 seconds)
    const onReady = (e: any) => {
        player.current = e.target;
        player.current.seekTo(0);
    };

    const handleClick = () => {
        console.log(player.current.playVideo);
        player.current.playVideo();
    }

    return(
        <>
        <div style={{width: 300, height: 250, visibility: 'hidden', position: 'absolute', top: 10, left: 20}}>
            <YouTube videoId="qhC4aw1FFh8" opts={{playerVars: {
            autoplay: 1,
            loop: 1,
            },
            }} containerStyle={{width: 0, height: 0}} onReady={onReady} />
        </div>
       { player && <button onClick={handleClick}>Play</button> }
        </>
    )
};

export default BackgroundMusic;