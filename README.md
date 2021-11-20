# react17-use-session

### example

```jsx
import { useSession } from  'react17-use-session';

const  JSON_WEB_TOKEN = ''; // some token string
const { session, saveJWT, clear } = useSession('some-key');

saveJWT(JSON_WEB_TOKEN); // save token
clear(); // remove session
```
