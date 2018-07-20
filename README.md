React + Typescript + Webpack + Google Maps App
==============================================


Run app:
=============

**install node modules**
```bash
& yarn
```
after finish
**run app**
```bash
& npm start
```
Application will open browser on http://0.0.0.0:8008

Test app:
=============

**Run tests**
```bash
& npm t
```

Tech specs
===============
- server: webpack-dev-server

- test: 
 - Jest
 - Enzyme

- JS framework:
  - React with
    - routing

- Typescript
    
- styles:
  - pre-processor: scss


Docker (Not run yet)
===============

**Build**
```bash
& docker build --no-cache . -t react-typescript
```

**Run**
```bash
& docker run -p 8008:8008 react-typescript
```
