import './assets/styles/app.scss'
import { Provider } from "react-redux"
import store from './store'
import Landing from "./Pages/Landing"
function App() {
  return (
    <Provider store={store()}>
      <Landing />
    </Provider>
  )
}

export default App
