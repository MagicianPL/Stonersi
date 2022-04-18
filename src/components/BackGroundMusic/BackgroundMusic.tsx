import React, { useRef, useEffect, useState } from 'react';
import StyledWrapper from './StyledWrapper';
import YouTube from 'react-youtube';
import playlist from "../../playlist.js";
import { GiSpeaker, GiSpeakerOff } from 'react-icons/gi';

const BackgroundMusic = () => {
    //It will be player itself with a lot of builded functions
    const player = useRef<any>(null);
    //For useEffect dependency
    const [playerIsReady, setPlayerIsReady] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
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
        player.current.setVolume(1);

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
        if(isPlaying) {
            player.current.pauseVideo();
        } else {
            player.current.playVideo();
        }
        setIsPlaying(value => !value);
    }

    return(
        <StyledWrapper isPlaying={isPlaying}>
        <div style={{width: 300, height: 250, display: 'none', position: 'absolute', top: 10, right: 0}}>
            <YouTube opts={{playerVars: {
            autoplay: 0,
            loop: 1,
            },
            }} containerStyle={{width: 0, height: 0}} onReady={onReady} />
        </div>
        {isPlaying ?
        <GiSpeaker onClick={handleClick} />
        :
        <GiSpeakerOff onClick={handleClick} />
    }
       </StyledWrapper>
    )
};

export default BackgroundMusic;