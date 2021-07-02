if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const app = express()
const port = 3000
const bcrypt  = require('bcrypt')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')


const users = [];

const initializePassport = require('./passport.config')

initializePassport(
    passport, 
    name => users.find(user => user.name === name),
    id => users.find(user => user.id === id)
)
 

app.use(express.urlencoded({extended: false}))
app.use(flash())
app.use(session({
    secret: process.env.SESSESION_SECRET,
    resave: false,
    saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())
// app.use(methodOverride('_method'))

var sqlite3 = require('sqlite3').verbose();

async function init() {
    const db = new sqlite3.Database(__dirname + '/dbsushi');
    db.run(`CREATE TABLE IF NOT EXISTS admin (login VCHAR(10), password VCHAR(32))`, [], () => {
        db.get(`SELECT COUNT(*) AS records_count FROM admin`, (err, res) => {
            console.log(`There are ${res.records_count} records in admin database`);
        
            if (res.records_count === 0) {
                db.run('INSERT INTO admin (login, password) VALUES (\'admin\', \'admin\')');
            }
        });
    
        db.run(`CREATE TABLE IF NOT EXISTS cms (id VCHAR(15), content VCHAR(1000))`, [], () => {
            db.get(`SELECT COUNT(*) AS records_count FROM cms`, (err, res) => {
                console.log(`There are ${res.records_count} records in cms database`);
            });
        
            db.close();
        });
    });
}

init();

app.use(express.static('build'))

app.get('/', (req, res) => {
    res.sendFile(__dirname+"/build/index.html", {name: req.user.name})
})

app.get('/login', (req, res) => {
    res.sendFile(__dirname+"/build/login.html")
})

app.post('/login', passport.authenticate('local',{
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}))

app.get('/register', (req, res) => {
    res.sendFile(__dirname+"/build/register.html")
})

app.post('/register', async (req, res) => {
try {
    console.log(req.body);
    const hashPassword = await bcrypt.hash(req.body.password, 10)
    users.push({
        id: Date.now().toString(),
        name: req.body.name,
        password: hashPassword
    })
    res.redirect('/login')
} catch  {
    res.redirect('/register')
}
console.log(users)
})


function check(req, res, next) {
if(req.isAuthenticated()){
return next()
}
}

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
