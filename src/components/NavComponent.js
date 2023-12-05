import React from "react";
import {Link} from 'react-router-dom';

const Navbar=(props)=>{
    return(
        <nav className="navbar navbar-expand-lg custom-bg sticky-lg-top">
            <nav className="navbar navbar-expand-lg custom-bg sticky-lg-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Casino Royal Hlwan</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className={`nav-link ${props.data==="/" ? 'custom-active' : ''}`} aria-current="page" to="/">Top Games</Link>
                    <Link className={`nav-link ${props.data==="/new" ? 'custom-active' : ''}`} to="/new">New Games</Link>
                    <Link className={`nav-link ${props.data==="/slot" ? 'custom-active' : ''}`} to="/slot">Slots</Link>
                    <Link className={`nav-link ${props.data==="/jackpots" ? 'custom-active' : ''}`} to="/jackpots">Jackpots</Link>
                    <Link className={`nav-link ${props.data==="/live" ? 'custom-active' : ''}`} to="/live">Live</Link>
                    <Link className={`nav-link ${props.data==="/blackjack" ? 'custom-active' : ''}`} to="/blackjack">BlackJet</Link>
                    <Link className={`nav-link ${props.data==="/roulette" ? 'custom-active' : ''}`} to="/roulette">Roulette</Link>
                    <Link className={`nav-link ${props.data==="/table" ? 'custom-active' : ''}`} to="/table">Table</Link>
                    <Link className={`nav-link ${props.data==="/pocker" ? 'custom-active' : ''}`} to="/pocker">Pocker</Link>
                    <Link className={`nav-link ${props.data==="/other" ? 'custom-active' : ''}`} to="/other">Other</Link>
                </div>
                </div>
            </div>
      </nav>
        </nav>
    )
}

export default Navbar