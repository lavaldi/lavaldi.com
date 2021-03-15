function setDarkTheme() {
  const head = document.getElementsByTagName('head')[0]
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.id = 'dark-mode'
  link.href = '../dark.css'
  head.appendChild(link)
}

exports.onInitialClientRender = () => {
  if (typeof window !== 'undefined') {
    const persistedColorPreference = window.localStorage.getItem('theme')
    const hasPersistedPreference = typeof persistedColorPreference === 'string'
    if (hasPersistedPreference && hasPersistedPreference === 'dark') {
      localStorage.setItem('theme', 'dark')
      document.getElementById('dark-mode-button').textContent = '☀️'
      setDarkTheme()
      return
    }

    const matched = window.matchMedia('(prefers-color-scheme: dark)').matches
    const hasMediaQueryPreference = typeof matched === 'boolean'
    if (hasMediaQueryPreference && matched) {
      setDarkTheme()
    }
  }
}
