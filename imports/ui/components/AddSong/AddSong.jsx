import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Link, browserHistory } from 'react-router';

export const AddSong = React.createClass({

    addVideo(){
            let singers  =  this.refs.singer.value;
            let list = singers.split(",");
            let videoObj = {
                song: this.refs.song.value,
                youtubeID: this.refs.youtubeID.value,
                singer: list,
                movie: this.refs.movie.value,
                musicDirector: this.refs.musicDirector.value,
                release_date: +this.refs.release_date.value,
                wiki_link: this.refs.wiki.value,
                insert_date: new Date(),
                insert_user_id: Meteor.userId(),
                rating:0
            }

              console.log(videoObj);

              Meteor.call("addNewVideo", videoObj, function(error,response){
                  if ( error ) {
                      // Handle our error.
                  }
                  else {
                      // Handle our return value.
                  }
              });

              this.refs.song.value = "";
              this.refs.youtubeID.value = "";
              this.refs.singer.value = "";
              this.refs.movie.value = "";
              this.refs.musicDirector.value = "";
              this.refs.release_date.value = "";
              this.refs.wiki.value = "";
              this.refs.movie.value = "";

    },

    render(){
      return(
        <div className="container">
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-7">
                    Add Video
                    <hr/>
                </div>
                <div className="col-md-3"></div>
            </div>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <form>
                        <div className="form-group">
                            <input className="form-control" ref="song" type="text" placeholder="Song"/>
                        </div>
                        <div className="form-group">
                            <input className="form-control" ref="youtubeID" type="text" placeholder="YouTube ID"/>
                        </div>
                        <div className="form-group">
                            <input className="form-control" ref="singer" type="text" placeholder="Singer"/>
                        </div>
                        <div className="form-group">
                            <input className="form-control" ref="movie" type="text" placeholder="Movie"/>
                        </div>
                        <div className="form-group">
                            <input className="form-control" ref="musicDirector" type="text" placeholder="Music Director"/>
                        </div>
                        <div className="form-group">
                            <input className="form-control" ref="release_date" type="text" placeholder="Release Year"/>
                        </div>
                        <div className="form-group">
                            <input className="form-control" ref="wiki" type="text" placeholder="Wiki Link"/>
                        </div>
                        <button  onClick={this.addVideo.bind(this)} type="button" className="btn btn-info">Add Song</button>
                    </form>
                </div>
                <div className="col-md-3">
                    <Link to="/video_list">Video List</Link>
                </div>
            </div>
        </div>
      )
    }
});
