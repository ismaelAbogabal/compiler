# Run the app

## Run

- Clone the `repo`
- Instal `node` if not exist
- Run `npm init`
- Run `npm start`

## Test

- Change the input equation in `./server.ts`
- Rerun the project

## Supported Operations

- Basic arithmetic operations `+-*/`
- Power operation `**`
- Modulus operation `%`
- Priority of brackets `()`

## priority

- After digit
- Most priority is `()`
- Then the power `**`
- Then `% X /` by order
- Then `+ -` by order

## output

### Advanced calculation

![sample screenshot](/public/screenshot.png)

### Priority by order example

`5 % 3 * 2`
![sample screenshot](/public/screenshot2.png)

`2 * 5 % 3`
![sample screenshot](/public/screenshot3.png)
