<h1 align="center">PROBLEM THREE: MARS ROVERS</h1>

<p align="center">
	<img alt="Rover problem" src="https://i.imgur.com/1SHbLfB.png" width="546">
</p>

<p align="center">A CLI program that asks for input to deploy and move the rovers on a variably sized plateau.</p>

## How to install & use

### Prerequisites

- [NodeJS](https://nodejs.org/)
- [git](https://git-scm.com/)

### Installation

1. Open up your favourite CLI application

2. `git clone https://github.com/uzimike/rover-problem.git` to download the files 

3. `npm install` to install the packages

4. `npm run compile` to compile code from TypeScript to JavaScript

5. `npm start` to run the program (`npm run dev` to run it in TypeScript)

### Testing

I used mocha to test the program.

`npm test` to run tests

## Details

### Language

This program is coded in TypeScript and is compiled to JavaScript.

TypeScript `./src`

JavaScript `./lib`

### Structure

App retreives the user input and gives it to Parser to process, using Operation to create and manipulate the Plateau and the Plateau's Rovers.

<p align="center">
	<img alt="Rover Structure" src="https://i.imgur.com/pYNIhTH.png width="546">
</p>

## Todo list

- add more tests
- re-ask question if parser couldn't use the input
- get parser to validate the input
- error if rover is in an invalid position

## Resources

Typescript/mocha example: https://github.com/mochajs/mocha-examples/tree/master/typescript
