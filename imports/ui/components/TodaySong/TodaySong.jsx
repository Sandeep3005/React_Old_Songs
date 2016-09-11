import React, {Component} from 'react';
import YoutubePlayer from 'react-youtube-player';
import { createContainer } from 'meteor/react-meteor-data';
import { Video } from '../../../api/Video_Info.js';
import VideoDetail from '../VideoDetail/VideoDetail.jsx';

class TodaySong extends Component{
      constructor(){
          super();
          this.state = {
            currentVideo:false
          }
      }

      componentWillMount(){
            //console.log(this.props.videos);
      }

      render(){
          if(this.props.videos){
              //console.log("*************************************",this.props.video);
              if(!this.props.video){
                    video = this.props.videos;
              }
              else{
                   video = this.props.video;
              }

              return(
                    <div>
                      Top Rated Song

                        <YoutubePlayer
                              videoId={ video.youtubeID }
                              playbackState='unstarted'
                              height='300'
                              width='400'
                              configuration={
                                  {
                                      showinfo: 1,
                                      controls: 1
                                  }
                              }
                          />

                        <VideoDetail video={video}/>

                    </div>
              )
          }
          else{
            return(
              <h1>Loading...</h1>
            )
          }

          //const { youtubeID }  = this.props.videos[0];
          //let youtubeID = this.props.videos.youtubeID;
          //console.log(youtubeID);

      }
}

export default createContainer(() => {
  Meteor.subscribe('videos');
  return {
    videos: Video.find({},{sort:{rating:-1}}).fetch()[0]
  };
}, TodaySong);
