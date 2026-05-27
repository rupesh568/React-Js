import Buttons from "./Components/Buttons"
import css from "./App.module.css"
import Display from "./Components/Display"
function App() {
  

  return <div className={`${css.calculator}`}>
    <Display></Display>
    <Buttons></Buttons>
    {/* <div className={`${css["buttons-container"]}`}>
      <button className={`${css.buttons}`}>C</button>
      <button className={`${css.buttons}`}>1</button>
      <button className={`${css.buttons}`}>2</button>
      <button className={`${css.buttons}`}>+</button>
      <button className={`${css.buttons}`}>C</button>
      <button className={`${css.buttons}`}>C</button>
      <button className={`${css.buttons}`}>C</button>
      <button className={`${css.buttons}`}>C</button>
      <button className={`${css.buttons}`}>C</button>
      <button className={`${css.buttons}`}>C</button>
      <button className={`${css.buttons}`}>C</button>
      <button className={`${css.buttons}`}>C</button>
      <button className={`${css.buttons}`}>C</button>
      <button className={`${css.buttons}`}>C</button>
      <button className={`${css.buttons}`}>C</button>
      <button className={`${css.buttons}`}>C</button>
      <button className={`${css.buttons}`}>C</button>

    </div> */}

  </div>
}

export default App
