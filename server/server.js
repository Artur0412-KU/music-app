const express = require('express');
const SpotifyWebApi = require("spotify-web-api-node");

const app = express();

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
    }).catch(() => {
        res.sendStatus(400);
    })
})