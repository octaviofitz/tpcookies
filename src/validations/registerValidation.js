const {body, check} = require('express-validator')

module.exports= [
    check("nombre").notEmpty().withMessage('Debe ingresar un nombre'),
    check("color").notEmpty().withMessage('Debe seleccionar un color'),
    check("email").notEmpty().withMessage('Debe ingresar un nombre').bail().isEmail().withMessage('Ingrese un email válido'),
    check("nombre").isInt().withMessage('Debe ingresar una edad') /* isint numero entero */
]