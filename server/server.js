const express = require('express');
const SpotifyWebApi = require("spotify-web-api-node");
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/refresh', (req, res) => {
    const refreshToken = req.body.refreshToken;
    console.log('hello world')

    if (!refreshToken) {
        return res.status(400).json({ error: 'Refresh token is missing.' });
    }

    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:5173/',
        clientId: '4ed9372bcee846829f24c20f6a4d0f62',
        clientSecret: 'f6d8c3c277694243b8f1c806b8565b63',
        refreshToken
    });

    spotifyApi.refreshAccessToken()
        .then((data) => {
            res.json({
                accessToken: data.body.access_token,
                expiresIn: data.body.expires_in,
            });
        })
        .catch((err) => {
            console.error(err);
            res.sendStatus(400);
        });
});


app.post('/login', (req,res) => {
    const code = req.body.code;
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:5173/',
        clientId: '4ed9372bcee846829f24c20f6a4d0f62',
        clientSecret: 'f6d8c3c277694243b8f1c806b8565b63'
    })

    spotifyApi.authorizationCodeGrant(code)
    .then(data => {
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in,
        })
    }).catch((err) => {
        console.log(err);
        res.sendStatus(400);
    })
})

app.listen(4040)