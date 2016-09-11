import React,{Component} from 'react';
import fontawesome from 'fontawesome';

export default class VideoDetail extends Component{

      constructor(){
            super();
            this.state = {
              videoId:false
            }
      }

      getDetail(){
          let keyNames = Object.keys(this.props.video);

          let n = keyNames.map((i)=>{
                return (
                  <div key={i}>
                  <div >{i}</div>
                  <div>{this.props.video.i}</div>
                  </div>
                )
          });

          return n;
      }

      render(){
        //console.log(this.props.video);
        var keyNames = Object.keys(this.props.video);
        //console.log(keyNames);
        var size = Object.keys(this.props.video).length;
        //console.log(size);
        let n = keyNames.map((i)=>{
              return (
                <div key={i}>{i}</div>)
        });
        //console.log(n);
        return(
          <div>
                <div className="row">
                    <div className="col-md-5">
                          Song
                    </div>
                    <div className="col-md-6">
                          {this.props.video.song}
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-5">
                          Singer
                    </div>
                    <div className="col-md-6">
                          {this.props.video.singer}
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-5">
                          Movie
                    </div>
                    <div className="col-md-6">
                          {this.props.video.movie}
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-5">
                          Music Director
                    </div>
                    <div className="col-md-6">
                          {this.props.video.musicDirector}
                    </div>
                </div>
        </div>
        )
      }
}
