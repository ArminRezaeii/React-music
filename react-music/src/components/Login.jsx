import React from 'react'
import Photo from '../assets/5ece4ff9123d6d0004ce5f89 (2).png'
import styled from 'styled-components'
export default function Login() {
    const handelClick = () => {
        const clientId = "1f222bd90e1b40ab8b8131b28938c226"
        const redirectUrl = "http://localhost:5173/";
        const apiUrl = "https://accounts.spotify.com/authorize"
        const scope = [
            "user-read-email",
            "user-read-private",
            "user-read-playback-state",
            "user-modify-playback-state",
            "user-read-currently-playing",
            "user-read-playback-position",
            "user-top-read",
            "user-read-recently-played",
        ]
        window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(
            "%20"
        )}&response_type=token&show_dialog=true`;
    }
    return (
        <Container>
            <img src={Photo} alt='spotify' />
            <button onClick={handelClick}>Connect Spotify</button>

        </Container>
    )
}
const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height:100vh;
width: 100vw;
background-color: #1db954;
gap: 5rem;
overflow: hidden;
img{
height: 20vh;
}
button{
padding: 1rem 5rem;
border-radius: 5rem;
border: none;
background-color: black;
color: #49f585;
font-size:1.4rem;
cursor: pointer;
}
`;
