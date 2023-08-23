import { check, validationResult } from 'express-validator'

import Usuario from "../models/Usuario.js";



const formularioLogin = (req, res) => {
    res.render('auth/login', {
        pagina: 'Iniciar Sesión'
    });
}

const formularioRegistro = (req, res) => {
    res.render('auth/registro', {
        pagina: 'Crear Cuenta'
    })
}

const registrar = async (req, res) => {
    //validación
    await check('nombre').notEmpty().withMessage('El nombre es obligatorio').run(req)
    await check('email').isEmail().withMessage('Eso no parece un email').run(req)
    await check('password').isLength({min: 6}).withMessage('la contraseña debe ser de almenos 6 caracteres').run(req)
    await check('repetir_password').equals('password').withMessage('Las contraseñas no coinciden').run(req)
    
    let resultado = validationResult(req)

    //Verificar que el resultado esté vacio
    if(!resultado.isEmpty()){
        //Errores
        return res.render('auth/registro', {
            pagina: 'Crear Cuenta',
            errores: resultado.array()
        })
    }

    const usuario = await Usuario.create(req.body)
    res.json(usuario)
}

const formularioOlvidePassword = (req, res) => {
    res.render('auth/olvidePassword', {
        pagina: 'Olvidé la contraseña'
    })
}

export {
    formularioLogin,
    formularioRegistro,
    registrar,
    formularioOlvidePassword
}