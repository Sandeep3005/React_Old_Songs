import React,{Component} from 'react';
import fontawesome from 'fontawesome';

export default class SingleVideo extends Component{

      constructor(){
            super();
            this.state = {
              videoId:false
            }
      }

      deleteRoutine(){
          //console.log(this.props.video._id);
          Meteor.call("deleteRoutine",this.props.video._id,function(error,response){
              if(error){}
              else{}
          });
      }

      onPlayVideo(){
          //  console.log(this.props.video);
            this.props.playVideo(this.props.video._id);
      }

      render(){
        return(
          <div>
                <div className="row">
                    <div className="col-md-8">
                        { this.props.video.song }
                    </div>
                    <div className="col-md-1"/>
                    <div className="col-md-1">
                        {this.props.video.rating}/5
                        {/*<i className="fa fa-pencil-square-o text-warning"/>*/}
                    </div>
                    <div className="col-md-1 text-danger">
                        <i className="fa fa-trash-o" onClick={this.deleteRoutine.bind(this)}/>
                    </div>
                    <div className="col-md-1">
                        <i onClick={this.onPlayVideo.bind(this)} className="fa fa-play text-primary"/>
                    </div>
                </div>
        </div>
        )
      }
}
