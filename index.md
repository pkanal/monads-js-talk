# Control Flow with Monads

## What is a monad?

#### 2
So, were going to get into some definitions here.
Before we get to control flow, lets figure out _what_ a monad is. I promise it has the potential to be more intuitive than you think.

Explaining "what is a monad" is a bit like saying "what is a number?" We use numbers all the time. But imagine you met someone who didn't know anything about numbers. How the _heck_ would you explain what numbers are? And how would you even begin to describe why that might be useful?

#### 3
So when I first started out trying to wrap my head around what is now a self fulfilling prophecy. I did the thing that you do. I literally googled "what is a monad". And this is what i found (google screenshot). There was a _lot_ of Haskell and a lot of solutions around monads were _in_ Haskell.

And then I started looking at Haskell documentation. I dont know if you had a look at the Haskell documentation but it really made me miss the docs for Webpack 1. Big old pile of nope

### 4
Eventually after the initial shock wore off, the idea evolved to thinking of it as simply as "A monad is a wrapper for a value where the value can be mapped for transformation. It should also provide a way for the same _type_ of monad to be chained together".

In other words a monad is a data structure that has a method to get the value out of it `fold` and a method to which lets us sequence operations on that data structure (`map`, `flatMap`). Let's get into what those two functions mean.

Lets look at some data structures that we're already familiar with

### Arrays (5)

Arrays are containers for several values

Let's look at arrays. Arrays can be mapped over to transform every value in the array. We kind of take this for granted.

```javascript
const candyRecommendations = [{
  id: 1,
  name: 'Gummy Bears',
  categories: ['candy']
}, {
  id: 2,
  name: 'Malteasers',
  categories: ['chocolate']
}, {
  id: 3,
  name: 'Reese\'s Pieces',
  categories: ['chocolate', 'peanut-butter'],
}, {
  id: 4,
  name: 'Candy Cane',
  categories: ['candy', 'holiday'],
}];
```

We can use `Array.prototype.map` to transform the values of the array above into something more useful for display purposes

```javascript
  const candyNames = candy.map(c => c.name);
```

What if the data we got back from the API was structured slightly differently?

```javascript
const candyRecommendations = [{
  category: 'candy',
  items: [{ id: 1, name: 'Gummy Bears'}, { id: 4, name: 'Candy Cane'}],
}, {
  category: 'chocolate',
  items: [{ id: 2, name: 'Malteasers'}, { id: 3, name: 'Reese\'s Pieces'}],
}, {
  category: 'peanut-butter',
  items: [{ id: 3, name: 'Reese\'s Pieces'}],
}, {
  category: 'holiday',
  items: [{ id: 4, name: 'Candy Cane'}]
}]
```

We want to display that same list that looks like

```javascript
const candyNames = [
  'Gummy Bears',
  'Malteasers',
  'Reese\'s Pieces',
  'Candy Cane',
]
```

So we would have to map over the array and get the `items`, flatten out the array and then remove the duplicates.

```javascript
const candyNames = candyRecommendations.map(recommendation => items);
```

Then we'd end up with something like this. We still have to flatten the array of arrays and get just the name of each sweet treat out.

```javascript
const candyNames = [
  [{ id: 1, name: 'Gummy Bears'}, { id: 4, name: 'Candy Cane'}],
  [{ id: 2, name: 'Malteasers'}, { id: 3, name: 'Reese\'s Pieces'}],
  [{ id: 3, name: 'Reese\'s Pieces'}],
  [{ id: 4, name: 'Candy Cane'}],
]
```

So we would flatten the array and then map over it to get the data we want.

```javascript
candyRecommendations
  .map(recommendation => items)
  .reduce((a, b) => a.concat(b), [])
  .map(item => item.name)
  .map(removeDupes);
```

So you could extend arrays to have `flatMap`, which would flatten an array of arrays and then apply a transformation to each value in the array.

### Promises
Next thing we're gonna look at is promises. These came pretty close to qualifying as a monad. They arent technically but they demonstrate how to use monadic data structures very usefully so we're gonna look at them.

```javascript
Promise.delay(1000).then(function() {
    return Promise.delay(1000).then(function () {
        return Promise.delay(2000);
    }).then(function () {
        return Promise.delay(5000)
    });
}).then(function () {
    alert("This is only shown after 8 seconds and not 1");
});
```

Using the `bluebird` library syntax here so that we dont get bogged down by `setTimeout` code.
The current way promises are implemented is immensely useful. Rare are the cases you actually want a Promise[Promise and normally you want continuations to just work. Promises 'borrow' from monads and are 'monadic' in a sense themselves.

```javascript
const getCandyRecommendations =
  fetch('https://candyrecommendations.com/')
  .then(res => res.json())
```

In this case `then` unwraps the promise and gives returns the json from the response to us after transforming it.

```javascript
const getCandyRecommendations =
  fetch('https://chocolaterecommendations.com/')
  .then(chocolate =>
    fetch('https://candyrecommendations.com/')
    .then(candy => candy.json())
    .then(candyJson => ({ ...candyJson, ...chocolate.json() })))
  .then(treats => treats.data);
```

Here we have some nested promises which will go through and in our final then we transform the data and get it out of the promise.

### Observables
We've made it to something that's _actually_ a monad. Observables have the `of` method which allows us to get the values out of an observable. They also have `map` and `mergeMap`.
(there is some debate about whether observables are monads, promises are where things get hairy.)


`fold` is implemented as the static method Observable.of, when given a single argument. It takes a value and returns an Observable that emits that value and terminates.

```javascript
//emits any number of provided values in sequence
const source = Rx.Observable.of(1,2,3,4,5);
//output: 1,2,3,4,5
const subscribe = source.subscribe(val => console.log(val));
```

`flatMap` is implemented as `mergeMap`. This is a method on an Observable object that takes a function, applies it to every value in the Observable (giving you an Observable with Observable values in it) and then merges all of them into a single Observable.

```javascript
//emit 'Hello'
const source = Rx.Observable.of('Hello');
//map to inner observable and flatten
const example = source.mergeMap(val => Rx.Observable.of(`${val} World!`));
//output: 'Hello World!'
const subscribe = example.subscribe(val => console.log(val));
```

### I/O Monad
Reviewing what a monad is:

- Get stuff method
- Transform stuff and return a monad
- Deal with functions that return the same type of monad

The monad that meets those minimum requirements is the I/O monad.
```javascript
IO
.of(3)
.map(x => x * 2)
.runIO();
// 6
```

```javascript
const replaceXWithY = (string): <IO> => IO.of(string).map(string => string.replace('x', 'y'));
const appendStringWithA = (string): <IO> => IO.of(string).map(string => `${string}a`);

IO
.of('xyz')
.chain(replaceXWithY)
.chain(appendStringWithA)
.run();
// yyza
```

```javascript
  const replaceXWithY = (string): string => string.replace('x', 'y')
  const appendStringWithA = (string): string => `${string}a`
  appendStringWithA(replaceXWithY('xyz'));
```

You can achieve similar stuff with pipe and compose functions for sure so lets look at something a little more interesting

### Null Checking
This is something we do everyday and its actually _really_ difficult in JavaScript to have a unified approach to null checking. What usually ends up happening is

```javascript
  const useDeeplyNestedPropertyToDoAComplexTransform = deeplyNestedObject =>
    deeplyNestedObject && deeplyNestedObject.a && deeplyNestedObject.a.b ? transform(deeplyNestedObject.a.b) : null;
```

This kind of null checking can be pretty fragile.

### Maybe Monad
Has all the usual stuff but some special cases

Takes a value and returns a different type of monad depending on what the value is. Chain will only operate if the value is something.

```javascript
Maybe(3)
// Just(3)
.getOrElse(0)
// 3

Maybe(undefined)
// Nothing()
.getOrElse(0)
// 0
```

So if our building block functions were all made up of Maybes, we wouldnt have to worry about null checking so much.

```javascript
const candyRecommendations = [{
  category: 'candy',
  items: [{ id: 1, name: 'Gummy Bears'}, { id: 4, name: 'Candy Cane'}],
}, {
  category: 'chocolate',
  items: [{ id: 2, name: 'Malteasers'}, { id: 3, name: 'Reese\'s Pieces'}],
}, {
  category: 'peanut-butter',
  items: [{ id: 3, name: 'Reese\'s Pieces'}],
}, {
  category: 'holiday',
  items: [{ id: 4, name: 'Candy Cane'}]
}]

const head = (array): <Maybe> => Maybe(array[0]);
const prop = (propName, object): <Maybe> => Maybe(object[propName]);

Maybe(candyRecommendations)
// Just(candyRecommendations)
.chain(head)
// Just({
//   category: 'candy',
//   items: [{ id: 1, name: 'Gummy Bears'}, { id: 4, name: 'Candy Cane'}],
// })
.chain(prop('items'))
// Just([{ id: 1, name: 'Gummy Bears'}, { id: 4, name: 'Candy Cane'}])
.getOrElse([]);
// [{ id: 1, name: 'Gummy Bears'}, { id: 4, name: 'Candy Cane'}]

Maybe([])
// Just([])
.chain(head)
// Nothing
.chain(prop('items'))
// We never get here
.getOrElse([]);
// []
```

Null checking for free!!

### Control flow
Figuring out order of operations when a program is executing, based on some conditions. Usually looks something like this

```javascript
if (/* something */) {
  return 'a'
} else if (/* something else */) {
  return 'b'
}

return 'c';
```

And thats mostly fine, when you get to something that looks like this though. It can be quite hard to maintain.
https://pbs.twimg.com/media/C6A7smLUsAAzJeS.jpg:large

Intro to zork

### Either monad
This is really similar to the maybe monad, with one extra feature. Instead of `Just`/`Nothing`. We have _branching_ to a `Right` or `Left` monad. The `Right` monad works exactly like `Just`. The `Left` monad can hold a value but maps/chains will not apply to it. So its like our error case. We already kind of use this pattern with promises.

```javascript
type Either = Right | Left

const head = (array): <Either> => array[0] ?
  Right(array[0]) :
  Left('no first element!')

const prop = (propName, object): <Either> => object[propName] ?
  Right(object[propName]) :
  Left(`no ${propName}`)

Maybe([])
// Right(candyRecommendations)
.chain(head)
// Left('no first element')
.chain(prop('items'))
// Never runs
.either(error => { throw error }, item => item);
// error thrown
```

```javascript
const getCandyRecommendations =
  fetch('https://chocolaterecommendations.com/')
  .then(chocolate =>
    fetch('https://candyrecommendations.com/')
    .then(candy => { if (candy.ok) { return candy.json() }  throw 'no candy!' })
    .then(candyJson => ({ ...candyJson, ...chocolate.json() })))
  .then(treats => treats.data)
  .catch(err => err);
```

So the idea is to only make one decision at a time (do i return results or an error?) at each point in the flow to reduce mental overhead.

Back to Zork:

```javascript
// Start with a Right
const westOfHouse = () => Right({
  message: `
    West of House
    This is an open field west of a white house, with a boarded front door.
    There is a small mailbox here. A rubber mat saying \'Welcome to Zork!\' lies by the door.
  `,
  options: {
    north: northOfHouse(),
  }
});
const northOfHouse = () => Right({
  message: `
    North of House
    You are facing the north side of a white house.  There is no door here, and all the windows are barred.
  `,
  options: {
    south: Left('A bear attacks you, you die'),
    east: forest(),
  },
});
const forest = () => Right({
  message: `
    Forest
    This is a forest, with trees in all directions around you.
  `,
  options: {
    west: northOfHouse(),
  }
})

westOfHouse() // west of house
.chain(currentPosition => currentPosition.options.north) // north of house
.chain(currentPosition => currentPosition.options.east) // Forest
.chain(currentPosition => currentPosition.options.west) // north of house
```

### Caveats

### References
https://bartoszmilewski.com/2011/01/09/monads-for-the-curious-programmer-part-1/
https://mttkay.github.io/blog/2014/01/25/your-app-as-a-function/
