import './MenuGrid.css'

function MenuCard ({ name, image, onClick }) {

    return (
        <div className="menu-card" onClick={onClick}>
            <img src={image} alt={name} className="menu-image" />
            <p className="menu-name">{name}</p>
        </div>
    )
}
  
export default MenuCard