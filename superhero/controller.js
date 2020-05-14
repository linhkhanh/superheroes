const superheroes = require('./models/heros.js');

const firstPage = (req, res) => {
    res.render('first.ejs')
}
const indexPage = (req, res) => {
    res.render("index.ejs", { superheroes: superheroes})
};

const showPage = (req, res) => {
    res.render('show.ejs', { hero: superheroes[req.params.index] });
}

module.exports = {
    firstPage,
    indexPage,
    showPage
}