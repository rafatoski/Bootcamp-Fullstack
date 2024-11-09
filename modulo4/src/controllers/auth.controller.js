import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import { createAccessToken } from '../libs/jwt.js';

// Controlador para registrar un nuevo usuario
export const register = async (req, res) => {
    const { email, password, username } = req.body; // Obtiene datos del cuerpo de la solicitud

    try {
        // Hash del password para mayor seguridad
        const passwordHash = await bcrypt.hash(password, 10);
        const newUser = new User({
            username,
            email,
            password: passwordHash,
        });

        // Guarda el nuevo usuario en la base de datos
        const userSaved = await newUser.save();
        // Crea un token de acceso para el usuario recién registrado
        const token = await createAccessToken({ id: userSaved._id });

        // Establece una cookie con el token, con opciones de seguridad
        res.cookie('token', token, {
            httpOnly: true, // Hace que la cookie solo sea accesible por el servidor
            secure: process.env.NODE_ENV === 'production', // Solo se envía a través de HTTPS en producción
            sameSite: 'strict', // Evita el acceso de cookies entre sitios
        });

        // Responde con información del usuario registrado
        res.json({
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email,
            createdAt: userSaved.createdAt,
            updatedAt: userSaved.updatedAt,
        });

    } catch (error) {
        // Manejo de errores
        res.status(500).json({ message: error.message });
    }
};

// Controlador para iniciar sesión
export const login = async (req, res) => {
    const { email, password } = req.body; // Obtiene datos del cuerpo de la solicitud

    try {
        // Busca al usuario en la base de datos
        const userFound = await User.findOne({ email });
        if (!userFound) return res.status(400).json({ message: "User not found" });

        // Compara la contraseña proporcionada con la almacenada
        const isMatch = await bcrypt.compare(password, userFound.password);
        if (!isMatch) return res.status(400).json({ message: "Incorrect Password" });

        // Crea un token de acceso para el usuario
        const token = await createAccessToken({ id: userFound._id });

        // Establece una cookie con el token, con opciones de seguridad
        res.cookie('token', token, {
            httpOnly: true, // Hace que la cookie solo sea accesible por el servidor
            secure: process.env.NODE_ENV === 'production', // Solo se envía a través de HTTPS en producción
            sameSite: 'strict', // Evita el acceso de cookies entre sitios
        });

        // Responde con información del usuario que ha iniciado sesión
        res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
            createdAt: userFound.createdAt,
            updatedAt: userFound.updatedAt,
        });

    } catch (error) {
        // Manejo de errores
        res.status(500).json({ message: error.message });
    }
};

// Controlador para cerrar sesión
export const logout = (req, res) => {
    // Borra la cookie de token
    res.cookie('token', "", {
        expires: new Date(0) // Establece la fecha de expiración en el pasado
    });
    return res.sendStatus(200); // Responde con estado 200 OK
};

// Controlador para obtener el perfil del usuario
export const profile = async (req, res) => {
    const userFound = await User.findById(req.user.id)
    if (!userFound) return res.status(400).json({ message: "User not found" });

    return res.json({
        id: userFound._id,
        username: userFound.username,
        email: userFound.email,
        createdAt: userFound.createdAt,
        updatedAt: userFound.updatedAt,
    })

    res.send('Profile'); // Responde con un mensaje simple por ahora
};
