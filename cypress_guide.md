# **Cypress**

Cypress is a next generation front end testing tool built for the modern web. Cypress addresses the key pain points developers and QA engineers face when testing modern applications.

### **Cypress use cases**
---
Cypress can offer different types of tests such as:

- End-to-end tests
- Component tests
- Integration tests
- Unit tests

Cypress can test anything that runs in a browser. But for this presentation, we will be focusing on the **End-to-end tests**. 

## **Features**
---

Cypress has many features built along with it. Here is a list of things Cypress can do:

- Time Travel
- Debuggability
- Automaitc Waiting
- Spies, Stubs, and Clocks
- Network Traffic Control
- Consistent Results
- Screenshots and Videos
- Cross Browser Testing
- Smart Orchestration
- Flake Detection

## **Installing Cypress**
---

Installing Cypress is fairly simple it only takes roughly *2* lines.

### **>_ `npm install`**

Install Cypress via `npm`:
```bash
cd /project/path
```

```bash
npm install cypress --save-dev
```

This command installs Cypress locally as a dev dependecy for the project.

> Make sure that `npm init` has been run or a have `node_modules` folder or `package.json` file is present in the root directory

## **Opening the App**
---

To open and run Cypress, issue the following command:

```bash
npx cypress open
```

or using the full path

```bash
./node_modules/.bin/cypress open
```

## **Add npm Scripts**
---

`cypress open` can also be added to the `scripts` field found in the `package.json` file.

```json
{
    "scripts": {
        "cypress:open": "cypress open
    }
}
```

From there, you can then invoke the command from the project root:
```bash
npm run cypress:open
```

## **Launchpad**
---
The Launchpad is the first thing that appears upon opening Cypress. The Launchpad helps you with decisions for Cypress such as selecting the Testing Type.

## **Choosing a Testing Type**
---
The first decision that the Launchpad presents to you is choosing which type of test you will be conducting for the whole app.

The Launchpad presents you **two** types of tests: *E2E Testing* and *Component Testing*. The difference between the two are:

**E2E Testing**:
- Run whole application
- Visit pages to test

**Component Testing**:
- Mount individual components of the app to test in isolation

In a nutshell, E2E tests the app as a whole while component testing tests individual "components" of an app (i.e. testing the name input field of a form)

## **E2E**
---
In our case we will be using E2E testing as we test the application as a whole and visit pages inside the application.

### **Quick Configuration**
So click the E2E Testing option in the Launchpad, a setup config will ask to accept the quick configuration it has setup. Scroll down and hit "Continue" as these configurations can still be edited inside the project folder.

### **Launch a Browser**
What separates Cypress from other testing frameworks/tools is that it can directly use and access your available browsers installed in your machine. This means no more driver/webtoolkit setup making Cypress easy to setup and launch.

In the prompt select the Browser you wish to run Cypress from and **CLICK THAT START BUTTON**.

## **Write Tests**
From there you can then open your **Text Editor** from the root project and create your first spec. Before we can write tests, let's learn about the folder structure so we can effectively utilize Cypress.

> Cypress creates a default folder structure containing the different files used for your tests.

### **Folder Structure**
![folder_structure](images/folder_structure.png)

The image above shows the default folder structure for Cypress. Let's go through each of them.

#### **downloads**

The downloads folder contains all the files downloaded during the test.

#### **e2e**

If you have chosen the e2e option in the launchpad (in our case it is) then this where all the specs are stored. 

> Cypress does not read and run specs outside the **e2e** folder.

#### **fixtures**

The fixtures folder is where you store all the necessary data that will be used for the test. By default, a `default.json` is created upon first setup of Cypress on a project, you can delete, add, or create data needed.

#### **Folder Structure Specs**

Upon discussion with Sir James and Hilary, one of our goal is to find the best folder structure to store tests in.

### **Sir James Folder Structure**

### **Hilary's Folder Structure**
![hilary_spec_structure](images/hilary_spec_structure2.png)

This structure is from a Cypress beginner tutorial found [here](https://www.youtube.com/watch?v=tRI5ruE7yCA&list=PLhW3qG5bs-L9WQSlbSe4Tabm9Ze3QB7ok).

### **Jozen's Folder Structure**
![jozen_spec_structure](images/spec_folder_structure.png)

This structure is based from Cypress' documentation. A video is also available [here](https://www.youtube.com/watch?v=5XQOK0v_YRE&t=1445s), specifically in the **7:47** timestamp.

> The spec folder structure is in the decision of the QA Team in which spec folder structure they wish to use.

Regardless of the folder structure, Cypress will run all specs inside the e2e folder. So let's move the folder structure out of the way and create a new spec.

Head over to the root folder and create a new file named "new_spec.cy.js" and open it using your text editor.

A spec will look like this:
```javascript
describe('test spec', () => {
    beforeEach(() => {
        // code before each test
        cy.visit('/')
    })

    it('visit page', () => {
        cy.contains('Log in').should('be.visible')
    })

    it('empty fields', () => {
        cy.contains('Log in').click()
    })
})
```

Let's go through each function inside the test.

The `describe()` function is where all the tests of a single spec will be iterated, a rule of thumb is have one `describe()` function for each spec.

The `beforeEach()` function is a function that runs before each test found in the spec.

The `it()` is mocha reference and it is the individual test. You can have as many tests in a single spec.

Go ahead and paste the code in your `new_spec.cy.js` and run the code in the **Launchpad**. Notice that some error occurs saying that '/' cannot be found. This because `cy.visit()` visits a webpage with an http format. As we can see, '/' is clearly not an http string. This is because we first have to define our `cypress.config.js` found inside the 'cypress/' folder.

Paste this inside the `e2e` field.
```js
e2e: {
    viewportHeight: 1080,
    viewportWidth: 1920,
    experimentalRunAllSpecs: true,
    baseUrl: 'https://nl.eetech.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
}
```

This contains all the necessary configurations for our tests and is run on each spec.

`viewportHeight` and `viewportWidth` sets our webpage's height and width, optimally we want 1920 x 1080, but you can manually set the dimensions per spec inside the `beforeEach()` function using the `cy.viewport(width, height)`.

What we really need is the `baseUrl` field, which in our case is 'https://nl.eetech.com/', as this is the website me and Hilary used for testing. You can set this to any website you can test, this prevents you from typing the whole URL each time you want to visit your webpage.

With that, we can then successfully run our spec.

## **Writing Tests in Cypress**

Writing tests in Cypress is very much different from writing tests in Selenium.

Cypress uses a chaining approach, where each chain is a command and each chain is dependent on the previous chain.

Example Chain: 

- `cy.get('div.modal-wrapper').should('be.visible').find('div').eq(1).click()`
- `cy.contains('Ad Flow').should('have.attr', 'href', 'https://nl.eetech.com/adhistory/reserved').click()`
- `cy.contains('Deployment Start Date*').parent().find('[type="date"]').type(newDate)`

A chain starts by querying (getting) an element, each chain will then be up to you on what you want to do with the element.

> It is best practice not to chain anything after an action command.

Another advantage Cypress has is that each command always has a corresponding wait time, meaning Cypress will automatically set timeouts for each command so you don't have to.

A full guide on Cypress Best Practices can be found [here.](https://docs.cypress.io/guides/references/best-practices#Web-Servers)

# **Cypress Basic Commands**
Cypress has a many commands each with their own specific functions, but for this training we will be dealing with the most common commands that you will be using. For a list of Cypress' full commands and documentation, click [here](https://docs.cypress.io/api/table-of-contents).

## >_ **it**
it() is used for an individual test case. it() takes two arguments, a string explaining what the test should do, and a callback function which contains our actual test

```js
it('Test Description', () => {
    cy.contains('Test Description').click()
})
```

## >_ **Only**
Upon building your tests, you might want to let Cypress focus on one test as debugging one test and running all your tests can be quite time consuming and frustrating. So Cypress .only command lets Cypress focus on one test.

![only_command](images/only_command.png)

## >_ **Skip**
Sometimes, you might also want to skip a test during Cypress runtime. You can do this with .skip command.

![skip_command](images/skip_command.png)

## >_ **beforeEach**
The before each function runs before each test in Cypress and useful in many applications but a simple beforeEach contains visiting the url for each `it()` test.

```js
    beforeEach(function () {
        cy.visit('/')
        cy.fixture('users/test_user').then((user) => {
            this.user = user
        })
    })
```

## >_ **contains()**
Gets the DOM element containing the text. DOM elements can contain more than the desired text and still match. Additionally, Cypress prefers some DOM elements over the deepest element found.
> Cypress contains() is the second recommended method to get DOM elements.

```js
it('Use Contains', () => {
    cy.contains('Test Description').click()
})
```

## >_ **get()**
Get one or more DOM elements by selector or alias.

```js
it('Use Get', () => {
    cy.get('div').click() // get div element
    cy.get('#email').type('email@test.com') // get element by id
    cy.get('.checkbock').check() // get element by class
    cy.get('div[class="submit_button"]').click() // get element by class
    cy.get('div > div > form').submit() // get form element inside divs
})
```

## >_ **context()**
The context function is just a different `describe()` function. This helps organize your tests

```js
describe('Test Page', () => {
    context('Test Section 1', () => {
        it('Test Form', () => {
            // Insert Commands
        })
    })

    context('Test Section 2', () => {
        it('Test Side Menu', () => {
            // Insert Commands
        })
    })
})
```

## >_ **find()**
The find command is similar to the get() command except that it searches for a inside a given DOM element which means that the find command should be chained of an element.

```js
it('Use Find', () => {
    cy.get('div > div').find('ul > li').click()
})
```

## >_ **eq()**
The eq() command lets you get a DOM element at a specific index in an array of elements.

```html
<ul>
  <li>tabby</li>
  <li>siamese</li>
  <li>persian</li>
  <li>sphynx</li>
  <li>burmese</li>
</ul>
```

```js
it('Get Siamese', () => {
    cy.get('li').eq(1).should('contain', 'siamese') // true
})
```

## >_ **should() and and()**
The Cypress `should()` command is used for assertion.

Using the `and()` command allows for mutlitple assertions.

```js
it('Use Should Command', () => {
    cy.contains('Submit').should('be.visible').and('contain', 'href', 'http://example.com') // true
})
```

## **then()**
The then() command enables you to work with the subject yielded from the previous command.

```js
cy.get('button').then(($btn) => {
  const cls = $btn.attr('class')

  cy.wrap($btn).click().should('not.have.class', cls)
})
```

## **within()**
Scopes all subsequent cy commands to within this element. Useful when working within a particular group of elements such as a `<form>`.

The within command lets you work *within* a specific element.

```js
it('Work inside div.main_banner', () => {
    cy.get('div[class="main_banner"]').within(() => {
        cy.get('form').submit() // gets the form within the main_banner div
    })
})
```

## **each()**
The each command iterates through an array like structure (arrays or objects with a length property).

```javascript
it('Use each command', () => {
    cy.get('ul>li').each(($el, index, $list) => {
        // $el is a wrapped jQuery element
        if ($el.someMethod() === 'something') {
            // wrap this element so we can
            // use cypress commands on it
            cy.wrap($el).click()
        } else {
            // do something else
        }
    })
})
```
> Do not use each when clicking and changing the url.

> You can stop `each()` prematurely by returning false inside the function.

## **session()**
Cache and restore cookies, localStorage, and sessionStorage (i.e. session data) in order to recreate a consistent browser context between tests.

The cy.session() command will inherit the testIsolation value to determine whether or not the page is cleared when caching and restoring the browser context.

```javascript
cy.session(name, () => {
  cy.visit('/login')
  cy.get('[data-test=name]').type(name)
  cy.get('[data-test=password]').type('s3cr3t')
  cy.get('form').contains('Log In').click()
  cy.url().should('contain', '/login-successful')
})
```

## **Action Commands**
After getting the element, Cypress has various commands to interact with these elements.

- **type()**: This command allows you to type inside an input field
- **click()**: This command allows you to click an element
- **dblclick()**: This command allows you to double click an element
- **select()**: This command allows you to select an element
- **check()**: This command allows you to check a checkbox
- **uncheck()**: This command allows to uncheck a checkbox
- **scrollIntoView()**: This command allows you to scroll the selected element into view

### **selectFile()**
This command selects a file or files in an HTML5 input element or simulates dragging a file or files into the browser.
```javascript
cy.get('#drop-box').selectFile('/path/to/file.png')
cy.get('#drop-box-drag').selectFile('/path/to/file.png',{action: 'drag-drop'})
```

# >_ **npx cypress run**
The command used to run Cypress all through this document is `npx cypress open` which is perfect for building and debugging tests. But sometimes it is just better to run Cypress in the command line especially when all tests are good to go and all that's left is use it on **Regression Testing**. Introducing `npx cypress run`, this command runs Cypress without opening the UI and gives you information of your tests in the command line. During each spec, Cypress records the test and saves them. 

## **Flags**
Here is a list of some of the flags used for `npx cypress run`. A full documentation on `cypress run` can be found on [this link](https://docs.cypress.io/guides/guides/command-line#cypress-run).

| flag | description |
| :---: | :--- |
| `--auto-cancel-after-failures` | Overrides the Cloud project-level configuration to set the failed test threshold for auto cancellation or to disable auto cancellation when recording to the Cloud |
| `--browser`, `-b` | Run Cypress in the browser with the given name. If a filesystem path is supplied, Cypress will attempt to use the browser at that path. |
| `--headed` | Displays the browser instead of running headlessly |
| `--record` | Whether to record the test run |
| `--spec`, `-s` | Specify the spec files to run |

### **Example**
```bash
 npx cypress run -b chrome --record false -s cypress/e2e/ads/build_an_ad.cy.js
```

# >_ **Plugins**
Cypress has loads of plugins you can use for your tests, but we'll be sharing you one plugin that can be very useful for your tests. The `cypress-real-events` plugin, this plugin lets you do actions such as Hover, Click, Press, Touch, Type, Swipe, etc.

## **Real Events vs Action Commands**
Since Cypress already has its own Action Commands mentioned earlier, then why should we use this specific plugin. Unlike Cypress' action commands which are simulated, events such as cy.type() are from javascript whcih can be untrusted, `cypress-real-events` is connected to Chrome Devtools Protocol and unlocks new features such as `Hover`. Aside from that, `cypress-real-events` has more options for its events such as having **multiple clicks** with its `.realClick()` command.

The plugin's documentation can be [found here](https://github.com/dmtrKovalenko/cypress-real-events).

## **Installing the Plugin**
Installing the pluging only takes two steps:

Running the command:
```bash
npm install cypress-real-events
```

and importing the plugin to the `cypress/support/e2e.js` file:
```bash
import "cypress-real-events";
```

# **Dealing with Iframes**
Iframes are documents inside documents and can be very challenging to deal with especially in Cypress. So this topic deserves to mentioned here.

## **Getting the Iframe**
To get the iframe using Cypress, use these commands.

```javascript
    cy.get('iframeDOM')
        .its('0.contentDocument')
        .should('exist')
        .its('body')
        .should('not.be.undefined').then((body) => {
            cy.wrap(body)
        })
```

With that you can access the inside of the Iframe with Cypress.

# **Combining Synchronous and Asynchronous Code**
Cypress does not run like how a normal compiler would run a program. Cypress runs each command asynchronously, meaning for each command Cypress encounters, it does not run it immediately but it stores it until the end of the `it()`, then it runs it in order.

### **Example**
```javascript
it('does not work as we expect', () => {
  cy.visit('/my/resource/path') // Nothing happens yet

  cy.get('.awesome-selector') // Still nothing happening
    .click() // Nope, nothing

  // Cypress.$ is synchronous, so evaluates immediately
  // there is no element to find yet because
  // the cy.visit() was only queued to visit
  // and did not actually visit the application
  let el = Cypress.$('.new-el') // evaluates immediately as []

  if (el.length) {
    // evaluates immediately as 0
    cy.get('.another-selector')
  } else {
    // this will always run
    // because the 'el.length' is 0
    // when the code executes
    cy.get('.optional-selector')
  }
})

// Ok, the test function has finished executing...
// We've queued all of these commands and now
// Cypress will begin running them in order!
```

As you can see, Cypress does not run each command when it encounters it, instead runs it after the whole `it()` function has been passed. Which means that any synchronous code that it encounters will not be in sync with Cypress commands. Leading the following code above with an error.

The correct usage of the code above is to place the synchronous code inside a `then()` function.

### **Example**
```javascript
it('does not work as we expect', () => {
  cy.visit('/my/resource/path') // Nothing happens yet

  cy.get('.awesome-selector') // Still nothing happening
    .click() // Nope, nothing
    .then(() => {
      // placing this code inside the .then() ensures
      // it runs after the cypress commands 'execute'
      let el = Cypress.$('.new-el') // evaluates after .then()

      if (el.length) {
        cy.get('.another-selector')
      } else {
        cy.get('.optional-selector')
      }
    })
})

// Ok, the test function has finished executing...
// We've queued all of these commands and now
// Cypress will begin running them in order!
```

The Cypress documentation gives many different recipes for different examples, the documentation can be [found here](https://docs.cypress.io/guides/core-concepts/introduction-to-cypress)

# **Cypress Examples**

We will be using our built tests on BZNews for this. The entire project root is also available on the OJT Azure Repos.