import React, { useRef, useEffect, useState } from 'react';
import YouTube from 'react-youtube';

const BackgroundMusic = () => {
    //It will be player itself with a lot of builded functions
    const player = useRef<any>(null);
    //For useEffect dependency
    const [playerIsReady, setPlayerIsReady] = useState(false);

    //When player is loaded on page it is setting with ref
    //Also it sets video to start (from 0 seconds)
    const onReady = (e: any) => {
        player.current = e.target;
        player.current.seekTo(0);

        !playerIsReady && setPlayerIsReady(true);
    };

    useEffect(() => {
        if (player.current) {
            player.current.pauseVideo();
            player.current.seekTo(0);
        };
    }, [playerIsReady]);

    const handleClick = () => {
        console.log("Play")
        player.current.playVideo();
    }

    /* State of player. When music is ended then the next one is played */
    const handleStateChange = (e: any) => {
        if (e.data === 0) {
            //Play another music
            console.log("Music Ended");
            player.current.loadVideoById("47dtFZ8CFo8")
        };
    };

    return(
        <>
        <div style={{width: 300, height: 250, visibility: 'visible', position: 'absolute', top: 10, left: 20}}>
            <YouTube videoId="j55Evxqgweo" opts={{playerVars: {
            autoplay: 0,
            loop: 1,
            },
            }} containerStyle={{width: 0, height: 0}} onReady={onReady} onStateChange={handleStateChange} />
        </div>
       { player && <button onClick={handleClick}>Play</button> }
        </>
    )
};

export default BackgroundMusic;