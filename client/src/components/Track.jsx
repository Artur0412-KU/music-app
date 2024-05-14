import React from 'react'

export default function Track({track}) {
  return (
    <div className='track-container'>
       <img src={track.albumUrl} style={{height: '64px', width: '64px', cursor: 'pointer'}}/>
       <div style={{marginLeft: '1rem'}}>
          <div>{track.title}</div>
          <div style={{color: 'gray'}}>{track.artist}</div>
       </div>
    </div>
  )
}
