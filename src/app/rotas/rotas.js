const LivroDao = require('../infra/livroDao');
const db = require('../../config/database')
module.exports = (app) => {
    app.get('/', function(req , resp){
        resp.send(
            `
                <html>
                    <head>
                        <meta charset="utf-8">
                    </head>
                    <body>
                        <h1> Casa do Código </h1>
                    </body> 
                </html>
            `
        );
    });
    
    app.get('/livros', function(req, resp) {

        const livroDao = new LivroDao(db);
        livroDao.lista()
                .then(livros => resp.marko(
                    require('../views/livros/lista/lista.marko'),
                    {
                        livros: livros
                    }
    
                ))
                .catch(erro => console.log(erro));
    
    });
    //rota para exibir pagina de formulário
    app.get('/livros/form', function(req, resp){
        resp.marko(require('../views/livros/form/form.marko'))
    });


    // rota para postar dados rota "post"
    app.post('/livros', function(req, resp) {
        console.log(req.body);
        const livroDao = new LivroDao(db);
        livroDao.adiciona(req.body)
                .then(resp.redirect('/livros')) 
                .catch(erro => console.log(erro));
    });


 
}