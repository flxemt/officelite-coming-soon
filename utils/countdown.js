export default class Countdown {
  constructor(...targetDate) {
    this.targetDate = new Date(...targetDate)
  }

  getDiff() {
    const today = new Date()
    // Calculate the difference in milliseconds
    const difference = Math.abs(this.targetDate.getTime() - today.getTime())

    // Convert milliseconds into days, hours, minutes, and seconds
    const days = Math.floor(difference / (1000 * 60 * 60 * 24))
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((difference % (1000 * 60)) / 1000)

    return {
      days,
      hours,
      minutes,
      seconds
    }
  }
}
