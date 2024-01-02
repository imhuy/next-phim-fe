
'use client';

import { useEffect, useRef } from 'react';

const VideoPlayer = ({ video }) => {
    const playerRef = useRef(null);
 
    useEffect(() => {
        if (playerRef.current && typeof window !== "undefined") {
            console.log('windowwindowwindow', window);
            window.jwplayer(playerRef.current).setup({
                sources: [{ file: video, type: 'hls' }],
                autostart: 'false',
                // width: '60%',
                // height: '20px',
                aspectratio: '16:9',
                playbackRateControls: 'true',
                stretching: 'fill'
            });
        }
    }, [video]);

    return <div ref={playerRef}></div>;
};

export default VideoPlayer;