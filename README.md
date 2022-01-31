This project was inspired by AirDNA. Unfortunately Turo does not have a public API so we can't get the inside data on investing with Turo like 
we can with AirBnb. 

This project uses fake data that I generated at random and uploaded to a MongoDB collection. An express app that is also hosted on Heroku serves
as the API for this project to get info on a given City, State and optionally Make and Model of a vehicle. 

Check out the project on Heroku https://turo-dna-app.herokuapp.com/ 

To try out locally 
- npm install
- webpack serve --webpack.dev.js
- visit localhost:8080 in your browser!

OR

To run locally with Docker
- npm install 
- docker build -t turo-dna:latest ./
- docker run -p 8080:8080 turo-dna:latest 
- visit localhost:8080 in your browser!
