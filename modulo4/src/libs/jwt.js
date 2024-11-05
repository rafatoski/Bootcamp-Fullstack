import { TOKEN_SECRET } from "../config";

function createAccessToken(payload) {

    jwt.sign(
        payload,
        TOKEN_SECRET,
        {
            expiresIn: "1d",
        },
        (err, token) => {
            if (err) console.log(err);
        }
    );
}