const express = require('express');

const app = express();

// the server listens on this port
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', 'app/views');

// the public dir to be used by all routers
app.use(express.static('app/public/'));
// the page to display once the user visits the root dir
app.use(require('./routers/index.js'));

app.listen(app.get('port'), () => {
    console.log('Server listening on port ' + app.get('port'));
})