import React, { useCallback, useEffect, useRef } from 'react'
import { Link } from 'gatsby'
import lavaldiIcon from '../../content/images/lavaldi-icon.png'

export default function Nav() {
  const darkModeButton = useRef()

  const turnDark = useCallback(() => {
    const head = document.getElementsByTagName('head')[0]
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.id = 'dark-mode'
    link.href = '../dark.css'

    head.appendChild(link)
  }, [])

  const turnClear = useCallback(() => {
    const link = document.querySelectorAll('#dark-mode')

    if (link) {
      link.forEach((el) => el.remove())
      darkModeButton.current.textContent = '🌙'
    }
  }, [])

  const darkToggle = useCallback((event) => {
    const persistedColorPreference = window.localStorage.getItem('theme')
    const hasPersistedPreference = typeof persistedColorPreference === 'string'
    if (hasPersistedPreference) return

    const hasMediaQueryPreference = typeof event.matches === 'boolean'
    if (hasMediaQueryPreference) {
      event.matches ? turnDark() : turnClear()
    }
  }, [])

  useEffect(() => {
    const media =
      window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)')
    media.addListener(darkToggle)

    return () => {
      media.removeListener(darkToggle)
    }
  }, [])

  return (
    <nav className="navbar">
      <div className="container">
        <div className="flex">
          <div>
            <Link to="/" className="brand">
              <span className="emoji">
                <img src={lavaldiIcon} height="30" width="30" alt="La Valdi" />
              </span>{' '}
              <span className="name">Claudia Valdivieso</span>
            </Link>
          </div>
          <div className="flex">
            <Link to="/me">About</Link>
            <Link to="/code">Code</Link>
            <Link to="/jesus-freak">Jesus Freak</Link>
            <button
              ref={darkModeButton}
              id="dark-mode-button"
              onClick={(event) => {
                const theme =
                  typeof window !== 'undefined' && localStorage.getItem('theme')

                if (theme === 'dark') {
                  localStorage.removeItem('theme')
                  turnClear()
                } else {
                  if (typeof window !== 'undefined') {
                    localStorage.setItem('theme', 'dark')
                    darkModeButton.current.textContent = '☀️'
                  }
                  turnDark()
                }
              }}
            >
              {typeof window !== 'undefined' &&
              localStorage.getItem('theme') === 'dark'
                ? '☀️'
                : '🌙'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
