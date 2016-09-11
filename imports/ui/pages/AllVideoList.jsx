import React, {Component} from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Video } from '../../api/Video_Info.js';

class AllVideoList extends Component{

  playMe(video){
      //console.log(video);
      this.props.playVideo(video);
  }

  getList(){

    //console.log(this.props);
    /**** A List   ***/
    let a = this.props.videos.map((video) =>{
        let value = video[this.props.sortBy];
        if( value.charAt(0) == "A"){
            return <li key={video._id} onClick={this.playMe.bind(this,video)}>{video[this.props.sortBy]} &nbsp;</li>
        }
    });
    a = <ul>
            A
          {a}
          <hr/>
          </ul>;
              /**** K List   ***/
    let k = this.props.videos.map((video) =>{
        //console.log(video);
        let value = video[this.props.sortBy];
        if( value.charAt(0) == "K"){
            return <li key={video._id} onClick={this.playMe.bind(this,video)}>{video[this.props.sortBy]} &nbsp;</li>
        }
    });
    k = <ul>
            K
          {k}
          <hr/>
          </ul>;
              /**** L List   ***/
      let l = this.props.videos.map((video) =>{
          //console.log(video);
          let value = video[this.props.sortBy];
          if( value.charAt(0) == "L"){
              return <li key={video._id} onClick={this.playMe.bind(this,video)}>{video[this.props.sortBy]} &nbsp;</li>
          }
      });
      l = <ul>
              L
            {l}<hr/>
            </ul>;

    /**** P List   ***/
    let p = this.props.videos.map((video) =>{
        //console.log(video);
        let value = video[this.props.sortBy];
        if( value.charAt(0) == "P"){
            return <li key={video._id} onClick={this.playMe.bind(this,video)}>{video[this.props.sortBy]} &nbsp;</li>
        }
    });
    p = <ul>
            P
          {p}<hr/>
          </ul>;
          /*
    console.log(_.union(a,b));
    console.log(a);
    console.log(b);
    let c = _.union(a,b)
    console.log(c);
*/
    let allList = _.union(a,k,l,p)
    return allList;
  }

  render(){
        if(this.props.videos){
              return(
                  <div>
                      <div className="row">
                          AllVideoList
                      </div>
                        {this.getList()}
                </div>
              )
        }
        else{
          return(
              <div>
                  <div className="row">
                    Loading ...
                  </div>
            </div>
          )
        }
  }
}

export default createContainer((props) => {
  console.log(props);
  let sortingData={song:1, musicDirector:1, movie:1};
  console.log(props.sortBy);

    console.log(sortingData[props.sortBy]);
    sortingData[props.sortBy] = sortingData[props.sortBy] * -1;
    console.log(sortingData[props.sortBy]);

  console.log(sortingData);
  Meteor.subscribe('videos');
  return {
    videos: Video.find({},{sort:sortingData}).fetch()
  };
}, AllVideoList);
