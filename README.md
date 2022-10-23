# hardiness-zone-finder

##Find your plant hardiness zone
This is an app to find your hardiness zone for growing outdoor produce based on your zip code. There will be a prompt to enter and submit your zip code and the zone you live in will appear.  Once your zone is located, there will be a list of produce that are common for gardening. The individual vegetables can be selected and de-selected, that will prompt a year-long schedule in the form of a bar chart for when the produce should be planted outdoors based on your zone. The schedule will include when to start the seed indoors, when to transplant or start the seed outdoors, when they can be harvested and first and last frost dates for that zone. The plant schedules will be written into a local database that I will create and will interact with the user interface with nodeJS/Express once produce is selected or de-selected. It will be built with Javascript, CSS, and HTML and a public API will be used to locate the hardiness zone based on zip code.

##Features:
  1.	Use a regular expression to validate user input and either prevent the invalid input or inform the user about it. If an invalid zip code is entered, a prompt will appear to submit a valid zip code. 
  
  2.	Visualize data in a user-friendly way with a yearly schedule made with a bar chart based on plants selected according to hardiness zone. The chart will show first and last frost dates, when to start the seed indoors, when to transplant or start the seed outdoors and when the produce can be harvested.
  
  3.	Retrieve data from a third-party API and use it to display something within your app. A public API will be used to find the correct hardiness zone based on zip code.
