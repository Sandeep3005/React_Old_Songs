import { Meteor } from 'meteor/meteor';
import { Video } from '../imports/api/Video_Info.js';
import { check } from 'meteor/check';

Meteor.methods({
    addNewVideo: function( videoObj ) {
        console.log(videoObj);
        check(videoObj,{
            song:String,
            youtubeID:String,
            singer:[String],
            movie:String,
            musicDirector:String,
            release_date:Number,
            wiki_link:String,
            insert_date:Date,
            insert_user_id:String,
            rating:Number
        });
        //console.log(videoObj);
        console.log(this.userId);
        try{
          if(!this.userId){
              throw new Meteor.Error(500,"Must be logged in to add new songs");
          }
          return Video.insert(videoObj);
        }
        catch(exception){
          throw new Meteor.Error(500, exception.message);
        }
    },
    updateRating:function(videoData){
          //console.log(videoData);

          check(videoData,{
                videoId:String,
                rating:Number
          });

          try{
            if(!this.userId){
                throw new Meteor.Error(500,"Must be logged in to update Rating");
            }
            return Video.update({_id:videoData.videoId},{
                         $set:{ rating : videoData.rating }
                     });
          }
          catch(exception){
            throw new Meteor.Error(500, exception.message);
          }
    },

    deleteRoutine(videoId){
        Video.remove(videoId);
    }
});
