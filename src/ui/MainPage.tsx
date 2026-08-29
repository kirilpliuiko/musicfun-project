import { TracksList } from "./TracksList"
import { TrackDetail } from "./TrackDetail"
import { useTrackSelection } from "../bll/useTrackSelection"

export function MainPage() {

    const { trackId, setTrackId } = useTrackSelection()

    
    const handleTrackSelect = (id: string | null): void => {
        setTrackId(id)
    }

    return <div>
        <div style={{ display: 'flex' }}>
            <h1>Musicfun Player</h1>
            <TracksList 
                selectedTrackId={trackId}
                onTrackSelect={handleTrackSelect}
            />
            <TrackDetail trackId={trackId}/>
        </div>
    </div>
}