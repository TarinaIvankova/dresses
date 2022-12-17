function Buttons ({filteredClothes}) {
    return (<div className="contTwo">
        <button className="changeRed" onClick={()=>filteredClothes("dressRed")}>Dresses Red</button>
        <button className="change" onClick={()=>filteredClothes("dressBlack")}>Dresses Black</button>
        <button className="changeBlue" onClick={()=>filteredClothes("dressBlue")}>Dresses Blue</button>
        <button className="changeYellow" onClick={()=>filteredClothes("dressYellow")}>Dresses Yellow</button>
        <button className="changeGreen" onClick={()=>filteredClothes("dressGreen")}>Dresses Green</button>
    </div>)
}
export default Buttons;