import {
  BarChart,
  Bar,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import Header from '../Header'
import Context from '../../Context/Context'
import './index.css'

const Report = () => (
  <Context.Consumer>
    {value => {
      const {
        emojisList,
        monthsList,
        changeMonthForReport,
        activeMonthForMainReport,
      } = value

      let veryHappyCount = 0
      let happyCount = 0
      let neutral = 0
      let sad = 0
      let verySad = 0
      console.log(activeMonthForMainReport)

      monthsList.forEach(month => {
        if (month.monthName === activeMonthForMainReport) {
          month.dates.forEach(date => {
            switch (date.emojiName) {
              case 'Very Happy':
                veryHappyCount += 1
                break
              case 'Happy':
                happyCount += 1
                break
              case 'Neutral':
                neutral += 1
                break
              case 'Sad':
                sad += 1
                break
              case 'Very Sad':
                verySad += 1
                break
              default:
                break
            }
          })
        }
      })

      const countMap = {
        'Very Happy': veryHappyCount,
        Happy: happyCount,
        Neutral: neutral,
        Sad: sad,
        'Very Sad': verySad,
      }

      const monthlyChartData = [
        'Very Happy',
        'Happy',
        'Neutral',
        'Sad',
        'Very Sad',
      ].map(name => {
        const matching = emojisList.find(e => e.emojiName === name)
        return {
          name,
          count: countMap[name] || 0,
          emojiUrl: matching?.emojiUrl || '',
        }
      })

      const renderCustomAxisTick = ({x, y, payload}) => {
        const matching = emojisList.find(e => e.emojiName === payload.value)
        return matching ? (
          <image
            href={matching.emojiUrl}
            x={x - 12}
            y={y + 10}
            width={24}
            height={24}
          />
        ) : (
          <text x={x} y={y + 15} textAnchor="middle">
            ?
          </text>
        )
      }

      return (
        <>
          <Header />
          <div className="main-container-reports">
            <h1 className="heading-reports">Overall Emojis Reports</h1>
            <div>
              <ul className="overall-emoji-report-card">
                {emojisList.map(each => (
                  <li
                    key={each.emojiName}
                    className="overall-emoji-report-card-container"
                  >
                    <p className="reports-description">{each.emojiName}</p>
                    <img
                      src={each.emojiUrl}
                      className="emoji-url"
                      alt={each.emojiName}
                    />
                    <p className="reports-count-description">{each.count}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="monthly-report-container">
              <h1 className="heading-reports">Monthly Reports</h1>
              <select
                className="month-slection-reports"
                aria-label="Select Month"
                onChange={changeMonthForReport}
                value={activeMonthForMainReport}
              >
                {monthsList.map(month => (
                  <option key={month.id} value={month.monthName}>
                    {month.monthName}
                  </option>
                ))}
              </select>
            </div>

            <BarChart width={600} height={300} data={monthlyChartData}>
              <XAxis
                dataKey="name"
                stroke="#8884d8"
                tick={renderCustomAxisTick}
              />
              <YAxis />
              <Tooltip
                wrapperStyle={{
                  width: 100,
                  backgroundColor: '#ccc',
                }}
              />
              <Legend
                width={100}
                wrapperStyle={{
                  top: 40,
                  right: 20,
                  backgroundColor: '#f5f5f5',
                  border: '1px solid #d5d5d5',
                  borderRadius: 3,
                  lineHeight: '40px',
                }}
              />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <Bar dataKey="count" fill="yellow" barSize={30} />
            </BarChart>
          </div>
        </>
      )
    }}
  </Context.Consumer>
)

export default Report
