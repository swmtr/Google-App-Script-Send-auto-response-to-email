function sendResponseOnAccessRequest() {
  // Get unread threads using a search query
  var threads = GmailApp.search("from: 'drive-shares-dm-noreply@google.com' AND is:unread");
    //Logger.log("Number of unread threads: " + threads.length);
  
  // Loop through each thread in the search results
  for (var i = 0; i < threads.length; i++) {
    var messages = threads[i].getMessages();
    
    // Loop through each message in the thread
    for (var j = 0; j < messages.length; j++) {
      var message = messages[j];

       // Log the subject of each message
      //Logger.log("Subject: " + message.getSubject() + " " + message.getFrom());
      //Logger.log("from: " + message.getFrom());

      // Check if the message is from the specific sender and subject line
      if (message.getFrom().indexOf("drive-shares-dm-noreply@google.com") !== -1 && message.getSubject().indexOf("Share request for") !== -1) {
  
         // Log that a matching message is found
        //Logger.log("Matching message found in thread " + i + ", message " + j);
        // Define the pre-defined message
        var responseMessage = "Hi,\n\n" +
                              "thank you for the request.\n\n" +
                              "Feel free to make a copy of it yourself by doing.....\n\n" +
                              "Have a great day,\n\n" +
                              "your name\n\n";
        
        // Extract the reply-to address (careful, this might not work in all cases)
        var replyTo = message.getReplyTo();
        var senderName = "Your name <youremail@goes.here>"
        //Logger.log("sender: " + senderName);
      

       // Send the response email (replace with your actual email sending function)
      GmailApp.sendEmail(
        replyTo, // recipient
        "RE: " + message.getSubject(), // subject
        responseMessage, // body
        { 
            from: senderName, // Specify custom sender name
            replyTo: replyTo // Specify reply-to address
        } // options
      );      

        // Log that the response email is sent
        Logger.log("Response email sent to: " + replyTo);
        
        // Optionally, mark the original message as read
        message.markRead();

        // Pause for 1 second to separate logs for each thread
        Utilities.sleep(1000); // 1000 milliseconds = 1 second
        
        break; // Exit loops if a matching message is found, no need to check further
      }
    }
  }
}
