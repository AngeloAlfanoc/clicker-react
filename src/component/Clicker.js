
import React , {useState, useEffect} from 'react';

import './Clicker.scss'

const Clicker = () => {
  const [clicked, setClicker] = useState(0)
  const [auto, setAuto] = useState(0)


  const setClickerAdder = () => {
    return setClicker(clicked => clicked + auto);
  }

  useEffect(() => {
    if(auto > 0){
        setInterval(() =>{ 
            setClickerAdder();
        }, 1000);
    }
  }, [auto]);

  return (
    <React.Fragment>
        <div className="__main-clicker">
        <div className="__money-owned">${clicked}</div>
        <button onClick={() => setClicker(clicked+1)}>Click</button>
        { auto === 0 &&
          clicked > 40 &&
            <button onClick={()=> setAuto(1)}>Helper: Level 1</button>
        }
        { auto === 1 &&
          clicked > 100 && <button onClick={()=> setAuto(2)}>Helper: Level 2</button>
        }
        { auto === 2 &&
          clicked > 150 && <button onClick={()=> setAuto(3)}>Helper: Level 3</button>
        }
        
        </div>
    </React.Fragment>
  );
}

export default Clicker;