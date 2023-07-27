//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

// class NetflixShow{
//   constructor(showName,episodes,showLength,season){
//     this.title = title
//     this.episodes = episodes
//     this.length = showLength
//     this.season = season
//   }
//   play(){
//     console.log('Playing...')
//   }
//   stop(){
//     console.log('Stopping...')
//   }
//   saveToList(){
//     console.log('Save to list?')
//   }
// }

// let NetflixShow = new 

$(document).ready(function() {
  // Set up variables
  var $carousel = $('.carousel');
  var $images = $carousel.find('img');
  var currentIndex = 0;
  
  // Set the first image to active
  $images.eq(currentIndex).addClass('active');
  
  // Set the automatic slide interval
  var interval = setInterval(function() {
    // Remove the active class from the current image
    $images.eq(currentIndex).removeClass('active');
    
    // Increment the index and wrap around if necessary
    currentIndex = (currentIndex + 1) % $images.length;
    
    // Add the active class to the next image
    $images.eq(currentIndex).addClass('active');
  }, 3000); // Change this value to adjust the slide interval
  
  // Pause the automatic slide interval when the carousel is hovered
  $carousel.hover(
    function() {
      clearInterval(interval);
    },
    function() {
      interval = setInterval(function() {
        // Remove the active class from the current image
        $images.eq(currentIndex).removeClass('active');
        
        // Increment the index and wrap around if necessary
        currentIndex = (currentIndex + 1) % $images.length;
        
        // Add the active class to the next image
        $images.eq(currentIndex).addClass('active');
      }, 3000); // Change this value to adjust the slide interval
    }
  );
});
