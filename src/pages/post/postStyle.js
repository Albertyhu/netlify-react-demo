import styled from 'styled-components'

export const MainCont = styled.div`
    width: 100%;
    min-height: 120vh; 
`
export const PostTitle = styled.h2`
    font-family: "Raleway";
    font-weight: 500;
    margin: 0;
`

export const Links = styled.div`
    text-decoration: none;
    color: darkblue;
`

export const Layout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space - between;
    min-height: 90vh;
    padding: 20px;
`

export const Header = styled.div`
    background: navy;
    color: lightblue;
    padding: 10px 20px;
`

export const Navbar = styled.div`
    display: flex;
    justify-content: space - around;
`

export const Footer = styled.div`
text-align: center;
`

export const Title = styled.h1`
    margin-bottom: 20px;
`

export const PostCard = styled.div`
    text-align: left;
    font-family: "Raleway";
    border: 1px solid lightblue;
    margin: 20px auto;
    padding: 0 20px;
    border-radius: 10px; 
    width: 90%; 
`

export const ImageContainer = styled.div`
display: flex;
`

export const Thumbnail = styled.img`
    padding: 10px;
    width: 80px; 
    height: auto; 
`
export const Content = styled.div`
    witdh: 90%; 
    margin: 20px auto;
`