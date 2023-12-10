import styled from "styled-components";

const HeaderWrapper=styled.div`
    .headerDiv{
        display:flex;
        margin:0.3rem 0.3rem 0.3rem;
        margin-bottom:1rem;
        justify-content:space-between;
        height:fit-content;
        padding:0.3rem;
        box-shadow:1rem 0.5rem #EBEDEF;
    }

    .leftPanel, .searchBar, .rightPanel{
        height:fit-content;
        display:flex;

    }

    img,.input, button{
        height:1.5rem;
        padding:0.5rem;
    
    }
    
    .hamburger{
        width:2rem;
        padding-right:1rem;
        cursor:pointer;
    }

    .youtubeLogo{
        width:7rem;
    }

    .searchButton{
        height:2.7rem;
        border-radius:0rem 2rem 2rem 0rem;
        cursor:pointer;
    }

    .userLogin{
        height:1.5rem;
        padding-right:2rem;
    }

    .searchField{
        width:25rem;
        border-radius:2rem 0rem 0rem 2rem;
    }



    
`
export default HeaderWrapper;