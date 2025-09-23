import Context from '../../Context/Context'

import './index.css'

const EmojiComponent = () => (
  <Context.Consumer>
    {value => {
      const {
        emojisList,
        selectedActiveEmojiId,
        updateSelectedActiveEmojiId,
      } = value

      return (
        <div className="main-container-emojis">
          <ul className="emojis-list-for-selection">
            {emojisList.map(each => {
              const {id, emojiUrl, emojiName} = each
              const emojiClassName =
                selectedActiveEmojiId === id
                  ? 'selected-image'
                  : 'emoji-image-for-selection'
              return (
                <li
                  className="slection-emoji-list-item"
                  onClick={() => updateSelectedActiveEmojiId(id)}
                >
                  <p className="emoji-name-for-selection">{emojiName}</p>
                  <img
                    className={emojiClassName}
                    src={emojiUrl}
                    alt={emojiName}
                  />
                </li>
              )
            })}
          </ul>
        </div>
      )
    }}
  </Context.Consumer>
)

export default EmojiComponent
