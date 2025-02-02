<div align="center">
  <img src="./doc/img/logo.png" width="128" height="128"/>

  <h2>ThreeCraft</h2>

  <p>
    <strong>MineCraft like game based Three.js with support of hyperlinks to navigate between servers.</strong>
  </p>

  <p>
    <img alt="Threejs" src="https://img.shields.io/badge/Three.js-000000?style=flat-square&logo=Three.js&logoColor=white"/>
    <img alt="Socket.io" src="https://img.shields.io/badge/Socket.io-010101?style=flat-square&logo=Socket.io&logoColor=white"/>
    <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white"/>
    <img alt="Vite" src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=Vite&logoColor=white"/>
  </p>

  <h4>
    <a href="https://mc.liukairui.me/en">Live Demo</a>
  </h4>
</div>

### 📝 ToDo (PoC)

- Allow to place link block that permits entering a link and exit hash
- Load index save file when serve loads instead of random generation
- Allow to place user in specific location based on provided hash

### 📝 ToDo (Extras)

- When user looks at link area show target link URL in bottom left corner
- Create identity server to have share identity and inventory between servers
- OR create decentralised inventory/identity exchange protocol (preferable?)

### 📝 ToDo (Legal)

- Replace all "MineCraft" mentions with TreeCraft for copyright reasons
- Replace MC textures with freely available, like Pixel Perfection by XSSHeep
- Replace MC sounds with freely available

### ✨ Feature

- Multiplayer online game support
- Efficient collision detection method
- Multiple ways to save and load archive
- Efficient multi-threaded dynamic infinite map generation and partial refresh method
- 30 random character skins (in multiplayer mode)
- 5 random game scenes (Classic / Ice / Beach Melon Field / Pumpkin Field / Bizarre)
- Multi-terminal and multi-control mode support (PC, mobile, VR, PS4/5 joy stick, Xbox joy stick support)
- Multiple parameters can be adjusted(FOV / Fog factor / Simulate range / Operation range / Volume / Number of threads / Operation sensitivity / Language / Operation mode / Crosshair color / Backpack mode / Cheat mode)
- Dual language support (Chinese / English)
- Original sound
- PWA support

### 🎮️ Operation

- **PC**

  - **Space Bar**:Jump
  - **E Key**: Switch Bag
  - **Q Key**: Cheat Mode
  - **Mouse Move**: Change Orientation
  - **WSAD Key**: Move
  - **Number Key**: Toggle Block
  - **Wheel Scroll**: Toggle Block
  - **Click Item Box**: Toggle Block
  - **Shift Key**: Drop in Cheat Mode
  - **Mouse left/right click**: Destroy/Create Blocks
  - **ESC Key**: Show Menu

- **Mobile**

  - **Drag Screen**: Change Orientation
  - **Click Item Box**: Toggle Block
  - **Click Active Item**: Open Backpack

- **Xbox joy stick(test on Xbox One)**

  <img src="./doc/img/xbox-en.png" height="200px"/>

- **PS joy stick(test on PS4)**

  <img src="./doc/img/ps-en.png" height="200px"/>

- **VR**
  - **Turn headset**: Change Orientation
  - **Using remote**: Destroy Blocks

### 🛠️ Install

- Frontend

  ```bash
  # Install pnpm
  > npm install -g pnpm

  # Install all dependencies
  > pnpm install

  # Install a dependency
  > pnpm install xxx  -D/-S

  # Run
  > pnpm dev

  # Build
  > pnpm build
  ```

- Backend

  ```bash
  # Enter the backend directory
  > cd server

  # Install all dependance
  > pnpm install

  # Compile TS code
  > tsc

  # Execute backend programs (if process management tools such as PM2 are not required)
  > node ./dist/index.js

  # Install PM2
  > pnpm install -g pm2

  # Sign up for PM2 monitoring
  > pm2 start --watch ./dist/index.js

  # For reverse proxy, proxy /socket.io to localhost:9000 and configure same-origin policy
  ```

  After the program runs, the following prompt will be output

  ```
  ThreeCraft v1.0.2 game server running at:
  > Local:        http://localhost:9000
  > Network:      http://xxx.xxx.xxx.xxx:9000

  YOU MUST ENTER THE ADDRESS LIKE http://xxx.xxx.xxx.xxx:9000 IN GAME, NO PART CAN BE OMITTED!
  ```

  When connecting to the server, be sure to enter all `http://xxx.xxx.xxx.xxx:9000`, do not omit `http://` or `:9000`

  If the frontend runs on https, then the backend should also runs on https. Some reverse proxy tools may be needed to implement https

### 🥰 Reference

- The overall structure of the project refers from [vyse12138/minecraft-threejs](https://github.com/vyse12138/minecraft-threejs). Thanks a lot for their work!
- The implementation of the mobile joystick refers from [bobboteck/JoyStick](https://github.com/bobboteck/JoyStick).
- The overall structure of backend refers from [Merlin218/UNO-server](https://github.com/Merlin218/UNO-server/). Thanks a lot for his work!
