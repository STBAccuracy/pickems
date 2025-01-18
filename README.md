# Pickems

This is the active branch for the project. Refer to the todos at the bottom for current progress.


# How to run it
1) To run it on your own machine make a .env file in the root directory with the following
``` js
  VITE_FIREBASE_APIKEY = ""
  VITE_FIREBASE_AUTH_DOMAIN = ""
  VITE_FIREBASE_PROJECT_ID = ""
  VITE_FIREBASE_STORAGE_BUCKET = ""
  VITE_FIREBASE_MESSAGE_SENDER_ID = "" 
  VITE_FIREBASE_APP_ID = ""
  VITE_FIREBASE_MEASUREMENT_ID = ""
```
2) Make sure that you have firebase set up with a firestore database with rules allowing reads and writes.
3) Use (npm install) to download all necessary modules/libraries.

## Todos
Authentication (user)
- [X] Email register/login
- [X] Email password reset
- [X] Email account verification (verify account)
- [ ] Email restrict accounts to "edu.au" accounts.
- [ ] Check to see if the name has already been used

Database
- [X] Set up database (with how data is stored)
- [ ] Configure read/write perms
- [X] Store pickems

Pickem (admin)
- [X] Create a teams
- [ ] Store a team's image
- [X] Create a match
- [X] Pick a winner
- [X] Update all user scores after a winner is chosen
- [ ] Option to update leaderboard

Pickem (user)
- [X] Choose a team for each pickem
- [X] Rechoose pickems
- [X] See current score
