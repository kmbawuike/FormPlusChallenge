import "./App.css"
import { Provider } from "react-redux"
import store from './store'

function App() {
  return (
    <Provider store={store()}>
      <div>
        <p>Hello FormPlus</p>
      </div>
    </Provider>
  )
}

export default App
