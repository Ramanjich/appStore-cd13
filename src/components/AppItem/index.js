import './index.css'

const Appitem = props => {
  const {eachitem} = props
  const {appName, imageUrl} = eachitem

  return (
    <li className="mini-app">
      <img src={imageUrl} className="app-image" alt={appName} />

      <p>{appName}</p>
    </li>
  )
}

export default Appitem
