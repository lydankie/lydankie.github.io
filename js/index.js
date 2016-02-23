$(document).ready(function(){


  $('.info-form').submit(function(event){
    event.preventDefault();
    console.log('testing');

    var userChineseLevel = $('.chinese-level-dropdown').val();
    var userGenre = $('.genre-dropdown').val();

    console.log(userChineseLevel);
    console.log(userGenre);

    $.each(data, function( i, value ) {
      console.log(value)
      console.log(value["artist"])
      console.log(value.songName)
      if (userChineseLevel==value.chineseLevel && userGenre==value.genre) {
        $('.song-result-list').append("<li><div class='song-result'> <img src="+value.albumImage+" alt='album image'><p>"+  value.artist +"</p><p>"+value.songName+"</p></div></li>");
      }
      else {
      }
})


  });


  }) //end doc ready

  var data = [

    {
    artist: 'Chen Qi Zhen',
    songName: 'Jealous ／ 嫉妒',
    chineseLevel: 'Intermediate',
    albumImage: 'images/chenqizhen.png',
    genre: 'Pop'
    },

    {
    artist: 'Jay Chou',
    songName: 'White Windmill ／ 白色風車',
    chineseLevel: 'Beginner',
    albumImage: 'images.jaychou.png',
    genre: 'Pop'
    },

    {
    artist: 'Teresa Teng',
    songName: 'The Moon Represents My Heart / 月亮代表我的心',
    chineseLevel: 'Beginner',
    albumImage: 'images.teresateng.png',
    genre: 'Oldies'
    },

    {
    artist: 'Chen Qi Zhen',
    songName: 'Jealous ／ 嫉妒',
    chineseLevel: 'Intermediate',
    albumImage: 'images/chenqizhen.png',
    genre: 'Pop'
    }

]
