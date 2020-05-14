const superheroes = require('./models/heros.js');

const firstPage = (req, res) => {
    res.render('first.ejs')
}
const indexPage = (req, res) => {
    res.render("index.ejs", { superheroes: superheroes})
};

const showPage = (req, res) => {
    let index = req.params.index;
    if(isNaN(index) || index >= superheroes.length ) {
        res.send(`Your input is not valid. It should be larger than 0 and less than ${superheroes.length}`)
    } else {
        res.render('show.ejs', { hero: superheroes[req.params.index] });
    }
    
}

module.exports = {
    firstPage,
    indexPage,
    showPage
}