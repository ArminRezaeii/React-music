import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useStateProvider } from '../utils/StateProvider'
import axios from 'axios'
import { reducerCases } from '../utils/Constants'
export default function CurrentTrack() {
    const [{ token, currentlyPlaying }, disptach] = useStateProvider()
    useEffect(() => {
        const getCurrnetTrack = async () => {
            const response = await axios.get("https://api.spotify.com/v1/me/player/currently-playing", {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "aplication/json"
                }
            }
            )
            if (response.data !== "") {
                const { item } = response.data
                const currentlyPlaying = {
                    id: item.id,
                    name: item.name,
                    artists: item.artists.map((artists => artists.name)),
                    image: item.album.images[2].url
                }
                disptach({ type: reducerCases.SET_PLAYING, currentlyPlaying })
            }

        }
        getCurrnetTrack()
    }, [token, disptach])
    return (
        <Container>
            {
                currentlyPlaying && (
                    <div className="track">
                        <div className="track__image">
                            <img src={currentlyPlaying.image} alt="currentlyplaying" />
                        </div>
                        <div className="track__info">
                            <h4>{currentlyPlaying.name}</h4>
                            <h6>{currentlyPlaying.artists.join(", ")}</h6>
                        </div>
                    </div>)}
        </Container>
    )
}
const Container = styled.div`
  .track {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .track__info {

    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    h4{
color: white;
    }
h6{
    color: white;
}
    }
`;