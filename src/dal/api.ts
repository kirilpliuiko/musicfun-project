export type GetTrackDetailsOutputData = {
    id: string,
    attributes: {
        title: string,
        lyrics: string | null
    }
}

type GetTrackDetailOutput = {
    data: GetTrackDetailsOutputData
}

export const getTrack = (trackId: string) => {
    const promise: Promise<GetTrackDetailOutput> = fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' + trackId, {
        headers: {
            //'api-key': '2d363c52-52e1-448a-92ab-4dcfcec190e7'
        }
    }).then(res => res.json())

    return promise
}

type AttachmentDto = {
    url: string
}

type TrackListItemOutputAttributes = {
    title: string
    attachments: Array<AttachmentDto>
}

export type TrackListItemOutput = {
    id: string,
    attributes: TrackListItemOutputAttributes
}

type GetTrackListOutput = {
    data: Array<TrackListItemOutput>
}

export const getTracks = () => {
    const promise: Promise<GetTrackListOutput> = fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
        headers: {
            //'api-key': '2d363c52-52e1-448a-92ab-4dcfcec190e7'
        }
    }).then(res => res.json())

    return promise
}