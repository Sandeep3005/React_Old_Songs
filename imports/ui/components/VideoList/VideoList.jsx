import React, {Component} from 'react';
import './VideoList.css';
import { createContainer } from 'meteor/react-meteor-data';
import { Video } from '../../../api/Video_Info.js';
import fontawesome from 'fontawesome';
import SingleVideo from '../SingleVideo/SingleVideo.jsx';
import VideoDetail from '../VideoDetail/VideoDetail.jsx';
import YoutubePlayer from 'react-youtube-player';
import StarRatingComponent from 'react-star-rating-component';

class VideoList extends Component{

  constructor(){
      super();
      let self = this;
      console.log(this.props);
      this.state = {
        showVideo :false,
        currentVideo:false,
        rating:0
      }
  }

  playVideo(videoId){
      //console.log(videoId);
      let currentVideo = false;
      for (i = 0; i < this.props.videos.length; i++) {
            if(this.props.videos[i]._id === videoId){
              currentVideo = this.props.videos[i];
            }
      }
      console.log(currentVideo);
      console.log(this.state);
      this.setState({
            currentVideo : currentVideo,
            showVideo:true,
            rating:currentVideo.rating
      });
      console.log(this.state);
  }

  onStarClick(nextValue, prevValue, name) {
      console.log(nextValue,prevValue,name);
      //console.log(this.state);
      this.setState({rating: nextValue});
      let videoData = {
          rating:nextValue,
          videoId:this.state.currentVideo._id
      }
      Meteor.call("updateRating", videoData, function(error,response){
          if ( error ) {
              // Handle our error.
          }
          else {
              // Handle our return value.
          }
      });
  }

  getList(){
        return this.props.videos.map((video) =>(
            <SingleVideo key={video._id} video={video} playVideo={this.playVideo.bind(this)}/>
        ));

    {/*
      let n = this.props.videos.map((video,i) =>{
          return <li key={i}>{video.song} &nbsp;
              &nbsp;<i className="fa fa-pencil-square-o"/>
              &nbsp;<i className="fa fa-times"/>
              &nbsp;<i className="fa fa-play"/>
            </li>
      });
      return n;
      */}

  }

  render(){
    const { rating } = this.state;
    //console.log(this.props);
    return(
      <div className="container">
          <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-7">
                  <h2>Video List</h2>
                  <hr/>
              </div>
              <div className="col-md-3"></div>
          </div>

          <div className="row">
              <div className="col-md-2"/>
              <div className="col-md-10">
                    <a className="videoName" href="#">A</a>
                    <a className="videoName" href="#">B</a>
                    <a className="videoName" href="#">C</a>
                    <a className="videoName" href="#">D</a>
                    <a className="videoName" href="#">E</a>
                    <a className="videoName" href="#">F</a>
                    <a className="videoName" href="#">G</a>
                    <a className="videoName" href="#">H</a>
                    <a className="videoName" href="#">I</a>
                    <a className="videoName" href="#">K</a>
                    <a className="videoName" href="#">L</a>
                    <a className="videoName" href="#">M</a>
                    <a className="videoName" href="#">N</a>
                    <a className="videoName" href="#">O</a>
                    <a className="videoName" href="#">P</a>
                    <a className="videoName" href="#">Q</a>
                    <a className="videoName" href="#">R</a>
                    <a className="videoName" href="#">S</a>
                    <a className="videoName" href="#">T</a>
                    <a className="videoName" href="#">U</a>
                    <a className="videoName" href="#">V</a>
                    <a className="videoName" href="#">W</a>
                    <a className="videoName" href="#">X</a>
                    <a className="videoName" href="#">Y</a>
                    <a className="videoName" href="#">Z</a>
                </div>
                <div className="col-md-2"/>
          </div>
          <br/>
          {this.state.showVideo ?
          <div>
                <div className="row">
                    <div className="col-md-3"/>
                    <div className="col-md-6">
                           <YoutubePlayer
                                        videoId={this.state.currentVideo.youtubeID}
                                        playbackState='unstarted'
                                        height='300'
                                        width='600'
                                        configuration={
                                            {
                                                showinfo: 1,
                                                controls: 1
                                            }
                                        }
                                    />

                    </div>
                    <div className="col-md-3"/>
                </div>
                <div className="row">
                    <div className="col-md-5"/>
                    <div className="col-md-5">
                          <h1>
                          <StarRatingComponent
                              name="rate1"
                              starCount={5}
                              value={rating}
                              renderStarIcon={() => <span><i className="fa fa-bell"></i></span>}
                              onStarClick={this.onStarClick.bind(this)}
                          />
                        </h1>
                    </div>
                    <div className="col-md-2"/>
                </div>
           </div>
          :  null}
          <br/><br/>
          <div className="row">
              <div className="col-md-1"/>
              <div className="col-md-6">
                    {this.getList()}
              </div>
              <div className="col-md-1" />
              <div className="col-md-4">
                  {this.state.showVideo ? <VideoDetail video={this.state.currentVideo}/> :  null}
              </div>
          </div>
      </div>
    )
  }
}

export default createContainer(() => {
  Meteor.subscribe('videos');
  return {
    videos: Video.find({}).fetch(),
  };
}, VideoList);
