import { useLocation } from 'react-router';
import '../App.css';
import Card from '../components/CardComponent';
import Navbar from '../components/NavComponent';

const OtherPage=({data})=> {

  const location=useLocation();
  const {game,jackpots} = data;
  const newG=game.filter((game) => {
    const otherCategories = ['ball', 'virtual','fun'];
    return otherCategories.some((category) => game.categories.includes(category));
     
  })
  return (
    <div className="">
      <Navbar data={location.pathname}/>
            <div className="row">
              {
              
                newG.map((games,index)=>{
                  const jacks=jackpots.filter((jack)=>games.id===jack.game)
                  return(
                      <Card game={games} jacks={jacks} key={index.toString()}/>
                      
                  )
                })
              }
            </div>
        
    </div>
  );
}

export default OtherPage;
