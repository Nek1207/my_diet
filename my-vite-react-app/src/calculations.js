function calculateCcal() {
    const formData = localStorage.getItem('CalculatorFormData')
    const user = JSON.parse(formData)

    const formula = user.weight * 10 + user.scale * 6.25 - user.age * 5 * user.energy

    if (user.gender === 'male') {
        formula += 5
    } else if (user.gender === 'female') {
        formula -= 161
    } else {
        alert('[mydiet] error no.1: unknown gender value # at calculations.js:11')
    }

    return formula
}