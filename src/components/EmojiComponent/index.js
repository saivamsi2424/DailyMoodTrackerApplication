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
                <button
                  type="button"
                  className="slection-emoji-list-item"
                  onClick={() => updateSelectedActiveEmojiId(id)}
                >
                  <li>
                    <p className="emoji-name-for-selection">{emojiName}</p>
                    <img
                      className={emojiClassName}
                      src={emojiUrl}
                      alt={emojiName}
                    />
                  </li>
                </button>
              )
            })}
          </ul>
        </div>
      )
    }}
  </Context.Consumer>
)

export default EmojiComponent
