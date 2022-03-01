# Animepedia

This project is for learning how to fetch data from API using useEffect. Also, I learned about dynamic routing and sending data while navigating another page.

I used [Kitsu API](https://kitsu.docs.apiary.io/).

## Fetching

This is basically how you can use fetch with useEffect

```javascript
import {useEffect} from 'react';

  useEffect(() => {
    let apiData = fetch({your url}
    .then((response) => response.json());
    apiData.then((data) => {
      console.log(data);
    });
  }, [{your state}]);  // Only re-subscribe {your state} changes
```

If you want to catch the errors you can simply add this.

```javascript
.catch(()=> {
console.log('Swallowed!')
});

```

If you want to clear your useEffect when your component is deleted or something you can simply use return.

```javascript
useEffect(() => {
    ...
    return () => {
        // someting
    }
})
```

## Dynamic paths + useNavigate and useLocation Hooks

Simply you can use dynamic paths like this.

```js
<Route path="/detail/:animeName" element={<Detail />} />
```

If you want to navigate another page with sending data. You can use useNavigate. It takes two arguments. The first one is where you want to navigate and the second one is what you want to send.

```js

import {useNavigate} from 'react-router-dom';

const Item = (props) => {
  let navigate = useNavigate();

  return (
    <div
      onClick={(e) =>
        navigate(`/detail/${your dynamic path}`, {
          state: {
            animeName: props.Name,
          },
          replace: true,
        })
      }
    >
```

And then you can use useLocation for handling this data.

```js
import {useLocation} from 'react-router-dom';
const {state} = useLocation();
```
