import './index.css'

const EmojiCardItem = props => {
  const {emojiDetails, onClickHappy} = props
  const {name, imageUrl, id} = emojiDetails

  const userHappy = () => {
    onClickHappy(id)
  }

  return (
    <li>
      <img
        className="emojiSymbol"
        src={imageUrl}
        alt={name}
        onClick={userHappy}
      />
      <p>{name}</p>
    </li>
  )
}

export default EmojiCardItem
