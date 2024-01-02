
'use client';

import { useEffect, useRef } from 'react';

const VideoPlayer = ({ video }) => {
    const playerRef = useRef(null);

    useEffect(() => {
        if (playerRef.current && typeof window !== "undefined") {

            setTimeout(() => {
                console.log('windowwindowwindow', window.jwplayer);
                window.jwplayer(playerRef.current).setup({
                    sources: [{ file: video, type: 'hls' }],
                    autostart: 'false',
                    // width: '60%',
                    // height: '20px',
                    aspectratio: '16:9',
                    playbackRateControls: 'true',
                    stretching: 'fill'
                });
            }, 0);

        }
    }, [video]);

    return <div ref={playerRef}></div>;
};

export default VideoPlayer;