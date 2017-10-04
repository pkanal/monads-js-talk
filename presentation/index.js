// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Image,
  Text,
  Link,
  Appear
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
  googleSearch: require("../assets/google-search.png"),
  haskellDocs: require("../assets/haskell-docs.png"),
  slackNotification: require("../assets/slack-notifications.jpg"),
  zork: require("../assets/zork.jpg"),
  jake: require("../assets/jake.gif"),
  lego: require("../assets/lego.gif"),
  powerpoint: require("../assets/powerpoint.gif")
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
  // primary: "#D8DBE2",
  // secondary: "#373F51",
  // tertiary: "#F9F291",
  // quartenary: "#58A4B0",
  // quint: '#798DBA'
  primary: "#D8DBE2",
  secondary: "#D7A6A3",
  tertiary: "#344472" ,
  quartenary: "#D83343",
  quint: "#798DBA",

}, {
  primary: { name: "Montserrat", googleFont: true, styles: [ "400", "700" ] },
  secondary: { name: "Lato", googleFont: true, styles: [ "400", "700" ] }
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["fade"]} transitionDuration={300} theme={theme} progress="bar">
        <Slide transition={["fade"]} bgColor="tertiary" style={{ width: '75%'}}>
          <h1 className='white tl'>JavaScript ❤️ Monads</h1>
          <p className='white tl'>Purvi Kanal</p>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={2} textColor="primary" caps>What is a Monad?</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>😬😬😬</Heading>
          <Image height="30rem" src={ images.googleSearch } />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>😬😬😬</Heading>
          <Image src={ images.haskellDocs } />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="tertiary" caps>A monad has to be able to...</Heading>
          <List>
            <Appear>
              <Text textColor="tertiary" size={6} textAlign="left" margin="3rem">
                Contain a value
              </Text>
            </Appear>
            <Appear>
              <Text textColor="tertiary" size={6} textAlign="left" margin="3rem">
                Transform value
              </Text>
            </Appear>
            <Appear>
              <Text textColor="tertiary" size={6} textAlign="left" margin="3rem">
                Chain operations that return that data structure
              </Text>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={2} textColor="primary" caps>Arrays</Heading>
        </Slide>
        <CodeSlide
          transition={[]}
          ranges={[
            { loc: [0, 17] },
            { loc: [18, 21], title: "Map" }
          ]}
          lang="js"
          code={ examples.arrays.two }
        />
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <List>
            <ListItem style={{ listStyle: "none", marginBottom: "3rem" }}>
              ✅ Contain a value
            </ListItem>
            <ListItem style={{ listStyle: "none", marginBottom: "3rem" }}>
              ✅ Transform value
            </ListItem>
            <ListItem style={{ listStyle: "none", marginBottom: "3rem" }}>
              ❓Chain operations
            </ListItem>
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
            <ListItem style={{ listStyle: "none", marginBottom: "3rem" }}>
              ✅ Contain a value
            </ListItem>
            <ListItem style={{ listStyle: "none", marginBottom: "3rem" }}>
              ✅ Transform value
            </ListItem>
            <ListItem style={{ listStyle: "none", marginBottom: "3rem" }}>
              ❌ Chain operations
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={2} textColor="primary" caps>Observables</Heading>
        </Slide>
        <CodeSlide
          showLineNumbers={false}
          transition={[]}
          ranges={[
            { loc: [0, 1] },
            { loc: [1, 3] }
          ]}
          lang="js"
          code={ examples.observables.one }
        />
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <List>
            <ListItem style={{ listStyle: "none", marginBottom: "3rem" }}>
              ✅ Contain a value
            </ListItem>
            <ListItem style={{ listStyle: "none", marginBottom: "3rem" }}>
              ✅ Transform value
            </ListItem>
            <ListItem style={{ listStyle: "none", marginBottom: "3rem" }}>
              ❓Chain operations
            </ListItem>
          </List>
        </Slide>
        <CodeSlide
          showLineNumbers={false}
          transition={[]}
          ranges={[
            { loc: [0, 2] },
            { loc: [2, 6] },
            { loc: [6, 10] }
          ]}
          lang="js"
          code={ examples.observables.two }
        />
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <List>
            <ListItem style={{ listStyle: "none", marginBottom: "3rem" }}>
              ✅ Contain a value
            </ListItem>
            <ListItem style={{ listStyle: "none", marginBottom: "3rem" }}>
              ✅ Transform value
            </ListItem>
            <ListItem style={{ listStyle: "none", marginBottom: "3rem" }}>
              ✅ Chain operations
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={2} textColor="primary" caps>Promises</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <List>
            <ListItem style={{ listStyle: "none", marginBottom: "3rem" }}>
              ✅ Contain a value
            </ListItem>
            <ListItem style={{ listStyle: "none", marginBottom: "3rem" }}>
              ❓ Transform value
            </ListItem>
            <ListItem style={{ listStyle: "none", marginBottom: "3rem" }}>
              ❓ Chain operations
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={2} textColor="primary" caps>I/O Monad</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading textAlign="left" size={4} textColor="tertiary" caps>Monad Constraints</Heading>
          <List>
            <ListItem style={{ listStyle: "none", marginBottom: "3rem" }}>
              Contain a value
            </ListItem>
            <ListItem style={{ listStyle: "none", marginBottom: "3rem" }}>
              Transform value
            </ListItem>
            <ListItem style={{ listStyle: "none", marginBottom: "3rem" }}>
              Chain operations on the same kind of data structure
            </ListItem>
          </List>
        </Slide>
        <CodeSlide
          showLineNumbers={false}
          transition={[]}
          ranges={[
            { loc: [0, 5] },
            { loc: [0, 1] },
            { loc: [1, 2], title: "Wrapper" },
            { loc: [2, 3], title: "Transform" },
            { loc: [3, 5], title: "Get value" }
          ]}
          lang="js"
          code={ examples.io.one }
        />
        <CodeSlide
          transition={[]}
          ranges={[
            { loc: [0, 4], title: "Building Blocks" },
            { loc: [5, 9], title: "Building Blocks" },
            { loc: [10, 12] },
            { loc: [12, 13], title: "Replace" },
            { loc: [13, 14], title: "Append" },
            { loc: [14, 16] }
          ]}
          lang="js"
          code={ examples.io.two }
        />
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={2} textColor="primary" caps>Null Checking</Heading>
        </Slide>
        <CodeSlide
          showLineNumbers={false}
          transition={[]}
          ranges={[
            { loc: [0, 1] },
            { loc: [1, 4] },
            { loc: [4, 5] }
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
            { loc: [20, 22] },
            { loc: [22, 27] },
            { loc: [27, 29] },
            { loc: [29, 31] },
            { loc: [32, 34] },
            { loc: [34, 36] },
            { loc: [36, 38] },
            { loc: [38, 40] }
          ]}
          lang="js"
          code={ examples.maybe.three }
        />
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={2} textColor="primary" caps>Control Flow</Heading>
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
        <CodeSlide
          transition={[]}
          ranges={[
            { loc: [0, 1] },
            { loc: [2, 11] },
            { loc: [12, 14] },
            { loc: [14, 16] },
            { loc: [16, 18] },
            { loc: [18, 23] }
          ]}
          lang="js"
          code={ examples.either.two }
        />
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Image src={ images.slackNotification } height="40rem"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="tertiary" caps>Zork: The Great Underground Empire</Heading>
          <Image src={ images.zork } height="20rem"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={4} textColor="tertiary" caps>Zork</Heading>
            <Appear>
              <Text textColor="tertiary" size={1} textAlign="left" margin="3rem">
                West of House
                This is an open field west of a white house, with a boarded front door.
                There is a small mailbox here. A rubber mat saying 'Welcome to Zork!' lies by the door.
              </Text>
            </Appear>
            <Appear>
              <Text textColor="tertiary" size={6} textAlign="left" margin="3rem">
                > north
              </Text>
            </Appear>
            <Appear>
              <Text textColor="tertiary" size={6} textAlign="left" margin="3rem">
                North of House
                You are facing the north side of a white house.  There is no door here, and all the windows are barred
              </Text>
            </Appear>
        </Slide>
        <CodeSlide
          transition={[]}
          ranges={[
            { loc: [0, 10] },
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
            { loc: [12, 16] }
          ]}
          lang="js"
          code={ examples.either.three }
        />
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={2} textColor="primary" caps>Caveats</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={4} textAlign="Left" textColor="tertiary" caps>Naming Conventions</Heading>
          <List>
            <ListItem>flatMap</ListItem>
            <ListItem>chain</ListItem>
            <ListItem>bind</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={4} textAlign="Left" textColor="tertiary" caps>Monad Spec</Heading>
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
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={4} textAlign="Left" textColor="tertiary" caps>When to use monads</Heading>
          <Text textColor="tertiary" size={6} textAlign="left" margin="3rem">Functions are returing monads</Text>
          <Text textColor="tertiary" size={6} textAlign="left" margin="3rem">Null Checking</Text>
          <Text textColor="tertiary" size={6} textAlign="left" margin="3rem">Complex Control Flow</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={4} textColor="tertiary" caps>Thank you!</Heading>
          <Image src={ images.powerpoint } height="20rem"/>
        </Slide>
      </Deck>
    );
  }
}
