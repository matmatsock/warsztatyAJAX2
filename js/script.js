// $(document).ready(function() {

// $('#get-data').click(function(){

//    $.get('https://akademia108.pl/api/ajax/get-post.php') 
//    .done(function(data){
//        console.log(data);

//        let pId = $('<p></p>').text(`Post Id:${data.id}`);
//        let pUserId = $('<p></p>').text(`User Id:${data.userId}`);
//        let pTitle = $('<p></p>').text(`Title:${data.title}`);
//        let pBody = $('<p></p>').text(`Body:${data.body}`);
//        let line =$('<hr>');

//        $('body').append(pId);
//        $('body').append(pUserId);
//        $('body').append(pTitle);
//        $('body').append(pBody);
//        $('body').append(line);

       
//    })
//    .fail(function(error){
//        console.error(error);
//    })
// })
// })

$(document).ready(function() {

    $('#get-data').click(function(){
    
       $.getJSON('https://akademia108.pl/api/ajax/get-post.php') 
       .done(function(data){
           console.log(data);
    
           let pId = $('<p></p>').text(`Post Id:${data.id}`);
           let pUserId = $('<p></p>').text(`User Id:${data.userId}`);
           let pTitle = $('<p></p>').text(`Title:${data.title}`);
           let pBody = $('<p></p>').text(`Body:${data.body}`);
           let line =$('<hr>');
    
           $('body').append(pId);
           $('body').append(pUserId);
           $('body').append(pTitle);
           $('body').append(pBody);
           $('body').append(line);
    
           
       })
       .fail(function(error){
           console.error(error);
       })
    })
    })