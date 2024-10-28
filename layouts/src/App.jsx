import Store from './components/Store'
import {products} from './products'

import './App.css'
function App() {
  return (
    <Store props={products}/>
  )
}
export default App
