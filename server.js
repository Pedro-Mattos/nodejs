const app = require('./src/config/custom-express')

//criaçao do server
app.listen(3000, function(){
    console.log('server rodando');
})

//rotas
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

app.get('/livros', function(req , resp){
    resp.send(
        `
            <html>
                <head>
                    <meta charset="utf-8">
                </head>
                <body>
                    <h1> Listagem de Livros </h1>
                </body> 
            </html>
        `
    );
});





// const http = require('http');

// const servidor = http.createServer(function (req, resp) {
//     resp.end(`
//             <html>
//                 <head>
//                     <meta charset="utf-8">
//                 </head>
//                 <body>
//                     <h1> Casa do Código </h1>
//                 </body> 
//             </html>
//             `);
// })

// servidor.listen(3000);

//npm = node package manager , gerenciador de pacotes do node. ASsim como o git init se colocar npm init para que sua aplicaçao vire uma apliacção node

//express é um framework do node, para ser instalado apos chamar o npm, npm install express@"versao" ou npm install express para ele baixar a versao mais atual do express. npm install express --save-exact diz que é uma dependencia exata e que deve ser salva .