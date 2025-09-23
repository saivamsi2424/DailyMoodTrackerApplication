import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'

import Context from '../../Context/Context'

import './index.css'

const Calender = () => (
  <Context.Consumer>
    {value => {
      const {
        activeMonthForCalender,
        monthsList,
        weeksList,

        updateEmojiForDate,
        decrementMonth,
        incrementMonth,
      } = value
      return (
        <div className="main-container-calender">
          <div className="arrow-month-container">
            <button
              data-testid="previous-button"
              onClick={() => decrementMonth()}
              className="arrow-button"
              type="button"
              aria-label="previous Month"
            >
              <FaChevronLeft className="arrow-left" />
            </button>
            <h1 className="heading-calender">
              {monthsList[activeMonthForCalender - 1].monthName}
            </h1>
            <button
              data-testid="next-button"
              onClick={() => incrementMonth()}
              className="arrow-button"
              type="button"
              aria-label="Next Month"
            >
              <FaChevronRight className="arrow-right" />
            </button>
          </div>
          <div className="weeks-container">
            <ul className="weeks-unorder-list">
              {weeksList.map(each => (
                <li key={each.day} className="week-name">
                  {each.day}
                </li>
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
