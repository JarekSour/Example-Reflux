/*
* Mosule dependencies
*/

import Reflux from 'reflux';
import $ from 'jquery';
import ImageActions from '../actions/ImageActions';

let ImageStore = Reflux.createStore({
  url: 'https://api.flickr.com/services/feeds/photos_public.gne?format=json',
  listenables: [ImageActions],  //que actions escucha
  imageList: [],
  init: function(){
    this.fetchList();
  },
  fetchList: function(){
    let tags = ['animals', 'cars'];
    let randomtag = tags[Math.floor(Math.random()+tags.length)];
    $.ajax({
      url: this.url +  `&tag=${randomtag}`,
      dataType: 'jsonp',
      jsonpCallback: 'jsonFlickrFeed',
      cache: false,
      context: this,
      success: function(data){
        console.log('fetch ok');
        this.imageList = data.items;
        this.trigger(this.imageList); //actualizacion de las vistas
      }
    })
  }
});

export default ImageStore;
