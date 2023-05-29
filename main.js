import createRoutes from './router'
import Countdown from './utils/countdown'

const today = new Date()
const countdownDate = new Countdown(today.getFullYear(), 10, 4)

function renderCountdown() {
  if (today >= countdownDate.targetDate) countdownDate.targetDate.setFullYear(today.getFullYear() + 1)
  const diff = countdownDate.getDiff()
  const dateTimeFormat = new Intl.DateTimeFormat('en-GB', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })

  const formattedDate = dateTimeFormat.format(countdownDate.targetDate)

  for (const [key, value] of Object.entries(diff)) {
    document.getElementById(key).textContent = String(value).padStart('2', '0')
  }

  document.getElementById('countdown-date').textContent = formattedDate
}

createRoutes(renderCountdown)
setInterval(renderCountdown, 1000)
