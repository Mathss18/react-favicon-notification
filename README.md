# react-favicon-notification

React context to show notification on favicon

## [Demo](https://react-favicon-notification.netlify.app)

### Installation

```bash
  npm i react-favicon-notification
```

### Usage

#### Importing context provider

```js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import FaviconNotificationContextProvider from "react-favicon-notification";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FaviconNotificationContextProvider>
      <App />
    </FaviconNotificationContextProvider>
  </React.StrictMode>
);

// Wrap your application in the providers
```

#### Use the custom hook to change the favicon notification config

```js
import { useFaviconNotification } from "react-favicon-notification";

const [config, setConfig] = useFaviconNotification();

function showNotificationIcon(){
    setConfig({ ...config, show: true })
}

function incrementNotification(){
    setConfig({ ...config, counter: config.counter + 1 })
}
```

# config properties

| property        |               default                | type          | description                                            |
| --------------- | :----------------------------------: | ------------- | ------------------------------------------------------ |
| counter         |                 `0`                  | number/string | show the counter inside the notifictaion circle        |
| innerCircle     |               `false`                | boolean       | hide counter and show a small inner circle             |
| backgroundColor |              `#DB0101`               | string        | set the background color                               |
| fontColor       |                `#FFF`                | string        | set the font color                                     |
| fontFamily      |               `Arial`                | string        | set the font family                                    |
| fontWeight      |                `bold`                | string        | set the font weigth                                    |
| url             | `window.location.origin/favicon.ico` | string        | set the url to get the favicon                         |
| position        |            `bottom-right`            | string        | set the position of the notification                   |
| show            |               `false`                | boolean       | true: show the notificaion. off: hide the notification |

**Warning:** Do not forget to set the show property to true in order to show the notification

