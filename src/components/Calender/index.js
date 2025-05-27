import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md'

import Context from '../../Context/Context'

import './index.css'

const Calender = () => (
  <Context.Consumer>
    {value => {
      const {
        activeMonthForCalender,
        monthsList,
        weeksList,
        selectedActiveEmojiId,
        updateEmojiForDate,
        decrementMonth,
        incrementMonth,
      } = value
      return (
        <div className="main-container-calender">
          <div className="arrow-month-container">
            <button data-testid="previous-button" className="arrow-button">
              <MdOutlineKeyboardArrowLeft
                onClick={() => decrementMonth()}
                className="arrow-left"
              />
            </button>
            <h1 className="heading-calender">
              {monthsList[activeMonthForCalender - 1].monthName}
            </h1>
            <button data-testid="next-button" className="arrow-button">
              <MdOutlineKeyboardArrowRight
                onClick={() => incrementMonth()}
                className="arrow-right"
              />
            </button>
          </div>
          <div className="weeks-container">
            <ul className="weeks-unorder-list">
              {weeksList.map(each => (
                <li className="week-name">{each.day}</li>
              ))}
            </ul>
            <ul className="days-unorder-list">
              {monthsList[activeMonthForCalender - 1].dates.map(each => {
                const {date, id, emojiUrl, emojiName} = each
                return (
                  <li
                    className="day-name date-box"
                    onClick={() => updateEmojiForDate(id)}
                    key={id}
                  >
                    <p className="date">{date}</p>
                    {emojiName !== '' ? (
                      <img
                        className="date-image"
                        src={emojiUrl}
                        alt={emojiName}
                      />
                    ) : null}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      )
    }}
  </Context.Consumer>
)

export default Calender
