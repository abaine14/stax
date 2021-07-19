# stax
Hello there, I hope you take a liking to my app!
It is written primaryly with a hybrid of TS, JS, Pure JS, HTML, and CSS in Angular with FontAwesome Icons & Angular Material imported scripts.
I took the liberty of hosting the application on a static AWS S3 Bucket for you
- url: http://staxapp123.s3-website-us-east-1.amazonaws.com/

When the app is loaded it runs an initial GET request for the items 
in the catalog using an XMLHttpRequest along side the Auth Bearer Token.
That returned the meeseeks and Meeseeks Box items."Happy about the Rick & Morty Reference" <br/>
How it works:
Run a GET and use the response to create div elements after looping through the JSON array.
Afterwards utilizing the for loop to create as many div/ destructured table elements as were
needed from the items. 

The search is an array of the items that fill the input field, but does not alter the DOM

The Add New button and Create an Invoice Link in the hamburger menu (top left corner) gives the user the option to 
create an new invoice in a modal or using a full page. 
Create Invoice Modal / Page Features
- Validate individual fields : if statements
- Give information on the criteria missing: innerHTML
- Give alerts for both missing information and if it was submitted: alert()
- Post grabs the Demo Item Invoice data and sends it to the homepage: form submission

Once the form is completed the user can refresh the request and see the addtional values populated
in the bottom area titled Current Invoices.

App is mobile-friendly with horizontal scrolling (Ctrl + Shift + I and press the phone icon for mobile view on desktop)
of the tables as well and min-widths and min-heights predetermined.
Design was inspired by the stax color scheme
- linear-gradient background-color 
- justified-content OCD is real 
- logo utilized from your cloudfront CDNdistribution

Bulk of the code is in components/add & components/homepage

If you have any questions don't hesitate to ask!
email: abaine16@gmail.com; cell phone: (561)-523-1992




