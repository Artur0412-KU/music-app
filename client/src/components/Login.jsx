import React from 'react'
import Button from '@mui/material/Button';
import Dashboard from './Dashboard';


const auth_url = 'https://accounts.spotify.com/authorize?client_id=4ed9372bcee846829f24c20f6a4d0f62&response_type=code&redirect_uri=http://localhost:5173/&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state'

const buttonStyle = {
    fontFamily: 'Poppins, sans-serif',
}

export default function Login() {
  return (
    <div className='button-container'>
        <Button variant="contained" href={auth_url} style={buttonStyle}>Log In with Spotify</Button>
    </div>
    
  )
}
