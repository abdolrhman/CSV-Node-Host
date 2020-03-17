# CSV LOAD SEARCH

A simple module to load a csv file and does some filtering
with angular front-end 

## Getting Started

##### Install with `npm`:
- BackEnd
```sh
git clone https://github.com/abdolrhman/CSV-Node-Host.git
cd CSV-Node-Host
npm install
npm start
```
>this will expose two APIs <br>
>one for search by exact word <br>http://localhost:8001?RAM=8GB<br>
>the other is free-txt search http://localhost:8001/freeTxt?RAM=8
- FrontEnd
```shell script
cd CSV-Node-Host/client
npm install
npm run start
```
> go for http://localhost:4200/

##### Install with Docker
- Back
```
docker build -t csv-node-host .
docker images
docker run -p 8001:8001 -d csv-node-host
```

- Front
```shell script
cd CSV-Node-Host/client
docker build -t csv-node-frontend
docker run -p 80:80 csv-node-frontend
```
access the app by this url
```
http://localhost:49165/
```

## Objective
- Create Two APIs
    - one is search by exact word
    - the other is for fuzzy search
- Create a angular front-end 
- Create test for back-end
- Dockerize front and back 
## Demo
![search csv](https://media.giphy.com/media/h5oI9LPF1b7B3drq3N/giphy.gif)

## Folder Structure

- bin 
- client
    - e2e
    - src
    - dist
- modules
    - db
    - transformer
- public
- routes
- test
