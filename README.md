# hardiness-zone-finder

Find your plant hardiness zone<br>
This is an app to find your hardiness zone for growing outdoor produce based on your zip code. There will be a prompt to enter and submit your zip code and the zone you live in will appear.  Once your zone is located, there will be a list of produce that are common for gardening in the form of a table. The schedule will include when to start the seed indoors, when to transplant or start the seed outdoors, when they can be harvested and companion plants for that specific produce. The plant schedules are written into a local database that I have created. This app is built with Javascript, CSS, and HTML and a public API will be used to locate the hardiness zone based on zip code.<br><br><p>

Features:<br>
  1.	Use a regular expression to validate user input and either prevent the invalid input or inform the user about it. If an invalid zip code is entered, a prompt will appear to show entry was invalid or zip code could not be found. <br><br>
  
  2.	Analyze data that is stored in arrays, objects, sets or maps and display information about it in app using a table. Information on specific produce are objects in an array called produce-data.json and each object has an array of zones with different transplant outdoors date for each zone.<br><br>
  
  3.	Retrieve data from a third-party API and use it to display hardiness zone based on zip code entered by user.<br><br>
  
To run the app:<r>
  - In project terminal run npm install then npm start<br>
  - The server will now be listening on localhost:3000<br>
  - Open localhost:3000 in browser to view the app
  
  
