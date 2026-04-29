export const calculateBMR = (data) => {
  if (!data) return null  
  const weight = Number(data.weight)
  const height = Number(data.scale)
  const age = Number(data.age)
  if (isNaN(weight) || isNaN(height) || isNaN(age)) return null
  let bmr = 0
  if (data.gender === 'male') {
    bmr = 10 * weight + 6.25 * height - 5 * age + 5
  } else {
    bmr = 10 * weight + 6.25 * height - 5 * age - 161
  }
  return bmr
}
export const calculateCcal = (data) => {
  if (!data) return null  
  const bmr = calculateBMR(data)
  if (!bmr) return null
  const activityMultiplier = {
    1: 1.2,
    2: 1.375,
    3: 1.55,
    4: 1.725,
    5: 1.9
  }
  const multiplier = activityMultiplier[data.energy] || 1.2
  let calories = bmr * multiplier
  if (data.target === 'weight_loss' || data.target === 'похудение') {
    calories = calories - 500
  } else if (data.target === 'weight_gain' || data.target === 'набор массы') {
    calories = calories + 500
  }
  calories = Math.max(1200, Math.min(5000, calories))
  return Math.round(calories)
}
export const calculateMacros = (calories) => {
  if (!calories) return null
  const protein = Math.round(calories * 0.3 / 4)
  const fats = Math.round(calories * 0.3 / 9)
  const carbs = Math.round(calories * 0.4 / 4)
  return { protein, fats, carbs }
}
export const calculateBMI = (data) => {
  if (!data) return null 
  const weight = Number(data.weight)
  const height = Number(data.scale) / 100
  if (isNaN(weight) || isNaN(height) || height === 0) return null
  const bmi = weight / (height * height)
  return Math.round(bmi * 10) / 10
}
export const getBMICategory = (bmi) => {
  if (!bmi) return null 
  if (bmi < 18.5) return { category: 'Недостаточный вес', color: '#ffa500' }
  if (bmi < 25) return { category: 'Нормальный вес', color: '#4caf50' }
  if (bmi < 30) return { category: 'Избыточный вес', color: '#ff9800' }
  if (bmi < 35) return { category: 'Ожирение I степени', color: '#f44336' }
  if (bmi < 40) return { category: 'Ожирение II степени', color: '#d32f2f' }
  return { category: 'Ожирение III степени', color: '#b71c1c' }
}
export const calculateWater = (data) => {
  if (!data) return null 
  const weight = Number(data.weight)
  const waterAmount = weight * 0.03
  return Math.round(waterAmount * 10) / 10
}



