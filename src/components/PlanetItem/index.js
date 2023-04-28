import './index.css'

const PlanetItem = props => {
  const {each} = props
  const {name, description, imageUrl} = each

  return (
    <div className="image-container" data-testid="planets">
      <img className="img" src={imageUrl} alt="planet {name}" />
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  )
}

export default PlanetItem
