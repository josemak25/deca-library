const https = require("https");
const fs = require("fs");
const APP_BASE_URI = "https://www.googleapis.com/books/v1/volumes?";

const fetchBooks = ({ queryParams, searchString }) => {
  const API_ACCESS_KEY = "AIzaSyABkKOOoWAUxKk7r6kSKuqni2afdzVob0A";

  const API_URI = `${APP_BASE_URI}${queryParams}q=${searchString}&key=${API_ACCESS_KEY}`;

  let body = "";

  const request = https.get(API_URI, response => {
    response.setEncoding("utf8");
    console.log(`statusCode: ${response.statusCode}`);

    response.on("data", chunk => {
      body += chunk.toString();
    });

    response.on("end", () => {
      const books = JSON.parse(body);
      fs.writeFile("./books.json", JSON.stringify(books, null, 2), error => {
        if (error) return console.log(error);
        console.log("CREATE BOOKS SUCCESSFULLY");
      });
    });

    response.on("error", error => console.error(error));
  });

  request.end();
};

const request = {
  queryParams: "maxResults=40&orderBy=newest&",
  searchString: "subject:fiction"
};

fetchBooks(request);
