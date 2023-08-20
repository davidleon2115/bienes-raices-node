const formularioLogin = (req, res) => {
    res.render('auth/login', {
        pagina: 'Login'
    });
}

const formularioRegistro = (req, res) => {
    res.render('auth/registro', {
        pagina: 'Crear Cuenta'
    })
}

export {
    formularioLogin,
    formularioRegistro
}