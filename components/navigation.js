import React, { Component } from 'react'
import Link from 'nextein/link'

class Navigation extends Component {

  toggleMenu () {
    const burger = document.querySelector('.navbar-burger');
    const menu = document.querySelector('.navbar-menu');
    burger.classList.toggle('is-active');
    menu.classList.toggle('is-active');
  };

  render () {
    return (
      <div className="hero-head">
        <div className="container">
          <nav className="navbar is-transparent">
            <div className="navbar-brand">
              <Link href="/">
                <a className="navbar-item">
                  <img src={'/static/lavaldi-icon.png'} alt="La Valdi" width="25" height="25"/>
                </a>
              </Link>
        
              <div className="navbar-burger burger" onClick={this.toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
        
            <div id="navMenuTransparentExample" className="navbar-menu">
              <div className="navbar-end">
                {/*<Link href="/writings">
                  <a className="nav-item is-tab">
                    Writings
                  </a>
                </Link>*/}
                <Link href="/jesusfreak">
                  <a className="nav-item is-tab">
                    <span style={styles.emoji}>🙌</span> Jesus Freak
                  </a>
                </Link>
                <Link href="/code">
                  <a className="nav-item is-tab">
                  <span style={styles.emoji}>💻</span> Front End
                  </a>
                </Link>
                <span className="nav-item">
                  <a className="button" href="mailto:claumavaldivieso@gmail.com">Contact me</a>
                </span>
              </div>
            </div>
          </nav>
        </div>
      </div>
    )
  }
}

export default Navigation;

const styles = {
  emoji: {
    marginRight: "0.5em",
    marginTop: "2px"
  }
};

/*
<div className="hero-head">
      <div className="container">
        <nav className="navbar has-shadow">
          <div className="container">
            <div className="nav-left">
              <Link href="/">
                <a className="nav-item" title="La Valdi">
                  <img src={'../static/lavaldi-icon.png'} alt="La Valdi" />
                </a>
              </Link>
            </div>
            <span className="nav-toggle">
              <span></span>
              <span></span>
              <span></span>
            </span>
            <div className="nav-right nav-menu">
              <Link href="/jesus-freak">
                <a className="nav-item is-tab">
                  <span className="bd-emoji">🙌</span> Jesus Freak
                </a>
              </Link>
              <Link href="/code">
                <a className="nav-item is-tab">
                <span className="bd-emoji">💻</span> Code
                </a>
              </Link>
              <span className="nav-item">
                <a className="button" href="mailto:claumavaldivieso@gmail.com">Contact me</a>
              </span>
            </div>
          </div>
        </nav>
      </div>
    </div>
    */