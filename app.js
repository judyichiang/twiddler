   
     $(document).ready(function(){
        var $body = $('body');
        $body.html('');
  
        var $header = $('<h1>Twiddler</h1>');
        $header.appendTo($body);

        var index = streams.home.length - 1;
        while(index >= 0){
          var tweet = streams.home[index];
          var $tweet = $('<div></div>');  //jquery div object
          //var $time = $($.now)

          var $break;
          $tweet.html('<span>@' + tweet.user + ': </span>  '+ tweet.message + tweet.created_at);
           
          $tweet.appendTo($body);
          index -= 1;
        }


       var $button = $('<button type ="button">Refresh</button> ');
       $button.appendTo($body);
       $($button).click(function() {
        location.reload();
       });
        
       var $nameClick = $('span')
         // $nameClick.appendTo($body);
         $($nameClick).click(function() {
           $($nameClick).html(tweet.created_at);
         });

          
       });


