const express = require('express');
const SpotifyWebApi = require('spotify-web-api-node');

const app = require();

app.post('/login', (res, req) => {
    const code = req.body.code;
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:5173/',
        clientId: '3f8212a15c01430a91fff8651fc5dfb6',
        clientSecret: '145efce9531341818a157a2256783292'
    })

    spotifyApi.authorizationCodeGrant(code).then(data => {
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in
        })
    }).catch(() => {
        res.sendStatus(400);
    })
})