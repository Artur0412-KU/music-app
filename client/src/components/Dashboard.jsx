import React, { useEffect, useState } from 'react'
import useAuth from './useAuth'
import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import SpotifyWebApi from 'spotify-web-api-node'
import Track from './Track';
import Player from './Player';

const spotifyApi = new SpotifyWebApi({
  clientId: '4ed9372bcee846829f24c20f6a4d0f62',
})

export default function Dashboard({code}) {
  const accessToken = useAuth(code);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [playingTrack, setPlayingTrack] = useState();

  const chooseTrack = (track) => {
     setPlayingTrack(track);
     setSearch('');
  }

  console.log(searchResults);


  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken)
  }, [accessToken])

  useEffect(() => {
    if (!search) return setSearchResults([]);
    if (!accessToken) return;

    let cancel = false;
    spotifyApi.searchTracks(search).then(res => {
      if (cancel) return
     setSearchResults(res.body.tracks.items.map(track => {
        const smallestAlbumImage = track.album.images.reduce(
          (smallest, image) => {
            if(image.height < smallest.height) return image;
            return smallest;
        }, track.album.images[0])

        return {
          artist: track.artists[0].name,
          title: track.name,
          uri: track.uri,
          albumUrl: smallestAlbumImage.url,


        }
      }))
    }) 

    return () => {cancel = true}
  }, [search,accessToken])

  return (
    <div className='main-container'>
      <Input size="large" placeholder="Search Songs/Artists" onChange={e => setSearch(e.target.value)}/>
      <div className='songs-container'>
        {searchResults.map(track => (
          <Track track={track} key={track.uri} chooseTrack={chooseTrack}/>
        ))}
      </div>
      <div>
        <Player accessToken={accessToken} trackUri={playingTrack?.uri}/>
      </div>
    </div>
  )
}
