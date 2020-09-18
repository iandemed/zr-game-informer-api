# Game Review API

[AbsurdlyEloquent](https://github.com/AbsurdlyEloquent) | [iandemed](https://github.com/iandemed) | [LexLeach](https://github.com/LexLeach) | [maurcord](https://github.com/maurcord)

## Overview

We created and deployed an API to Heroku that contains basic information on video games, and reviews from (currently) anonymous users

- [Game Review API](#game-review-api)
  - [Overview](#overview)
  - [Techincal Requirements](#techincal-requirements)
    - [Technologies Used](#technologies-used)
    - [Dependencies](#dependencies)
    - [Authentication](#authentication)
  - [Resource List](#resource-list)
    - [Games](#games)
      - [GET /games/index/:index](#get--games-index--index)
      - [Games Schema](#games-schema)
    - [Reviews](#reviews)
      - [GET /reviews/:\_id](#get--reviews----id)
      - [Reviews Schema](#reviews-schema)
  - [Additional Notes](#additional-notes)

## Techincal Requirements

### Technologies Used

1. JavaScript - the primary language we used to develop the API
2. Heroku - to host a deployed version of the API remotely
3. MongoDB Atlas - to host a remote version of our MongoDB database

### Dependencies

We used four packages to construct this project:

1. `npm` - to install and manage the other packages used in my project
2. `express` - to allow HTTP connection and routing for my API
3. `mongoose` - to create the initial seed and to manipulate the database
4. `cors` - to allow cross-origin referencing on the finished application

Installation instructions for npm and Node.js can be found [here](https://www.npmjs.com/get-npm).

Once `npm` is installed successfully on your machine, you can install the dependencies by navigating to your local directory for this repo and running `npm install`.

All of the required dependencies can be found in `package.json` file.

Once you have downloaded all of the dependencies, you can run `npm run seed` to seed a local MongoDB database and `npm run start` to run a local version of the API.

### Authentication

As of the most current release of this API, there is no authentication required for access. Our API is a completely open.

## Resource List

Theere are currently two principal collections in this: the games themselves and the reviews associated with the games.

The root directory for each collection (`/games` and `/reviews` respectivley) provides a JSON containing all of the entries in the database. Below are examples of the HTTP requests that you can send into the API along with the output you may expect to recieve.

| **Route name**  | **URL**                 | **HTTP Verb** | **Description**                                                         |
| --------------- | ----------------------- | ------------- | ----------------------------------------------------------------------- |
| Index           | /{resource}             | GET           | Display a list of all Games or Reviews                                  |
| Show ID         | /{resource}/{:id}       | GET           | Display a specific Game or Review based on their ID                     |
| Show by Index   | /games/index/{:index}   | GET           | Display a specific Game based on its index                              |
| Create          | /{resource}             | POST          | Add new Game or Review to the database, returns the newly created entry |
| Edit By Id      | /{resource}/{:id}       | PUT           | Update a particular Game or Review, returns the old entry               |
| Delete By Id    | /{resource}/{:id}       | DELETE        | Delete a particular Game or Review, returns the deleted entry           |
| Delete By Index | /{resource}/index/{:id} | DELETE        | Delete a particular Game or Review, returns the deleted entry           |

### Games

#### GET /games/index/:index

```JSON
[
{
"platforms": [
"PC",
"Xbox 360",
"Playstation 2"
],
"tags": [
"RPG",
"Fantasy",
"Co-Op"
],
"reviews": [
{
"_id": "5a107ffee0686c0021283b21",
"overall": 4,
"difficulty": 4,
"graphics": 4,
"gameplay": 3,
"replayability": 3,
"__v": 0
}
],
"_id": "5a0fa67dae5bc100213c2333",
"index": "final-fantasy-11",
"name": "Final Fantasy 11",
"genre": "MMORPG",
"maxPlayers": 18,
"modable": true,
"__v": 0
}
]
```

#### Games Schema

| **Variable** | **Type**           | **Description**                                                                     |
| ------------ | ------------------ | ----------------------------------------------------------------------------------- |
| `_id`        | ObjectId           | Unique ID referencing each individual game                                          |
| `name`       | String             | Full name of the game                                                               |
| `index`      | String             | URL friendly version of the games name                                              |
| `imageURL`   | String             | URL to cover art of the game                                                        |
| `platforms`  | Array of Strings   | List of platforms the game is availbe to play on                                    |
| `genre`      | String             | The prevailing genre of the game (ex. Halo is a First Person Shooter)               |
| `tags`       | Array of Strings   | Keywords to add more nuiance to the genre description                               |
| `reviews`    | Array of ObjectIds | References to reviews from the `Review` model                                       |
| `maxPlayers` | Number             | The maximum number of players able to play cooperatively in one lobby or server     |
| `modalbe`    | Boolean            | Whether or not the game supports community created modifications (mods) to the game |

Notes:

- `_id` is a automatically created by `mongoose`

### Reviews

#### GET /reviews/:\_id

```JSON
{
"_id" : "5a107ffee0686c0021283b21",
"overall": 4,
"difficulty": 4,
"graphics": 4,
"gameplay": 3,
"replayability": 3,
"__v": 0
}
```

#### Reviews Schema

| **Variable**    | **Type** | **Description**                                  |
| --------------- | -------- | ------------------------------------------------ |
| `_id`           | ObjectId | Unique ID referencing each individual game       |
| `overall`       | Number   | Overall rating from 1 to 5                       |
| `difficulty`    | Number   | Rating of the game's difficulty from 1 to 5      |
| `graphics`      | Number   | Rating of the game's visual graphics from 1 to 5 |
| `replayability` | Number   | Rating of the game's replay value from 1 to 5    |

Notes:

- `_id` is a automatically created by `mongoose`

## Additional Notes
