const {validationResult} = require('express-validator')

module.exports= {
    register: (req,res) => {
        return res.render('register')
    },

    save: (req,res) => {
        let errors = validationResult(req);
        if (errors.isEmpty) {
            let usuario= {
                nombre: req.body.nombre,
                color: req.body.color,
                email: req.body.email,
                edad: req.body.edad ? req.body.edad : ""
            }
            req.session.usuario= usuario
            res.redirect('register')
        }else{
            res.render('register',{
                errors: errors.mapped(),
                old: req.body
            })

        }

        
    }
}