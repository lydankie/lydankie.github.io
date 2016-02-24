$(document).ready(function(){


  $('.info-form').submit(function(event){
    event.preventDefault();
    $('.song-result').remove();
    console.log('testing');

    var userChineseLevel = $('.chinese-level-dropdown').val();
    var userGenre = $('.genre-dropdown').val();

    console.log(userChineseLevel);
    console.log(userGenre);

    $.each(data, function( i, value ) {
      console.log(value)
      console.log(value["artistEnglish"])
      console.log(value.songNameEnglish)
      if (userChineseLevel==value.chineseLevel && userGenre==value.genre) {
        $('.song-result-list').append("<a href='song.html'><li><div class='song-result'><div class='image result-square'><img src="+value.albumImage+" alt='album image'></div><div class='result-description'><p>" + value.artistEnglish +"</p><p>"+value.artistMandarin+"</p><p>" + value.songNameEnglish +"</p><p>" + value.songNameMandarin + "</p><p>"+value.genre+"</div></div></li></a>");
      }
      // else {
      //   $('.song-result-list').append("Sorry! I don't have any songs like this in my demo");
      // }
})
  });

  var data = [

    {
    artistEnglish: 'Chen Qi Zhen',
    artistMandarin: '陳綺貞',
    songNameEnglish: 'Jealous',
    songNameMandarin: '嫉妒',
    chineseLevel: 'Intermediate',
    albumImage: 'images/chenqizhen.png',
    genre: 'Pop'
    },

    {
    artistEnglish: 'Jay Chou',
    artistMandarin: '周杰倫',
    songNameEnglish: 'White Windmill',
    songNameMandarin: '白色風車',
    chineseLevel: 'Beginner',
    albumImage: 'images/jaychou.png',
    genre: 'Pop'
    },

    {
    artistEnglish: 'Teresa Teng',
    artistMandarin: '鄧麗君',
    songNameEnglish: 'The Moon Represents My Heart',
    songNameMandarin: '月亮代表我的心',
    chineseLevel: 'Beginner',
    albumImage: 'images/teresateng.png',
    genre: 'Oldies'
  },

  {
  artistEnglish: 'Chen Qi Zhen',
  artistMandarin: '陳綺貞',
  songNameEnglish: 'Jealous',
  songNameMandarin: '嫉妒',
  chineseLevel: 'Intermediate',
  albumImage: 'images/chenqizhen.png',
  genre: 'Pop'
  },

  {
  artistEnglish: 'Jay Chou',
  artistMandarin: '周杰倫',
  songNameEnglish: 'White Windmill',
  songNameMandarin: '白色風車',
  chineseLevel: 'Beginner',
  albumImage: 'images/jaychou.png',
  genre: 'Pop'
  },

  {
  artistEnglish: 'Teresa Teng',
  artistMandarin: '鄧麗君',
  songNameEnglish: 'The Moon Represents My Heart',
  songNameMandarin: '月亮代表我的心',
  chineseLevel: 'Beginner',
  albumImage: 'images/teresateng.png',
  genre: 'Oldies'
  },
  {
  artistEnglish: 'Chen Qi Zhen',
  artistMandarin: '陳綺貞',
  songNameEnglish: 'Jealous',
  songNameMandarin: '嫉妒',
  chineseLevel: 'Intermediate',
  albumImage: 'images/chenqizhen.png',
  genre: 'Pop'
  },

  {
  artistEnglish: 'Jay Chou',
  artistMandarin: '周杰倫',
  songNameEnglish: 'White Windmill',
  songNameMandarin: '白色風車',
  chineseLevel: 'Beginner',
  albumImage: 'images/jaychou.png',
  genre: 'Pop'
  },

  {
  artistEnglish: 'Teresa Teng',
  artistMandarin: '鄧麗君',
  songNameEnglish: 'The Moon Represents My Heart',
  songNameMandarin: '月亮代表我的心',
  chineseLevel: 'Beginner',
  albumImage: 'images/teresateng.png',
  genre: 'Oldies'
  },
  {
  artistEnglish: 'Chen Qi Zhen',
  artistMandarin: '陳綺貞',
  songNameEnglish: 'Jealous',
  songNameMandarin: '嫉妒',
  chineseLevel: 'Intermediate',
  albumImage: 'images/chenqizhen.png',
  genre: 'Pop'
  },

  {
  artistEnglish: 'Jay Chou',
  artistMandarin: '周杰倫',
  songNameEnglish: 'White Windmill',
  songNameMandarin: '白色風車',
  chineseLevel: 'Beginner',
  albumImage: 'images/jaychou.png',
  genre: 'Pop'
  },

  {
  artistEnglish: 'Teresa Teng',
  artistMandarin: '鄧麗君',
  songNameEnglish: 'The Moon Represents My Heart',
  songNameMandarin: '月亮代表我的心',
  chineseLevel: 'Beginner',
  albumImage: 'images/teresateng.png',
  genre: 'Oldies'
  },
  {
  artistEnglish: 'Chen Qi Zhen',
  artistMandarin: '陳綺貞',
  songNameEnglish: 'Jealous',
  songNameMandarin: '嫉妒',
  chineseLevel: 'Intermediate',
  albumImage: 'images/chenqizhen.png',
  genre: 'Pop'
  },

  {
  artistEnglish: 'Jay Chou',
  artistMandarin: '周杰倫',
  songNameEnglish: 'White Windmill',
  songNameMandarin: '白色風車',
  chineseLevel: 'Beginner',
  albumImage: 'images/jaychou.png',
  genre: 'Pop'
  },

  {
  artistEnglish: 'Teresa Teng',
  artistMandarin: '鄧麗君',
  songNameEnglish: 'The Moon Represents My Heart',
  songNameMandarin: '月亮代表我的心',
  chineseLevel: 'Beginner',
  albumImage: 'images/teresateng.png',
  genre: 'Oldies'
  },
  {
  artistEnglish: 'Chen Qi Zhen',
  artistMandarin: '陳綺貞',
  songNameEnglish: 'Jealous',
  songNameMandarin: '嫉妒',
  chineseLevel: 'Intermediate',
  albumImage: 'images/chenqizhen.png',
  genre: 'Pop'
  },

  {
  artistEnglish: 'Jay Chou',
  artistMandarin: '周杰倫',
  songNameEnglish: 'White Windmill',
  songNameMandarin: '白色風車',
  chineseLevel: 'Beginner',
  albumImage: 'images/jaychou.png',
  genre: 'Pop'
  },

  {
  artistEnglish: 'Teresa Teng',
  artistMandarin: '鄧麗君',
  songNameEnglish: 'The Moon Represents My Heart',
  songNameMandarin: '月亮代表我的心',
  chineseLevel: 'Beginner',
  albumImage: 'images/teresateng.png',
  genre: 'Oldies'
  },
  {
  artistEnglish: 'Chen Qi Zhen',
  artistMandarin: '陳綺貞',
  songNameEnglish: 'Jealous',
  songNameMandarin: '嫉妒',
  chineseLevel: 'Intermediate',
  albumImage: 'images/chenqizhen.png',
  genre: 'Pop'
  },

  {
  artistEnglish: 'Jay Chou',
  artistMandarin: '周杰倫',
  songNameEnglish: 'White Windmill',
  songNameMandarin: '白色風車',
  chineseLevel: 'Beginner',
  albumImage: 'images/jaychou.png',
  genre: 'Pop'
  },

  {
  artistEnglish: 'Teresa Teng',
  artistMandarin: '鄧麗君',
  songNameEnglish: 'The Moon Represents My Heart',
  songNameMandarin: '月亮代表我的心',
  chineseLevel: 'Beginner',
  albumImage: 'images/teresateng.png',
  genre: 'Oldies'
  },
  {
  artistEnglish: 'Chen Qi Zhen',
  artistMandarin: '陳綺貞',
  songNameEnglish: 'Jealous',
  songNameMandarin: '嫉妒',
  chineseLevel: 'Intermediate',
  albumImage: 'images/chenqizhen.png',
  genre: 'Pop'
  },

  {
  artistEnglish: 'Jay Chou',
  artistMandarin: '周杰倫',
  songNameEnglish: 'White Windmill',
  songNameMandarin: '白色風車',
  chineseLevel: 'Beginner',
  albumImage: 'images/jaychou.png',
  genre: 'Pop'
  },

  {
  artistEnglish: 'Teresa Teng',
  artistMandarin: '鄧麗君',
  songNameEnglish: 'The Moon Represents My Heart',
  songNameMandarin: '月亮代表我的心',
  chineseLevel: 'Beginner',
  albumImage: 'images/teresateng.png',
  genre: 'Oldies'
  }

]

  }) //end doc ready
