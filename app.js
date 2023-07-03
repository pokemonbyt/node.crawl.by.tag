const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();

app.get('/html', (req,res) => {
    const url = req.query.url;
    const tag = req.query.tag;
    if (url) {
        axios.get(url)
    .then(response => {
            if (tag) {
                const html = response.data;
                const $ = cheerio.load(html);
                const values = [];
    $(tag).each((index, element) => {
      const value = $(element).text();
      values.push(value);
    });
                res.send(values);
        }
        else {
                res.send(response.data);
        }
    }
    )
    .catch(error => {
        console.log(error);
        res.status(500).send('Lỗi fetch data');
    })
    } else {
        res.status(500).send('Url không tồn tại');
    }
});

app.listen(3000, () => {
    console.log('server dang chay o port 3000');
})