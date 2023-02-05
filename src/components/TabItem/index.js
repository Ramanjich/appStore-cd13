import './index.css'

const Tabitem = props => {
  const {eachtab, onTabchange, isActive} = props
  const {tabId, displayText} = eachtab
  console.log(isActive)

  const activeTabBtnClassName = isActive ? 'active-tab-btn' : ''

  const onTabclick = () => {
    onTabchange(tabId)
  }

  return (
    <li className="items">
      <button
        type="button"
        className={`button ${activeTabBtnClassName}`}
        onClick={onTabclick}
      >
        {displayText}
      </button>
    </li>
  )
}
export default Tabitem
