// Insert your code here!
var counter = 1;

var deleted = function(id) {
  $('.joke').on('click','.delete',function() {
    $.ajax({
      type: 'DELETE',
      url: '/api/jokes/' + id,
      success: function(result) {
        console.log(result);
      }
    })
  });
};

var reload = $(document).ready(function() {
    $.get('/api/jokes',function(data) {
      data.forEach(function(x) {
        $('.jokes').append(
          '<div class="joke" data-joke-id="' + x.id + '">' + 
          '<p>Question: ' + x.question + '</p><p>Answer: ' + 
          x.answer + 
          '</p><button class="delete">Delete</button></div>'
        );
      });
      $('.joke').on('click','.delete',function(f) {
        // $(this).parent().remove();
        var $data = $(this).parent().attr('data-joke-id');
        deleted($data)
      });
    });
});

$('.joke-button').on('click',function(e) {
  e.preventDefault();

  // var jokesCollection = [];
  
  var addJoke = function() {
    var quest = $('.joke-form-question').val();
    var ans = $('.joke-form-answer').val();

    var obj = {
      question: quest,
      answer: ans,
      id: counter
    };

    // $(document).trigger('postJoke', obj);

    // jokesCollection.push(obj);
    
    $('.joke-form-question').val('');
    $('.joke-form-answer').val('');



    
   
    counter++;

    var par = { joke: obj }
    // var params = $.param(par)
    $.post('/api/jokes', par)

  };
  addJoke();
   
}); 




// var postJoke = $(document).on("postJoke",function(e,joke) {
//   $('.jokes').append(
//     '<div class="joke" data-joke-id="' + joke.id + '">' + 
//       '<p>' + joke.question + '</p><p>' + 
//       joke.answer + 
//       '</p><button class="delete">Delete</button></div>'
//   );
// });

























