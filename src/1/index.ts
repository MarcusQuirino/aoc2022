export default async function dayOne() {
  console.log('Day 1 - Calorie Counting')
  const input = await Bun.file('./src/1/input.txt').text()
  const caloriesList = input.split('\n\n')

  let totalCalories = 0

  for (let index = 0; index < caloriesList.length; index++) {
    const element = caloriesList[index].split('\n').map(x => parseInt(x))
    const sum = element.reduce((a, b) => a + b)
    if (sum > totalCalories) {
      totalCalories = sum
    }
  }

  console.log(`total calories: ${totalCalories}`)
}
