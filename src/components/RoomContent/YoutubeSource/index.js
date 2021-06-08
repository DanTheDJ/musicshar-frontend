import React from 'react';

const YoutubeSource = ({ source }) => {

    const embedUrl = `https://www.youtube-nocookie.com/embed/${source.data.youtubeVideoId}?autoplay=1&allowfullscreen=1`;

    return <iframe width="1280" height="720" src={embedUrl} frameBorder="0" allowfullscreen></iframe>;

};

export default YoutubeSource;