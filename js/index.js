// Import the library
const server = require('server');

server(
    get('/', () => render('index.html')),
    post('/', ctx => {
      console.log(ctx.data);
      return redirect('/');
    })
  );
