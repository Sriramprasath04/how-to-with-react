/* eslint-disable react/prop-types */
import './App.css'
import Accordian from './Accordian'

function App({data}) {
  return (
      <div className='app'>
        <h2>FAQs</h2> 
        <div className='faq-container'>
            {
              data.map((faq)=>(
                <Accordian key={faq.id} question={faq.question} answer={faq.answer}/>
              ))
            }
        </div> 
      </div>
  )
}

export default App;
