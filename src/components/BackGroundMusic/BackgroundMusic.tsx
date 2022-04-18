import React, { useRef, useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import playlist from "../../playlist.js";

const BackgroundMusic = () => {
    //It will be player itself with a lot of builded functions
    const player = useRef<any>(null);
    //For useEffect dependency
    const [playerIsReady, setPlayerIsReady] = useState(false);
    //Just a playlist to play
    const shuffledPlaylist = playlist.sort(() => Math.random() - 0.5);

    //When player is loaded on page it is setting with ref
    //Then loads playlist
    //Also it sets video to start (from 0 seconds)
    const onReady = (e: any) => {
        player.current = e.target;
        const arrayOfIDs = shuffledPlaylist.map(music => music.id);
        player.current.cuePlaylist(arrayOfIDs);
        player.current.setLoop(true);

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

    return(
        <>
        <div style={{width: 300, height: 250, visibility: 'visible', position: 'absolute', top: 10, left: 20}}>
            <YouTube opts={{playerVars: {
            autoplay: 0,
            loop: 1,
            },
            }} containerStyle={{width: 0, height: 0}} onReady={onReady} />
        </div>
       { player && <button onClick={handleClick}>Play</button> }
        </>
    )
};

export default BackgroundMusic;