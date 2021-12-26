import express from 'express';
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.render('index', {});
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});