import React, { Component } from 'react'

const defaultState = {
  dark: false,
  notFound: false,
  toggleDark: () => {},
}

const ThemeContext = React.createContext(defaultState)

class ThemeProvider extends Component {
  state = {
    dark: false,
    notFound: false,
  }

  componentDidMount() {
    const systemDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const lsDark = systemDarkMode || JSON.parse(localStorage.getItem('dark'))

    if (lsDark) {
      this.setState({ dark: lsDark })
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', this.handleSwitchSystemDarkMode)
  }

  componentDidUpdate(prevState) {
    const { dark } = this.state

    if (prevState.dark !== dark) {
      localStorage.setItem('dark', JSON.stringify(dark))
    }
  }

  componentWillUnmount() {
    window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', this.handleSwitchSystemDarkMode);
  }

  handleSwitchSystemDarkMode = (event) => {
    this.setState({ dark: event.matches })
  }

  toggleDark = () => {
    this.setState(prevState => ({ dark: !prevState.dark }))
  }

  setNotFound = () => {
    this.setState({ notFound: true })
  }

  setFound = () => {
    this.setState({ notFound: false })
  }

  render() {
    const { children } = this.props
    const { dark, notFound } = this.state

    return (
      <ThemeContext.Provider
        value={{
          dark,
          notFound,
          setFound: this.setFound,
          setNotFound: this.setNotFound,
          toggleDark: this.toggleDark,
        }}
      >
        {children}
      </ThemeContext.Provider>
    )
  }
}

export default ThemeContext

export { ThemeProvider }
