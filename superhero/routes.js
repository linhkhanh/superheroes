const { firstPage, indexPage, showPage } = require('./controller');

module.exports = (app) => {
    app.get('/', firstPage);
    app.get('/superheroes', indexPage);
    app.get('/superheroes/:index', showPage)
}