function startsWithCap(value){
    return /[A-Z]/.test(value.charAt(0))
}

function isValidDate(date) {
    if(!date) return false
    const [year, month, day] = date.split("-")
    const userDate = new Date(+year, month - 1, day)
    const currentDate = new Date()
    return currentDate > userDate
}

function isFullNumber(num) {
    return num.length === 12
}

function formatNumber(value) {
    const number = value.replace(/\D/g, '')
    const len = number.length
    if (len <= 1) {
      return number
    } else if (len <= 5) {
      return `${number.slice(0, 1)}-${number.slice(1)}`
    } else if (len <= 7) {
      return `${number.slice(0, 1)}-${number.slice(1, 5)}-${number.slice(5)}`
    } else {
      return `${number.slice(0, 1)}-${number.slice(1, 5)}-${number.slice(5, 7)}-${number.slice(7, 9)}`
    }
}

function isValidSite(site) {
    return site.startsWith('https://')
}

function hasLimitedCharacters(value) {
    return value.length <= 600
}

function displayDate(date) {

}

export {
    startsWithCap, 
    formatNumber,
    isFullNumber,
    isValidDate, 
    isValidSite,
    hasLimitedCharacters
}
