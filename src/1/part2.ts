export async function partTwo() {
  console.log('Day 2 - Calorie Counting continuation')
  const input = await Bun.file('./src/1/input.txt').text()
  const caloriesList = input.split('\n\n')

  let calories: number[] = []

  for (let index = 0; index < caloriesList.length; index++) {
    const element = caloriesList[index].split('\n').map(x => parseInt(x))
    const sum = element.reduce((a, b) => a + b)
    calories.push(sum)
  }

  calories.sort((a, b) => b - a)

  const topSumCalories = calories[0] + calories[1] + calories[2]

  console.log(`total calories from the top three elves: ${topSumCalories}`)
}
