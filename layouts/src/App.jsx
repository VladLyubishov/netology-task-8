import Store from './components/Store'
import {products} from './products'

import './App.css'
function App() {
  return (
    <Store products={products}/>
  )
}
export default App
