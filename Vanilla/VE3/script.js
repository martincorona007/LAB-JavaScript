var jukebox = document.querySelector('ul.player');
jukebox.addEventListener('click',function(e){
  //playing media events
  
  var songName = e.target.getAttribute('data-src');
  var auidoPlayer = document.querySelector('#player');

  if(auidoPlayer){
    if(songName ===auidoPlayer.getAttribute('src')){
      if(auidoPlayer.paused){
        auidoPlayer.play();
        e.target.id = 'playing';
      }else{
        auidoPlayer.pause();
        e.target.id = 'paused'
      }
    }else{
      auidoPlayer.src = songName;
      auidoPlayer.play();
      if(document.querySelector('#playing')){
        document.querySelector('#playing').id = '';
      }else{
        document.querySelector('#paused').id = '';
      }
      e.target.id = 'playing';
    }
    
  }else{
    var audioPlayer = document.createElement('audio');
    audioPlayer.id = 'player';
    e.target.id = 'playing'
    audioPlayer.src = songName;
    document.body.appendChild(audioPlayer);
    audioPlayer.play();
    //monitoring media-eded events
    audioPlayer.addEventListener('emded',function(){
      audioPlayer.parentNode.removeChild(audioPlayer);
      e.target.id = '';
    },false)
    
  }
  

},false);