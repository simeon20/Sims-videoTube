//doesnt record any user interaction making this a functional componet not a class//
import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return (
    <VideoListItem
      onVideoSelect={props.onVideoSelect}        
      key={video.etag}
      video={video} />

);
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;
