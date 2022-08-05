// Write your React code here.
import {Component} from 'react'
import './index.css'
import EmojiCardItem from '../EmojiCardItem'

class Feedback extends Component {
  state = {ishappy: false}

  onClickHappy = id => {
    if (id === 2) {
      this.setState({ishappy: true})
    }
  }

  render() {
    const {ishappy} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources

    return (
      <div className="bgContainer">
        <div className="cardContainer">
          {ishappy === false && (
            <>
              <h1>
                How satisfied are you with our customer support performance
              </h1>
              <ul className="cardEmojis">
                {emojis.map(each => (
                  <EmojiCardItem
                    key={each.id}
                    emojiDetails={each}
                    onClickHappy={this.onClickHappy}
                  />
                ))}
              </ul>
            </>
          )}
          {ishappy && (
            <>
              <img
                className="happySymbol"
                src={loveEmojiUrl}
                alt="love emoji"
              />
              <h1>Thank You</h1>
              <p>
                We wiil use your feedback to increase customer service support
                performance
              </p>
            </>
          )}
        </div>
      </div>
    )
  }
}

export default Feedback
