import React from 'react'

const Context = React.createContext({
  activeMonthForCalender: 1,
  monthsList: [],
  weeksList: [],
  emojisList: [],
  selectedActiveEmojiId: '',
  updateSelectedActiveEmojiId: () => {},
  updateEmojiForDate: () => {},
  decrementMonth: () => {},
  incrementMonth: () => {},
  dayNameForMiniReport: '',
  emojiNameForMiniReport: '',
  reportValue: '',
  activeMonthForMainReport: '',
  changeMonthForReport: () => {},
})
export default Context
