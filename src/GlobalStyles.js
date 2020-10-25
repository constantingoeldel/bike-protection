import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

* {
    box-sizing: border-box;
  }

html, body {
    min-height: 100vh;
    overflow: auto;
    padding: 0;
    margin: 0;
  }

body {
    font-family: 'Roboto', sans-serif;
    font-size: 112.5%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

.leaflet-container {
  margin: 5%;
  width: 90%;
  height: 80vh;
  border-radius: 30px;
}
`
