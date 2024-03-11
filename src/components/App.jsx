import{useState,useEffect} from "react"
import Options from './options/Options';
import Description from './description/Description';
import Feedback from './feedback/Feedback';
import Notification from './notification/Notification'

export default function App() {
  const [clicks, setClics] = useState(()=>{
    const savedClicks = window.localStorage.getItem("objClicks");
    const parsedItem = JSON.parse(savedClicks);
    if(savedClicks){
      return parsedItem;
    }
    return { good: 0, neutral: 0, bad: 0 };
  })
  useEffect(()=>{
    window.localStorage.setItem("objClicks", JSON.stringify(clicks));
  },[clicks])
  
  const updateFeedback = feedbackType =>{
    setClics({
      ...clicks,
      [feedbackType]:  clicks[feedbackType] + 1
    });
  };
  const resetList=()=>{
    setClics({
       good: 0, neutral: 0, bad: 0 
    });
  }
  const totalFeedback  = clicks.good + clicks.neutral + clicks.bad;
  const positive = Math.round((clicks.good+clicks.neutral)/totalFeedback*100);

  return (
    <>
    <Description/>
    <Options  clicks = {clicks} updateClicks={updateFeedback} total={totalFeedback} resetList={resetList}/>
    {totalFeedback>0 
    ? <Feedback clicks = {clicks} total={totalFeedback} positive={positive}/>
    : <Notification />
    } 
    </>

  )
}