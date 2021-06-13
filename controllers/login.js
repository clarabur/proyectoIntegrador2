
let loginController = {

    login: (req, res)=>{
        res.render ("login")
    },

    logout: (req,res) => {
        req.session.destroy()
        res.clearCookie ("userId")
        res.redirect ("/")
    }
}

module.exports = loginController



