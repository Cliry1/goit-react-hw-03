import css from "./Feedback.module.css"

export default function Feedback({clicks,total,positive}) {


  return (
  <>
    <p>Good: {clicks.good}</p>
    <p>Neutral: {clicks.neutral}</p>
    <p>Bad: {clicks.bad}</p>
    <p>Total: {total}</p>
    <p>Positive: {positive}%</p>  
  </>
  )
}

