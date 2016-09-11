import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Video = new Mongo.Collection('video');

if(Meteor.isServer){
  // This code only runs on the server
  Meteor.publish('videos', function VideoPublication() {
    return Video.find();
  });
}

VideoSchema =  new SimpleSchema({
    "song":{
        type:String,
    },
    "youtubeID":{
      type:String
    },
    "singer":{
      type:[String]
    },
    "movie":{
      type:String
    },
    "musicDirector":{
      type:String
    },
    "release_date":{
      type:String
    },
    "wiki_link":{
      type:String
    },
    "insert_date":{
      type:Date
    },
    "insert_user_id":{
      type:String
    },
    "rating":{
      type:Number
    }
});

Video.attachSchema(VideoSchema);
