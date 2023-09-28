import dayOne from './src/1'

const day = Bun.argv[2]

switch (day) {
  case '1':
    dayOne()
    break
  default:
    console.log('No day specified')
}
