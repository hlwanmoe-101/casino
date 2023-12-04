import { useLocation } from 'react-router';
import '../App.css';
import Card from '../components/CardComponent';
import Navbar from '../components/NavComponent';

const TopPage=({data})=>{
  
  const location=useLocation();
  let { game, jackpots } = data;

  const newG=data.game.filter((game) => game.categories.includes('top'))
  return (
    <div className="">
      <Navbar data={location.pathname}/>
            <div className="row">
              {
                newG.map((games,index)=>{
                  const jacks=jackpots.filter((jack)=>games.id===jack.game)
                  return(
                      <Card game={games} jacks={jacks} status={true} key={index.toString()}/>
                  )
                })
              }
            </div>
    </div>
  );
}

export default TopPage;
