if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;
const methodOverride = require('method-override');
const flash = require('connect-flash');
const session = require('express-session');
const userRoute = require('./routes/user')
const mainRoute = require('./routes/notes')
// Mongoose
mongoose.connect(process.env.DATABASE_URL).
    then(() => {
        console.log('MONGO CONNECTION OPEN !!!!')
    }).catch(err => {
        console.log('OHH NO MONGO CONNECTION  ERROR!!!')
        console.log(err)
    });


//session 
const sessionConfig = {
    secret: 'thisshouldbeabettersecrect',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}

//Set
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Use
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session(sessionConfig));
app.use(flash());

// Flash error middleware
app.use((req, res, next) => {
    res.locals.usernameError = req.flash('usernameError');
    res.locals.successfullyAccount = req.flash('successfullyAccount');
    res.locals.usernameOrPassword = req.flash('usernameOrPassword');
    res.locals.logout = req.flash('logout');
    next();
})



//Routes
app.use('/', userRoute);
app.use('/all-note', mainRoute);











app.use('*', (req, res) => {
    res.send('NOT FOUND')
})


// app.use((err, req, res, next) => {
//     res.send('Error')
// })






















app.listen(port, () => {
    console.log('on port 5000!!!');
})