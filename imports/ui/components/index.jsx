import React, { Component } from 'react';
import YoutubePlayer from 'react-youtube-player';
import TodaySong  from './TodaySong/TodaySong.jsx';
import SortInfo  from '../pages/SortInfo.jsx';
import AllVideoList  from '../pages/AllVideoList.jsx';

export default class Index extends Component{

      constructor(){
          super();
          this.state = {
            sortBy:"song",
            video: false
          }
      }

      componentDidMount (){
          //console.log(this.props.sortBy);
      }

      sortBy(data){
          //console.log(data);
          this.setState({
            sortBy : data
          })
      }

      playVideo(video){
          //console.log("id = ",video);
          this.setState({
              video : video
          })
      }

      render(){
            const opts = {
                  height: '390',
                  width: '640',
                  playerVars: { // https://developers.google.com/youtube/player_parameters
                    autoplay: 1
                  }
            };

          return(
              <div className="container-fluid">
                    <br/>
                    <div className="col-md-2">
                        <SortInfo sortBy={this.sortBy.bind(this)}/>
                    </div>
                    <div className="col-md-6">
                        <AllVideoList  playVideo={this.playVideo.bind(this)} sortBy={this.state.sortBy}/>
                    </div>
                    <div className="col-md-4">
                      <TodaySong video={this.state.video}/>
                    </div>
              </div>
          )
      }

      _onReady(event) {
          // access to player in all event handlers via event.target
          event.target.pauseVideo();
        }
}
