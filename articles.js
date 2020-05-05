
const ARTICLES = require("./mock-articles");


module.exports = function(app) {
app.get("/articles", function(request, response){
    response.send(ARTICLES);
});


app.get("/articles/:key", function(request, response){

    //getting the first article of the mock article array module
    response.send(ARTICLES.filter(article => article.key === request.params.key)[0]
    );

});

};
