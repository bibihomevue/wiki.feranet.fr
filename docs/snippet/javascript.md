# JavaScript / TypeScript

## Date and time

```js
/**
 *  Display the date in long format
 */
function dateNumeric() {
  const today = new Date();
  return today.toLocaleDateString('fr-FR', {
    weekday: "long",
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
} // output: dimanche 8 janvier 2023

/**
 *  Display the date in short format
 */
function dateLong() {
  const today = new Date();
  return today.toLocaleDateString('fr-FR')
} // output: 08/01/2023
```

## Size converter
::: code-group
```js [JavaScript]
function convertSize(size, fixed) {
  const units = ['Ko', 'Mo', 'Go', 'To', 'Po'];
  const unitIndex = Math.floor(Math.log(size) / Math.log(1024))
  return `${(size / Math.pow(1024, unitIndex)).toFixed(fixed)} ${units[unitIndex]}`
}
```
```ts [TypeScript]
function convertSize(size: number, fixed: number) {
  const units = ['Ko', 'Mo', 'Go', 'To', 'Po'];
  const unitIndex = Math.floor(Math.log(size) / Math.log(1024))
  return `${(size / Math.pow(1024, unitIndex)).toFixed(fixed)} ${units[unitIndex]}`
}
```
:::

## Bandwidth converter
::: code-group
```js [JavaScript]
function convertBandwidth(bandwidth, fixed) {
  return `${parseFloat((bandwidth / 125000).toFixed(fixed))} Mbps`
}

function convertBandwidth(bandwidth, fixed) {
  const units = ['bps', 'Kbps', 'Mbps', 'Gbps', 'Tbps']
  const unitIndex = Math.floor(Math.log(bandwidth) / Math.log(1000))
  return `${(bandwidth / Math.pow(1000, unitIndex)).toFixed(fixed)} ${units[unitIndex]}`
}
```
```ts [TypeScript]
function convertBandwidth(bandwidth: number, fixed: number) {
  return `${parseFloat((bandwidth / 125000).toFixed(fixed))} Mbps`
}

function convertBandwidth(bandwidth: number, fixed: number) {
  const units = ['bps', 'Kbps', 'Mbps', 'Gbps', 'Tbps']
  const unitIndex = Math.floor(Math.log(bandwidth) / Math.log(1000))
  return `${(bandwidth / Math.pow(1000, unitIndex)).toFixed(fixed)} ${units[unitIndex]}`
}
```
:::

## Capitalize on the first letter
::: code-group
```js [JavaScript]
function capitalise(str) {
  return str[0].toUpperCase() + str.slice(1)
}
```
```ts [TypeScript]
function capitalise(str: string) {
  return str[0].toUpperCase() + str.slice(1)
}
```
:::

## Array method
```js
const minion = [
  { name: "Bob", eye: 2, hair: false },
  { name: "Kevin", eye: 2, hair: true },
  { name: "Stuart", eye: 1, hair: true },
]

const nameAndEye = { "Bob": 2 "Kevin": 2 "Stuart": 1}

minion.filter(element => { return element.eye === 2 });
// { name: 'Bob', eye: 2, hair: false } 

minion.find(element => { return element.name === "Bob" });
// { name: 'Bob', eye: 2, hair: false }

minion.forEach(element => { console.log(element.name) });
// Bob Kevin Stuart

minion.map(element => { return element.name });
// ['Bob', 'Kevin', 'Stuart']

minion.some(element => { return element.hair === true });
// true

minion.every(element => { return element.hair === true });
// false

minion.reduce((a, b) => { return a + b.eye }, 0);
// 5

Object.values(nameAndEye).reduce((a, b) => a + b, 0);
// 5
```
