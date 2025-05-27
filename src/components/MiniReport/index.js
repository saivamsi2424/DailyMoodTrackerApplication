import Context from '../../Context/Context'

import './index.css'

const MiniReport = () => (
  <Context.Consumer>
    {value => {
      const {
        emojisList,
        weeksList,
        changeTheDayNameForMiniReport,
        changeTheEmojiNameForMiniReport,
        dayNameForMiniReport,
        emojiNameForMiniReport,
        reportValue,
      } = value
      return (
        <div className="main-container-minireport">
          <div className="select-dropdown-container">
            <select
              onChange={changeTheEmojiNameForMiniReport}
              className="dropdown-select"
              value={emojiNameForMiniReport}
            >
              {emojisList.map(each => {
                const {id, emojiName} = each
                return (
                  <option key={id} value={emojiName}>
                    {emojiName}
                  </option>
                )
              })}
            </select>
            <select
              onChange={changeTheDayNameForMiniReport}
              className="dropdown-select"
              value={dayNameForMiniReport}
            >
              {weeksList.map(each => {
                const {id, day} = each
                return (
                  <option key={id} value={day}>
                    {day}
                  </option>
                )
              })}
            </select>
          </div>

          <p className="counter-value">{reportValue}</p>
        </div>
      )
    }}
  </Context.Consumer>
)
export default MiniReport
