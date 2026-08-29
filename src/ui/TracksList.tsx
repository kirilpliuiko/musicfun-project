import {TrackItem} from "./TrackItem.tsx"
import {useTracks} from "../bll/useTracks.tsx"
import styles from "./TrackList.module.css"
type Props = {
    selectedTrackId: string | null,
    onTrackSelect: (id: string | null) => void
}

export function TracksList({ selectedTrackId, onTrackSelect }: Props) {
    const {tracks} = useTracks()


    if (tracks === null) {
        return <div>
            <span>loading...</span>
        </div>
    }

    if (tracks.length === 0) {
        return <div>
            <span>no tracks</span>
        </div>
    }

    const handleResetClick = () => {
        onTrackSelect?.(null)
    }

    const handleClick = (trackId: string) => {
        onTrackSelect?.(trackId)
    }

    return <div>
        <button onClick={handleResetClick}>reset</button>
        <hr />
        <ul className={styles.tracks}>
            {
                tracks.map((track) => {

                    return (
                        <TrackItem key={track.id}
                            track={track}
                            isSelected={track.id === selectedTrackId}
                            onSelect={handleClick}
                        />
                    )
                })
            }
        </ul>
    </div>
}
