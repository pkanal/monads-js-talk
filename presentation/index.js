// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  CodePane,
  Image,
  Text,
  Link
} from "spectacle";

import CodeSlide from "spectacle-code-slide";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("./styles.css");


const images = {
  // city: require("../assets/city.jpg"),
  // kat: require("../assets/kat.png"),
  // logo: require("../assets/formidable-logo.svg"),
  // markdown: require("../assets/markdown.png"),
  googleSearch: require("../assets/google-search.png"),
  haskellDocs: require("../assets/haskell-docs.png"),
  slackNotification: require("../assets/slack-notifications.jpg"),
  zork: require("../assets/zork.jpg"),
  jake: require("../assets/jake.gif")
};

const examples = {
  arrays: {
    one: require("raw-loader!../code/arrays/one.example"),
    two: require("raw-loader!../code/arrays/two.example"),
    three: require("raw-loader!../code/arrays/three.example")
  },
  promises: {
    one: require("raw-loader!../code/promises/one.example"),
    two: require("raw-loader!../code/promises/two.example")
  },
  observables: {
    one: require("raw-loader!../code/observables/one.example"),
    two: require("raw-loader!../code/observables/two.example")
  },
  io: {
    one: require("raw-loader!../code/io/one.example"),
    two: require("raw-loader!../code/io/two.example")
  },
  maybe: {
    one: require("raw-loader!../code/maybe/one.example"),
    two: require("raw-loader!../code/maybe/two.example"),
    three: require("raw-loader!../code/maybe/three.example")
  },
  either: {
    one: require("raw-loader!../code/either/one.example"),
    two: require("raw-loader!../code/either/two.example"),
    three: require("raw-loader!../code/either/three.example")
  }
};

preloader(images);

const theme = createTheme({
  primary: "#D8DBE2",
  secondary: "#373F51",
  tertiary: "#DAA49A",
  quartenary: "#58A4B0"
}, {
  primary: { name: "Montserrat", googleFont: true, styles: [ "400", "700" ] },
  secondary: { name: "Lato", googleFont: true, styles: [ "400", "700" ] }
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["fade"]} transitionDuration={300} theme={theme} progress="bar">
        <Slide transition={["fade"]} bgColor="secondary" style={{ width: '75%'}}>
          <p className='white tl'>Aug 11 2017</p>
          <h1 className='white tl'>Control Flow with Monads in JavaScript</h1>
          <p className='white tl'>Purvi Kanal</p>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} textColor="primary" caps>What is a Monad?</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>😬😬😬</Heading>
          <Image height="25rem" src={ images.googleSearch } />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>😬😬😬</Heading>
          <Image src={ images.haskellDocs } />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>A monad has to be able to...</Heading>
          <List>
            <ListItem>Contain a value</ListItem>
            <ListItem>Transform the contained value</ListItem>
            <ListItem>Chain operations on that data structure</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} textColor="primary" caps>Arrays</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Heading size={6}>Container</Heading>
          <CodePane lang="javascript" source={ examples.arrays.one } />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <List>
            <ListItem>Contain a value ✅</ListItem>
            <ListItem>Transform the contained value</ListItem>
            <ListItem>Chain operations on that data structure</ListItem>
          </List>
        </Slide>
        <CodeSlide
          transition={[]}
          ranges={[
            { loc: [0, 17] },
            { loc: [18, 19], title: "Map" }
          ]}
          lang="js"
          code={ examples.arrays.two }
        />
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <List>
            <ListItem>Contain a value ✅</ListItem>
            <ListItem>Transform the contained value ✅</ListItem>
            <ListItem>Chain operations on that data structure</ListItem>
          </List>
        </Slide>
        <CodeSlide
          transition={[]}
          ranges={[
            { loc: [0, 13] },
            { loc: [14, 20] },
            { loc: [21, 26] },
            { loc: [23, 24] },
            { loc: [23, 25], title: "flatMap" }
          ]}
          lang="js"
          code={ examples.arrays.three }
        />
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <List>
            <ListItem>Contain a value ✅</ListItem>
            <ListItem>Transform the contained value ✅</ListItem>
            <ListItem>Chain operations ❌</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} textColor="primary" caps>Promises</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <List>
            <ListItem>Contain a value ✅</ListItem>
            <ListItem>Transform the contained value</ListItem>
            <ListItem>Chain operations on that data structure</ListItem>
          </List>
        </Slide>
        <CodeSlide
          transition={[]}
          ranges={[
            { loc: [0, 4] },
            { loc: [1, 2] },
            { loc: [2, 3], title: "Transforms result" }
          ]}
          lang="js"
          code={ examples.promises.one }
        />
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <List>
            <ListItem>Contain a value ✅</ListItem>
            <ListItem>Transform the contained value ❓</ListItem>
            <ListItem>Chain operations</ListItem>
          </List>
        </Slide>
        <CodeSlide
          transition={[]}
          ranges={[
            { loc: [0, 10] },
            { loc: [2, 3] },
            { loc: [9, 10] },
            { loc: [3, 8], title: "Recursively flattens" }
          ]}
          lang="js"
          code={ examples.promises.two }
        />
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <List>
            <ListItem>Contain a value ✅</ListItem>
            <ListItem>Transform the contained value ❓</ListItem>
            <ListItem>Chain operations ❓</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="tertiary" caps>Then</Heading>
            <List>
              <ListItem>Unwraps value in a promise</ListItem>
              <ListItem>Transforms value</ListItem>
              <ListItem>Recursively flattens promises</ListItem>
            </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} textColor="primary" caps>Observables</Heading>
        </Slide>
        <CodeSlide
          transition={[]}
          ranges={[
            { loc: [0, 4] },
            { loc: [0, 2] },
            { loc: [0, 4] }
          ]}
          lang="js"
          code={ examples.observables.one }
        />
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <List>
            <ListItem>Contain a value ✅</ListItem>
            <ListItem>Transform the contained value ✅</ListItem>
            <ListItem>Chain operations</ListItem>
          </List>
        </Slide>
        <CodeSlide
          transition={[]}
          ranges={[
            { loc: [0, 6] },
            { loc: [0, 2] },
            { loc: [2, 4] },
            { loc: [3, 6] }
          ]}
          lang="js"
          code={ examples.observables.two }
        />
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <List>
            <ListItem>Contain a value ✅</ListItem>
            <ListItem>Transform the contained value ✅</ListItem>
            <ListItem>Chain operations ✅</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} textColor="primary" caps>I/O Monad</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="primary" caps>Monad Constraints</Heading>
          <List>
            <ListItem>Wrap a value</ListItem>
            <ListItem>Transform the wrapped value</ListItem>
            <ListItem>Chain operations for the same type of data structure</ListItem>
          </List>
        </Slide>
        <CodeSlide
          transition={[]}
          ranges={[
            { loc: [0, 5] },
            { loc: [0, 1], title: "Wrapper" },
            { loc: [1, 2], title: "Transform" },
            { loc: [2, 3], title: "Get value" },
            { loc: [3, 5] }
          ]}
          lang="js"
          code={ examples.io.one }
        />
        <CodeSlide
          transition={[]}
          ranges={[
            { loc: [0, 2], title: "Building Blocks" },
            { loc: [3, 5], title: "Building Blocks" },
            { loc: [6, 8] },
            { loc: [8, 9], title: "Replace" },
            { loc: [9, 10], title: "Append" },
            { loc: [10, 12] }
          ]}
          lang="js"
          code={ examples.io.two }
        />
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} textColor="primary" caps>Null Checking</Heading>
        </Slide>
        <CodeSlide
          transition={[]}
          ranges={[
            { loc: [0, 1] },
            { loc: [1, 4] },
            { loc: [0, 5] }
          ]}
          lang="js"
          code={ examples.maybe.one }
        />
        <CodeSlide
          transition={[]}
          ranges={[
            { loc: [0, 1] },
            { loc: [2, 6], title: "Just" },
            { loc: [7, 11], title: "Nothing" },
            { image: images.jake }
          ]}
          lang="js"
          code={ examples.maybe.two }
        />
        <CodeSlide
          transition={[]}
          ranges={[
            { loc: [0, 13] },
            { loc: [14, 16] },
            { loc: [17, 19] },
            { loc: [19, 20] },
            { loc: [19, 24] },
            { loc: [24, 25] },
            { loc: [24, 26] },
            { loc: [26, 28] },
            { loc: [29, 31] },
            { loc: [31, 33] },
            { loc: [33, 35] },
            { loc: [35, 37] }
          ]}
          lang="js"
          code={ examples.maybe.three }
        />
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} textColor="primary" caps>Control Flow</Heading>
        </Slide>
        <CodeSlide
          transition={[]}
          ranges={[
            { loc: [0, 7] },
            { loc: [0, 2] },
            { loc: [2, 5] },
            { loc: [6, 7] }
          ]}
          lang="js"
          code={ examples.either.one }
        />
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Image src={ images.slackNotification } height="40rem"/>
        </Slide>
        <CodeSlide
          transition={[]}
          ranges={[
            { loc: [0, 1] },
            { loc: [2, 9] },
            { loc: [10, 12] },
            { loc: [12, 14] },
            { loc: [14, 16] },
            { loc: [16, 18] }
          ]}
          lang="js"
          code={ examples.either.two }
        />
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Zork: The Great Underground Empire</Heading>
          <Image src={ images.zork } height="30rem"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Zork Demo</Heading>
        </Slide>
        <CodeSlide
          transition={[]}
          ranges={[
            { loc: [0, 10], title: "Start with a Right" },
            { loc: [1, 6] },
            { loc: [6, 9] },
            { loc: [11, 21] },
            { loc: [22, 31] },
            { loc: [32, 33] },
            { loc: [2, 6] },
            { loc: [33, 34] },
            { loc: [7, 8] },
            { loc: [12, 16] },
            { loc: [34, 35] },
            { loc: [18, 19] },
            { loc: [23, 27] },
            { loc: [35, 36] },
            { loc: [28, 29] },
            { loc: [2, 6] }
          ]}
          lang="js"
          code={ examples.either.three }
        />
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} textColor="primary" caps>Caveats</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Naming Conventions</Heading>
          <List>
            <ListItem>flatMap</ListItem>
            <ListItem>chain</ListItem>
            <ListItem>bind</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Specs</Heading>
          <Text>Monads are conceptual</Text>
          <Text>Options in JS</Text>
          <List>
            <ListItem>
              <Link href="https://github.com/fantasyland/fantasy-land">fantasy-land</Link>
            </ListItem>
            <ListItem>
              <Link href="https://github.com/ramda/ramda-fantasy">ramda-fantasy</Link>
            </ListItem>
            <ListItem>
              <Link href="https://monet.github.io/monet.js/">monetjs</Link>
            </ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
