import React from "react";
import { NavLink } from "react-router-dom"

function NavBar({admin}) {
    return (
        <section>
        <nav>
            <NavLink exact to="/">Home</NavLink>
            <NavLink exact to="/about">About</NavLink>
            <NavLink exact to="/movies">Movies</NavLink>
            <NavLink exact to="/characters">Characters</NavLink>
            <NavLink exact to="/merch">Merch</NavLink>         
        </nav>
        {admin ?  
        <nav>
            <span>ADMIN : 
            <NavLink exact to="/movies/new">Add Movie</NavLink> 
            <NavLink exact to="/characters/new">Add Character</NavLink> 
            <NavLink exact to="/users">Users</NavLink>    
            </span>       
        </nav>
        : null }
        </section>
    );
}

export default NavBar;