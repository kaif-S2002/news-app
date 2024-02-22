const express = require("express");
const request = require("request");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());
// const apiKey = process.env.REACT_APP_NEWS_API_KEY;

app.get("/news-app", (req, res) => {
  request(
    // `https://newsapi.org/v2/top-headlines?apikey=48cebaa493724b549444eca4ce6159eb&country=in&category=sports`,
    `https://newsdata.io/api/1/news?apikey=pub_38648e99ae473b38531615813d6087c71007d&country=in&size=10&language=en&category=top`,
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.send(body);
      }
    }
  );
  //   res.send("Successfully fetched!");
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));
