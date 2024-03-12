# Google Apps Script: Send Response on Access Request

This Google Apps Script automates the process of sending a response email to access requests (for file editing in docs/slides/sheets) received in Gmail. It specifically targets unread email threads from a specific sender (`drive-shares-dm-noreply@google.com`) with a subject line indicating a request for access to a presentation (`Share request for`). Even though, this script was created to auto-respond to specific emails, it can be modified for any email criteria.

## The Problem

You have a public online Google document, presentation or a sheet which people can copy, but some people are lazy to click around the interface, they just simply request edit access. The first thought, I had was to setup an out of office auto-reply, however, this did not work. The issue is that the emails asking for access come from `drive-shares-dm-noreply@google.com`, so the auto-reply goes to that black hole address, never reaching the actual requestee. The recipient email is stored in the reply-to field which is being ignored by the out of office reply. Hence my solution below.

## Features

- Automatically searches for unread email threads matching specific criteria.
- Sends a predefined response email to access requests for presentations.
- Optionally marks the original access request email as read.
- Customizable response message and sender name.

## Installation and Setup

1. **Open Google Apps Script**: Visit [Google Apps Script](https://script.google.com/) and create a new script file.
2. **Copy and Paste**: Copy the contents of the provided script file (`sendResponseOnAccessRequest.gs`) and paste it into your Google Apps Script editor.
3. **Configure Variables**: Update the script variables as needed, including the sender name, response message, and any specific criteria for identifying access request emails.
4. **Save and Run**: Save your script and manually run it to test functionality. Ensure it performs as expected before proceeding.
5. **Set up Trigger**: In the Google Apps Script editor, go to the "Triggers" menu and set up a time-based trigger to run the script at your desired intervals (e.g., every hour).

## Usage

Once the script is set up and the trigger is activated, it will automatically run at the specified intervals. It will search for unread email threads matching the specified criteria and send a predefined response email to access requests for presentations. You can monitor script execution and view logs in the Google Apps Script editor.

## Customization

- Modify the `responseMessage` variable to customize the content of the response email.
- Adjust the `senderName` variable to specify the sender name for the response email.
- If you want to auto-respond to other emails, just modify the `GmailApp.search` function and thenthe subsequent `if (message.getFrom().indexOf("drive-shares-dm-noreply@google.com") !== -1 && message.getSubject().indexOf("Share request for") !== -1)` 

## End Notes

A path to automation, is a road to freedom.

If you found this guide useful, why not let it be known by [sending me a few sats](https://360swim.com/ln-donate-github) or via LN address⚡swmtr@360swim.com .
<br />
<img src="https://360swim.com/user/themes/swimquark/images/ln_git.png" width="400" />
 
Finally, if you are into swimming, checkout some [swimming tips](https://360swim.com/tips).
