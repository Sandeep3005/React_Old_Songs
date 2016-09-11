import React, {Component} from 'react';

export default class SortInfo extends Component{

  constructor(){
      super();
      this.state = {
          sortBy:"song"
      }
  }

  changeSort(index){
      console.log(index);
      this.props.sortBy(index);
  }

  render(){

    return(
        <div>
            <div className="row">
                Sort List
            </div>
            <br/>
            <div className="row" ref="song" onClick={this.changeSort.bind(this,"song")}>
              Song
            </div>
            <div className="row" ref="musicDirector" onClick={this.changeSort.bind(this,"musicDirector")}>
              Music Director
            </div>
            <div className="row" ref="movie" onClick={this.changeSort.bind(this,"movie")}>
              Movie
            </div>
      </div>
    )
  }
}
