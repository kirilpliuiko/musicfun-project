import { useState, useEffect } from "react";
import { getTrack, type GetTrackDetailsOutputData } from "../dal/api";

export function useTrackDetail(trackId: string | null) {
    const [trackDetails, setTrackDetails] = useState<GetTrackDetailsOutputData | null>(null)

    useEffect(() => {
        if (!trackId) {
            setTrackDetails(null)
            return;
        }

        getTrack(trackId)
            .then(json => setTrackDetails(json.data))
    }, [trackId])

    return {
        trackDetails
    }
}
