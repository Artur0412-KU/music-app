import React from 'react'
import Button from '@mui/material/Button';

const auth_url = 'https://accounts.spotify.com/authorize?client_id=3f8212a15c01430a91fff8651fc5dfb6&response_type=code&redirect_uri=http://localhost:5173/&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state'

export default function Login() {
  return (
    <Button variant="contained" href={auth_url}>LogIn with Spotify</Button>
  )
}
