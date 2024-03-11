import css from "./Options.module.css"

export default function Options({clicks, updateClicks, total, resetList}) {

  return (
   <div className={css.buttonFeedback}> 
   {
      Object.keys(clicks).map(item=>{
        return <button key={item} onClick={()=>updateClicks(item)}>{item}</button>
      })
   }
   {
      total > 0 && <button onClick={resetList}>Reset</button>
   }
   </div>
  )
}

