# The Setting
At the end of assignment each and everyone of you have contributed some code to a large body of software.  This next challenge will necessitate you working as a team.  Further more you will have to take an ambiguous project brief and solve problems for which there is more than one answer.  The starting code for this assignment is either the solution to assignment 1 that will be released on October 5, or any of your individual solutions.

# The environment
Each team will set up their own github repo and you will invite the two professors and the two TA to your repo as collaborators.   This way if you need assistance from us we can pull your code and examine it in an office hour.

# The task
The product manager has asked that the following user stories be implemented because the client wants this.  The client wants to be able to use the calculator interface for simple spreadsheets to teach young students about the use of a spreadsheet without the complexity of using excel.  

Your target audience (the people who will use this) are children who are just learning about math and computing and the teacher wants to introduce the concept of the spreadsheet.  

 

## Part 0: Retro-Engineering Design Artefacts! (10 points)
Wow, Bilbo really didn't leave *any* artefacts that give a high-level view of this code base!  Luckily you have been able to retro-engineer (or reverse engineerLinks to an external site.) a lot of them by carefully introducing breakpoints and effectively using debuggers on both the front-end and back-end.  Please capture your findings in diagrams and share them on our shared platform, NUSEng.liveLinks to an external site..  Use them in your stand-up meeting, and feel free to look at/comment on others!
 - [Part0]()link to image or lucichart
 

## Part 1: File Selection (10 points)

Currently the document is selected by adding the document name to the URL on the client side.  The default behaviour is that if a document name is typed with a typo the server will create the new document.  In part 1 we want you to build a file selector page where you request a list of all the documents from the backend server and you display them on a separate page.  

- What is done:   
  Done is when you have a file selector page that you are happy with and it allows an easy way to access the files.  
 

## Part 2: Update the Calculator to include more functionality. (10 points)
This demo impressed the people who are funding the project.  The managers are impressed with how you recovered from Bilbo's sudden departure.  That being said they want you to make this spreadsheet a little more spiffy.  They want a look and feel that is accessible to junior high school students.  They also want additional functionality as detailed below.  
In this part you will re-design the front end calculator, and you will update the FormulaEvaluator.ts to add the following functionality.

- What is done:
 Done is when you have tested your calculator using unit testing and human testing an you are satisfied that it is correct.
 

## Part 3: Show who is editing a cell (10 points)
in order to facilitate the learning experience when students are all working together on a spreadsheet we would like to add a label to any cell that is currently locked and being used.  It would be nice to see the name of the user somehow attached to the cell that someone else is editing.  The current data that the server sends to the client does not include this information.   The information of who is editing cells within a spreadsheet is stored in the data available in the SpreadSheetController.ts class under the name cellsBeingEdited.   In order to solve this problem you will have to understand how the backend is sending data to the front end and you will have to make the required changes so that the data is available in the front end.  Once you do that you can then figure out how to display that data.

- What is done:
Done is when you have demonstrated that you have solved the problem and you are proud of your solution.
 

# The User interface and the new functions
The product manager has told us that the current demo is cool, but the teachers want the full functionality of the iPhone calculator.
The product manager has requested that the keypad have this functionality.  The functions that are needed to be added are the ones circled in red:

 <image.png> image1 need to be upload

and
 <image.png> image2 need to be upload

# The evaluation
This is a team project and the expectation is that you drive the quality of this project.  In order to help you along the way we need to have the following:

- Discovery:  *link to Discovery.md*
- Execution:  Your calc-sheet implementation delivers on the brief that you were handed.   
- Team work documentation:   *link to TeamEvaluation.md*
- Post-Mortem:  *link to PostMortem.md*
