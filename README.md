<h2> Automate JNTUA - Semester Results </h2>
This project can automate your friends/classmates/college student's results within seconds.
<h3> Requirements </h3>
<ul>
  <li> npm + nodeJs </li>
  <li> Puppeteer </li>
  <li> Google Sheets (Everyone will have this) </li>
</ul>

<h3> Setup </h3>
<ol>
  <li> Install npm+nodeJs if u don't have @ https://www.npmjs.com/get-npm </li>
  <li> Install Puppeteer  - <b> npm i puppeteer </b> </li>
  <li> Clone the repository - <b>git clone https://github.com/Sathyamshu2357/Automate_JNTUA_results.git </b> <l/i> 
</ol>

<h3> Execute / Automate Results </h3>
  After cloning ... 
  <ol>
  <li> Open getmarks.js file and change the following lines as per ur requirement </li>
  <ul>
    <li> 8th Line - The URL Link of the JNTUA Results page</li> 
    Eg : "https://jntuaresults.ac.in/view-results-56736237.html"
    <li> 9th Line - Roll numbers should be given in an list format </li>
    Eg : const rolls = ['174G1A0560', 'another roll'] ... all the rolls  should be quoted in quotes and should be separated with a comma 
  </ul>
  <li> Execute the getmarks.js file with the command - <b> node getmarks.js </b></li>
  <li> A new text file named with marks will be created containing all the results of the students. 
  NOTE : If any Student is absent / wrong roll is given ....their rolls are displayed in the command prompt/Terminal 
  <li> Copy the content of marks.txt file. Open a Google Sheets Page and paste the copied content there </li>
  <li> In Google Sheets : Select Tools - Script Editor </li>
  <ul>
    <li> Copy the content in the file named <b>appscript_code</b> and paste it in the Script Editor </li>
    <li> Reload the Google Sheets Page and u will get an extra option named <b>'Optionss'</b> </li>
    <li> Select it and click 'MakeItProper' </li>
    <li> A new sheet will be created with all the marks details of the students </li>
    <li> Format them as per your requirement </li>
    <li> General Format : Select the columns C - to end and right-click -> Resize Column - change it to 28 </li>
  </ul>
  </ol>
  
  
