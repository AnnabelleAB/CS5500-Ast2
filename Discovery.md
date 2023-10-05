## Description

Discovery: When a team undertakes a new task the first step in the process is often called Discovery. The outcome of the discovery stage is a high-level plan of how to solve the problem. In this particular exercise we want you to produce a document that outlines how your team is going to address tackling the three sub-projects. This document should be your plan of action. Your discovery/plan-of action document will be reviewed by your scrum master. This is mandatory and highly useful.

## Timeline Created on 09.28
<table>
    <theader>
        <tr>
            <th>
            Date
            </th>
            <th>
            Task
            </th>
            <th>
            Description
            </th>
        </tr>
    </theader>
<tr>
    <td>
    09.28 - 10.04
    </td>
    <td>
    Discovery report
    </td>
    <td>
    Have the first meeting on 09.28, discuss about the timeline, and make a preliminary division of labor. Write Discovery file and discuss it on next meeting
    </td>

</tr>
<tr>
    <td>
    10.05 - 10.11
    </td>
    <td>
    Part0, Part1, Part2, Part3
    </td>
    <td>
    Have the second meeting on 10.05, Confirm the initial code. Finalize the Discovery report. Assign each part to each person. Start working on coding part
    </td>
</tr>
<tr>
    <td>
    10.12 - 10.18 
    </td>
    <td>
   Coding and Review
    </td>
    <td>
    Working on coding and have the third meeting on 10.16, do code review and start workinig on PostMortem. Modify the details before 10.18, have the lasting meeting, finalize all tasks and submit
    </td>
</tr>

</table>


## How our team is going to address tackling the three sub-projects ( plan of out action.)

### Part1

### Part2
Goals:
1. Based on the images provided and the assignment's requirements, provide a front-end update with new functionality on spreadsheet keypad.
2. Update FormulaEvaluator.ts to incorporate new functionality as detailed in the assignment.
3. Ensure comprehensive testing – both unit tests and human testing.
4. Create documentation outlining team contributions and a post-mortem evaluation.

Tasks & Strategies:
1. Functionalities Needing Front-end Updates:
Extended mathematical functions (e.g., sin, cos, tan, and their inverses)
Additional spreadsheet-like functionalities
Enhanced button designs for clarity and ease of use.
Responsibility: [Yiyi Wang, Weiyi Gao]

2. Update FormulaEvaluator.ts:
Review Current Code: Understand existing functionality and identify areas for enhancement.
Implement New Functions: Add new mathematical and spreadsheet functions. Required new functions include:
    -negative sign
    -square
    -cube
    -multiplicative inverse (1/x)
    -square root
    -cube root
    -sin
    -cos
    -tan
    -rand
    -inverse sin
    -inverse cos
    -inverse tan
Add New Error Messages: Figure out the error messages related to the new math functions and add them to global definitions.
Integrate with UI: Ensure that the updated evaluator works with the redesigned front-end.
Responsibility: [Yiyi Wang, Weiyi Gao]

3. Testing:
Unit Testing: Write unit tests for all new functions in FormulaEvaluator.ts.
Human Testing: Conduct user testing sessions with a few junior high students to get feedback on usability and functionality.
Responsibility: [Yiyi Wang, Weiyi Gao]

4. Documentation:
Update corresponding document with a detailed record.

5. Feedback Loop: 
Ensure continuous feedback during the design and development phases.

6. Allocate Buffer Time: 
Keep a few days reserved towards the end for unforeseen challenges.

### Part3
In Part 3 of our project, we are tasked with enhancing the user experience by developing a feature that displays the name of the user editing a cell in real-time, ensuring seamless collaboration and interaction within our shared spreadsheet application.
It involves several steps.
1. Understanding the System: Review SpreadSheetController.ts and understand current data flow.
2. Gap Analysis: Identify missing data needed to show who’s editing.
3. Data Modification: Update backend to send editor's information to frontend.
4. Frontend Update: Adjust frontend to receive and display editor’s info on the cell.
5. Testing: Test new feature for functionality and user experience.
6. Documentation: Document changes and update user instructions.
7. Feedback & Iteration: Collect feedback and refine the feature.

### Part0 
These sub-project aim to document and visualize the codebase's architecture, flows, and components. 
*Codebase Architecture Diagram*  *Database Schema Diagram* *Component Interaction Diagram* *Front-end Flowchart* *Back-end Flowchart* *Sequence Diagrams*
1. Start with an initial meeting to discuss the scope and objectives of creating a codebase architecture diagram.
2. Gather the findings from our retro-engineering efforts, including insights about the system's components, interactions, and data flows.
3. Decide on the type of diagram that best represents the codebase's architecture. Common options include system architecture diagrams, component diagrams, or flowcharts.
4. Begin drafting the architecture diagram based on the collected data. Use visualization tools Lucidchart.
5. Share the initial draft with team members for feedback and suggestions. Ensure that the diagram accurately reflects the codebase's structure and logic.
6. Accompany the diagram with documentation that explains key components, their responsibilities, and how they interact with each other.
