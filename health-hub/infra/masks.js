import MaskInput, { formatWithMask, Masks } from 'react-native-mask-input'
export const cnpj_custom = [
  /\d/,
  /\d/,
  '.',
  /\d/,
  /\d/,
  /\d/,
  '.',
  /\d/,
  /\d/,
  /\d/,
  '/',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/
]
export const cpf_custom = [
  /\d/,
  /\d/,
  /\d/,
  '.',
  /\d/,
  /\d/,
  /\d/,
  '.',
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/
]
export const rg_custom = [
  /\d/,
  /\d/,
  '.',
  /\d/,
  /\d/,
  /\d/,
  '.',
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/
]
export const formatNumber = (
  amount,
  decimalCount = 2,
  decimal = ',',
  thousands = '.'
) => {
  try {
    decimalCount = Math.abs(decimalCount)
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount
    const negativeSign = amount < 0 ? '-' : ''
    let i = parseInt(
      (amount = Math.abs(Number(amount) || 0).toFixed(decimalCount))
    ).toString()
    let j = i.length > 3 ? i.length % 3 : 0
    return (
      negativeSign +
      (j ? i.substr(0, j) + thousands : '') +
      i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousands) +
      (decimalCount
        ? decimal +
        Math.abs(amount - i)
          .toFixed(decimalCount)
          .slice(2)
        : '')
    )
  } catch (e) {
    console.log(e)
  }
}
export function moneyFormat(valueM) {
  if (!valueM) {
    return ""
  }
  let floatM = valueM.toString()
  let finalMonthV = null
  if (floatM.indexOf('.') !== -1) {
    let fVv = floatM.split('.')[1]
    if (fVv.length > 2) {
      let first2 = fVv.slice(0, 2)
      finalMonthV = floatM.split('.')[0] + ',' + first2
    } else if (fVv.length === 1) {
      finalMonthV = floatM.split('.')[0] + ',' + fVv + '0'
    } else {
      finalMonthV = floatM.split('.')[0] + ',' + fVv
    }
  } else {
    finalMonthV = floatM + ',00'
  }
  const maskedMoneyMonth = formatWithMask({
    text: finalMonthV,
    mask: Masks.BRL_CURRENCY
  }).masked
  return maskedMoneyMonth
}

export function getMaskedDate() {
  let today = new Date()
  let date = today.toISOString()
  if (today.getMinutes() > 9) {
    date =
      'Em ' +
      today.getDate() +
      '/' +
      (today.getMonth() + 1) +
      '/' +
      today.getFullYear() +
      ' às ' +
      today.getHours() +
      ':' +
      today.getMinutes()
  } else {
    date =
      'Em ' +
      today.getDate() +
      '/' +
      (today.getMonth() + 1) +
      '/' +
      today.getFullYear() +
      ' às ' +
      today.getHours() +
      ':0' +
      today.getMinutes()
  }
  return date;
}