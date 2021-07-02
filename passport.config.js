const localStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');


function initialize(passport, getUserByName, getUserById){

    const authenticateUser = async (name, password, done) => {
        const user = getUserByName(name)

        if (user == null) {
            return done(null, false, {message: "pole jest puste"})
        }

        try {
            if (await bcrypt.compare(password, user.password)) {
                return done(null, user)
            } else{
            return done(null, false, {message: "pole jest puste"})
            }
        } catch (error) {
            return done(error)
        }
    }
    passport.use(new localStrategy({usernameField: 'name'}, authenticateUser))
    passport.serializeUser((user, done) => (done(null, user.id)))
    passport.deserializeUser((id, done) => {
        return done(null, getUserById(id))
    })
}

module.exports = initialize