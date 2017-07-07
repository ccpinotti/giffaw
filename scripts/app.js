$(document).on("ready", function(){
  $('.form').on('submit',function(event){
    event.preventDefault();
    $('img').remove
//     $.ajax({
//       method:'GET',
//       url:'http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC',
//       dataType: 'json',
//       success: onSuccess,
//       limit: integer(int25)
//     });
//   });
//  });
//
//  function onSuccess(dataFromAPI){
//    console.log(dataFromAPI)
//  }
// });
$.ajax({

	// What kind of request
	method: "GET",

	// The URL for the request
	url: "http://api.api.com/search",

	// The data to send aka query parameters
	data: $("form").serialize(),

	// Code to run if the request succeeds;
	// the response is passed to the function
	success: onSuccess,

	// Code to run if the request fails; the raw request and
	// status codes are passed to the function
	error: onError
});

function onSuccess(json) {
	$("div").append("<h1>"+json.title+"</h1>");
}

function onError(xhr, status, errorThrown) {
	alert("Sorry, there was a problem!");
	console.log("Error: " + errorThrown);
	console.log("Status: " + status);
	console.dir(xhr);
};
