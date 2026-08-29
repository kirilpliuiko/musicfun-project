import { useEffect, useState } from "react"

type Track = {
  id: string
  attributes: {
    title: string
    lyrics?: string
    attachments: {
      url: string
    }[]
  }
}

export function App() {
  const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null)
  const [selectedTrack, setSelectedTrack] = useState<Track | null>(null)
  const [tracks, setTracks] = useState<Track[] | null>(null)

  useEffect(() => {
    console.log('effect')
    fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
      headers: {
        'api-key': '2d363c52-52e1-448a-92ab-4dcfcec190e7'
      }
    }).then(res => res.json())
      .then(json => setTracks(json.data))
  }, [])

  useEffect(() => {
    if (!selectedTrackId) {
      return;
    }

    fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' + selectedTrackId, {
      headers: {
        'api-key': '2d363c52-52e1-448a-92ab-4dcfcec190e7'
      }
    }).then(res => res.json())
      .then(json => setSelectedTrack(json.data))

  }, [selectedTrackId])

  if (tracks === null) {
    return <div>
      <h1>Musicfun</h1>
      <span>loading...</span>
    </div>
  }

  if (tracks.length === 0) {
    return <div>
      <h1>Musicfun</h1>
      <span>no tracks</span>
    </div>
  }

  return (
    <div>
      <h1>Musicfun</h1>
      <button onClick={() => {
        setSelectedTrackId(null)
        setSelectedTrack(null)
      }}> reset selection
      </button>
      <div style={{
        display: "flex",
        gap: "10px",
      }}>
        <ul>
          {
            tracks.map((track) => {
              return (
                <li key={track.id} style={{
                  border: track.id === selectedTrackId ? '1px solid orange' : 'none'
                }}>
                  <div onClick={() => {
                    setSelectedTrackId(track.id)
                    setSelectedTrack(track)
                  }}>
                    {track.attributes.title}
                  </div>
                  <audio controls src={track.attributes.attachments[0].url}></audio>
                </li>
              )
            })
          }
        </ul>
        <div>
          <h2>Details</h2>
          {!selectedTrack && !selectedTrackId && 'Track is not selected'}
          {!selectedTrack && selectedTrackId && 'Loading...'}
          {!selectedTrack && selectedTrackId !== selectedTrackId && 'Loading...'}
          {selectedTrack && <div>
            <h3>{selectedTrack.attributes.title}</h3>
            <h4>Lyrics</h4>
            <p>
              {selectedTrack.attributes.lyrics ?? 'no lyrics'}
            </p>
          </div>
          }
        </div>
      </div>
    </div>
  )
}

export default App