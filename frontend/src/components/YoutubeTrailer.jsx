import React, { useMemo } from 'react';
import YouTube from 'react-youtube';

const getYouTubeVideoId = (url) => {
    const regex = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const matches = url.match(regex);
    return matches ? matches[1] : null;
};

const YouTubeTrailer = ({ url }) => {
    const videoId = useMemo(() => getYouTubeVideoId(url), [url]);
    if (!videoId) {
        return <div>Invalid YouTube URL</div>;
    }
    const opts = {
        height: "390",
        width: "100%",
        playVars: {
            autoplay: 1,
        }
    }
    return (
        <>
            <YouTube videoId={videoId} opts={opts} />
        </>
    );
};

export default React.memo(YouTubeTrailer);
