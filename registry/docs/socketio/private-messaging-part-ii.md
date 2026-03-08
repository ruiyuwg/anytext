# Private messaging - Part II

This guide has four distinct parts:

-   [Part I](/get-started/private-messaging-part-1/): initial implementation
-   Part II **(current)**: persistent user ID
-   [Part III](/get-started/private-messaging-part-3/): persistent messages
-   [Part IV](/get-started/private-messaging-part-4/): scaling up

Here's where we were at the end of the [1st part](/get-started/private-messaging-part-1/):

![Chat](/images/private-messaging-part-1-chat.gif)

Exchanging private messages is currently based on the [`socket.id`](/docs/v4/server-socket-instance/#Socket-id) attribute, which works well but is problematic here because this ID is only valid for the current Socket.IO session and will change every time the low-level connection between the client and the server is severed.

So, every time the user reconnects, a new user will be created:

![Duplicate users](/images/private-messaging-part-1-duplicate-users.gif)

Which is... not that great. Let's fix this!

## Installation[​](#installation "Direct link to Installation")

Let's checkout the branch for part II:

```
git checkout examples/private-messaging-part-2
```

Here's what you should see in the current directory:

```
├── babel.config.js├── package.json├── public│   ├── favicon.ico│   ├── fonts│   │   └── Lato-Regular.ttf│   └── index.html├── README.md├── server│   ├── index.js (updated)│   ├── package.json│   └── sessionStore.js (created)└── src    ├── App.vue (updated)    ├── components    │   ├── Chat.vue (updated)    │   ├── MessagePanel.vue    │   ├── SelectUsername.vue    │   ├── StatusIcon.vue    │   └── User.vue    ├── main.js    └── socket.js
```

The complete diff can be found [here](https://github.com/socketio/socket.io/compare/examples/private-messaging-part-1...examples/private-messaging-part-2).

## How it works[​](#how-it-works "Direct link to How it works")

### Persistent session ID[​](#persistent-session-id "Direct link to Persistent session ID")

On the server-side (`server/index.js`), we create two random values:

-   a session ID, private, which will be used to authenticate the user upon reconnection
-   a user ID, public, which will be used as an identifier to exchange messages

```
io.use((socket, next) => {  const sessionID = socket.handshake.auth.sessionID;  if (sessionID) {    // find existing session    const session = sessionStore.findSession(sessionID);    if (session) {      socket.sessionID = sessionID;      socket.userID = session.userID;      socket.username = session.username;      return next();    }  }  const username = socket.handshake.auth.username;  if (!username) {    return next(new Error("invalid username"));  }  // create new session  socket.sessionID = randomId();  socket.userID = randomId();  socket.username = username;  next();});
```

The session details are then sent to the user:

```
io.on("connection", (socket) => {  // ...  socket.emit("session", {    sessionID: socket.sessionID,    userID: socket.userID,  });  // ...});
```

On the client-side (`src/App.vue`), we store the session ID in the [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage):

```
socket.on("session", ({ sessionID, userID }) => {  // attach the session ID to the next reconnection attempts  socket.auth = { sessionID };  // store it in the localStorage  localStorage.setItem("sessionID", sessionID);  // save the ID of the user  socket.userID = userID;});
```

Actually, there were several possible implementations:

-   no storage at all: reconnection will preserve the session, but refreshing the page will lose it
-   [sessionStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage): reconnection & refreshing the page will preserve the session
-   [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage): reconnection & refreshing the page will preserve the session + this session will be shared across the browser tabs

Here, we chose the `localStorage` option, so all your tabs will be linked to the same session ID, which means that:

-   you can chat with yourself (yay!)
-   you now need to use another browser (or the private mode of your browser) to create another peer

And finally, we fetch the session ID on application startup:

```
created() {  const sessionID = localStorage.getItem("sessionID");  if (sessionID) {    this.usernameAlreadySelected = true;    socket.auth = { sessionID };    socket.connect();  }  // ...}
```

You should now be able to refresh your tab without losing your session:

![Persistent sessions](/images/private-messaging-part-2-persistent-session.gif)

On the server-side, the session is saved in an in-memory store (`server/sessionStore.js`):

```
class InMemorySessionStore extends SessionStore {  constructor() {    super();    this.sessions = new Map();  }  findSession(id) {    return this.sessions.get(id);  }  saveSession(id, session) {    this.sessions.set(id, session);  }  findAllSessions() {    return [...this.sessions.values()];  }}
```

Again, this will only work with a single Socket.IO server, we'll come back to this in the 4th part of this guide.

### Private messaging (updated)[​](#private-messaging-updated "Direct link to Private messaging (updated)")

The private messaging is now based on the `userID` which is generated on the server-side, so we need to do two things:

-   make the Socket instance join the associated room:

```
io.on("connection", (socket) => {  // ...  socket.join(socket.userID);  // ...});
```

-   update the forwarding handler:

```
io.on("connection", (socket) => {  // ...  socket.on("private message", ({ content, to }) => {    socket.to(to).to(socket.userID).emit("private message", {      content,      from: socket.userID,      to,    });  });  // ...});
```

Here's what happens:

![Private messaging](/images/private-messaging-part-2-private-messaging.png)

With `socket.to(to).to(socket.userID).emit(...)`, we broadcast in both the recipient and the sender (excluding the given Socket instance) [rooms](/docs/v4/rooms/).

So now we have:

![Chat (v2)](/images/private-messaging-part-2-chat.gif)

### Disconnection handler[​](#disconnection-handler "Direct link to Disconnection handler")

On the server-side, the Socket instance emits two special events: [disconnecting](/docs/v4/server-socket-instance/#disconnecting) and [disconnect](/docs/v4/server-socket-instance/#disconnect)

We need to update our "disconnect" handler, because the session can now be shared across tabs:

```
io.on("connection", (socket) => {  // ...  socket.on("disconnect", async () => {    const matchingSockets = await io.in(socket.userID).allSockets();    const isDisconnected = matchingSockets.size === 0;    if (isDisconnected) {      // notify other users      socket.broadcast.emit("user disconnected", socket.userID);      // update the connection status of the session      sessionStore.saveSession(socket.sessionID, {        userID: socket.userID,        username: socket.username,        connected: false,      });    }  });});
```

The `allSockets()` method returns a Set containing the ID of all Socket instances that are in the given room.

Note: we could also have used the `io.of("/").sockets` object, like in part I, but the `allSockets()` method also works with multiple Socket.IO servers, which will be useful when scaling up.

Documentation: [allSockets() method](/docs/v4/server-api/#namespace-allSockets)

## Review[​](#review "Direct link to Review")

OK, so… what we have now is better, but there is yet another issue: the messages are not actually persisted on the server. As a consequence, when the user reloads the page, it loses all its existing conversations.

This could be fixed for example by saving the messages in the localStorage of the browser, but there is another more annoying repercussion:

-   when the sender gets disconnected, all the packets it sends are [buffered](/docs/v4/client-offline-behavior/#Buffered-events) until reconnection (which is great, in most cases)

![Chat with sender that gets disconnected](/images/private-messaging-part-2-sender-offline.gif)

-   but when the recipient gets disconnected, the packets are lost, since there is no listening Socket instance in the given room

![Chat with recipient that gets disconnected](/images/private-messaging-part-2-recipient-offline.gif)

We will try to fix this in the [3rd part](/get-started/private-messaging-part-3/) of this guide.

Thanks for reading!

-   [Installation](#installation)
-   [How it works](#how-it-works)
    -   [Persistent session ID](#persistent-session-id)
    -   [Private messaging (updated)](#private-messaging-updated)
    -   [Disconnection handler](#disconnection-handler)
-   [Review](#review)
