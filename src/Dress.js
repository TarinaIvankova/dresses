import { useState } from 'react';
import Clothes from './Clothes';
import { data } from './data';
import Buttons from "./Buttons";
import './App.css';


function Home (){
    const [clothes, setClothes] = useState (data);


    const chosenClothes=(searchTerm)=>{
      const newClothes=data.filter (element=>
        element.searchTerm===searchTerm);
        setClothes (newClothes);
    }


    return (
<div className='First'>
   <div className='Fon'>
        <div className='cont'>
            <h2 className='backTwo'>Author's collection from DIANA ROSE</h2>
        </div>
        <div className='back'>
            <h2>tel: +7 999 454-45-98</h2>
            <p>Воплощение женственности!</p>
            <p>Вдохновлённые самой природой мягкой женской сути: плавными линиями, легкими движениями, нежными прикосновениями, мы создали бренд, в основе которого и есть сама женщина. Вечерние платья – незаменимый наряд в торжественных случаях, будь то свадьба лучших друзей, юбилей или день рождения, ужин в роскошном ресторане или корпоратив. В таких ситуациях повседневными вещами не обойтись. А эффектное вечернее платье будет не только уместным, но и подчеркивающим женственность, красоту и элегантность своей обладательницы. </p>
            <p>Ты — есть воплощение женственности!</p>
        </div>
        <div>
             <Buttons filteredClothes={chosenClothes}/>
        </div>
    </div>
   <Clothes itemsForSale={clothes}/>
   <div className='fonTwo'>
   <h2 className='backTwo'>Author's collection from DIANA ROSE</h2>
   <p className='back'>ИНН 465749384758</p>
   </div>
</div>
    )
}
export default Home;