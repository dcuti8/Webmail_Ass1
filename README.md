# Webmail_Ass1
Assignment 1of internet programming, is about using jquery and show the json data into html.


a)	(20 marks) Write a function refreshView() which

o	(5 marks) obtains the message list from messages.getMessages(), 

o	(5 marks) clears the table body of table#mlist before adding rows, and

o	(10 marks) displays the message information in table#mlist.

b)	(5 marks) The 2nd column shows the image ‘clip.png’ if there is an attachment for the message. The presence of attachment is indicated by the Boolean attribute ‘attach’.

c)	(10 marks) The 4th column shows the received date / time of the messages. If the received time of a message is within today, show only minute and second. If the received time is before today, but is within the current year, show only the month and day. Otherwise, show the date in dd/mm/yyyy format. 

d)	(10 marks) The last column shows the image ‘trash.png’ when the mouse cursor is inside the table cell. The image is hidden when the mouse cursor moves away.

e)	(10 marks) When the user clicks the image ‘trash.png’, call the method messages.deleteMessage(del_id) with appropriate message id to delete the message. You should then refresh the message list by calling the function refreshView().

f)	(30 marks) Message sorting
o	(10 marks) The user can click the table heading <th> of ‘From’ and ‘Received’ to sort the message list. The images ‘sort.png’ in the two headings are shown or hidden to show which sorting option is chosen.
o	(5 marks) The option ‘sort by received’ arranges the messages in descending order of received date/time. The latest message is the first entry shown in the table.
o	(5 marks) The option ‘sort by from’ arranges the messages by the sender name in ascending order. If a sender has more than 1 message, sort the messages in descending order of received date/time.
o	(5 marks) The selected sort option is not changed whenever the message list is refreshed.
o	(5 marks) The option ‘sort by received’ is selected after page load.

g)	(5 marks) When the user clicks the button button#refresh, call the function refreshView().

h)	(5 marks) At the end of page load, call the function refreshView() to populate the table.

i)	(5 marks) At the end of page load, create a timer that calls the function refreshView() every 20 seconds.
