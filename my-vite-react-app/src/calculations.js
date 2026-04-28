// calculations.js

// Функция расчета базального метаболизма
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

// Функция расчета дневной нормы калорий
export const calculateCcal = (data) => {
  if (!data) return null
  
  const bmr = calculateBMR(data)
  if (!bmr) return null
  
  // Коэффициент активности
  const activityMultiplier = {
    1: 1.2,    // Минимальная активность
    2: 1.375,  // Умеренная активность
    3: 1.55,   // Высокая активность
    4: 1.725,  // Очень высокая активность
    5: 1.9     // Экстремальная активность
  }
  
  const multiplier = activityMultiplier[data.energy] || 1.2
  let calories = bmr * multiplier
  
  // Корректировка в зависимости от цели
  if (data.target === 'weight_loss' || data.target === 'похудение') {
    calories = calories - 500
  } else if (data.target === 'weight_gain' || data.target === 'набор массы') {
    calories = calories + 500
  }
  
  // Ограничиваем минимальное и максимальное значение
  calories = Math.max(1200, Math.min(5000, calories))
  
  return Math.round(calories)
}

// Функция расчета белков, жиров, углеводов (БЖУ)
export const calculateMacros = (calories) => {
  if (!calories) return null
  
  // Соотношение: белки 30%, жиры 30%, углеводы 40%
  const protein = Math.round(calories * 0.3 / 4) // 4 ккал на 1г белка
  const fats = Math.round(calories * 0.3 / 9)     // 9 ккал на 1г жиров
  const carbs = Math.round(calories * 0.4 / 4)    // 4 ккал на 1г углеводов
  
  return { protein, fats, carbs }
}

// Функция расчета ИМТ (индекса массы тела)
export const calculateBMI = (data) => {
  if (!data) return null
  
  const weight = Number(data.weight)
  const height = Number(data.scale) / 100 // переводим см в метры
  
  if (isNaN(weight) || isNaN(height) || height === 0) return null
  
  const bmi = weight / (height * height)
  return Math.round(bmi * 10) / 10
}

// Функция получения описания ИМТ
export const getBMICategory = (bmi) => {
  if (!bmi) return null
  
  if (bmi < 18.5) return { category: 'Недостаточный вес', color: '#ffa500' }
  if (bmi < 25) return { category: 'Нормальный вес', color: '#4caf50' }
  if (bmi < 30) return { category: 'Избыточный вес', color: '#ff9800' }
  if (bmi < 35) return { category: 'Ожирение I степени', color: '#f44336' }
  if (bmi < 40) return { category: 'Ожирение II степени', color: '#d32f2f' }
  return { category: 'Ожирение III степени', color: '#b71c1c' }
}

// Функция расчета рекомендуемой воды (в литрах)
export const calculateWater = (data) => {
  if (!data) return null
  
  const weight = Number(data.weight)
  const waterAmount = weight * 0.03 // 30 мл на 1 кг веса
  
  return Math.round(waterAmount * 10) / 10
}