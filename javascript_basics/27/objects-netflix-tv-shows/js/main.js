//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

 class NetflixTvShow {
  constructor(title, genre, length, isChildFriendly) {
    this.title = title;
    this.genre = genre;
    this.length = length;
    this.isChildFriendly = isChildFriendly;
  } 
  rating(num) {
    console.log(num)
  }
  postToSocialMedia(socials) {
    console.log(socials)
  }
  controls(action) {
    console.log(action)
  }
 }

 const cocoLemon = new NetflixTvShow("Cocolemon", "Educational", 2.02 , true);
 console.log(cocoLemon);
 cocoLemon.rating(4);
 cocoLemon.postToSocialMedia(["twitter", "facebook"]);
 cocoLemon.controls("paused");