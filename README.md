# DISCOVIFY

DISCOVIFY is a React-based music recommendation that makes heavy use of Spotify's web api. Users can authenticate using a Spotify account, and can then search for music based on several parameters, or alternatively, have a search made for you, based on your profile's most streamed songs. Songs can be viewed individualy by clicking on them, and if desired, a playlist can be created with these results by simply pressing its respective button underneath the recommendations.

https://discovify-57edf8e39469.herokuapp.com/#

![Desktop Wireframe](./public/screenshots/discovify-screenshot-1.png)

## TECH USED:

### Languages:

- JavaScript
- HTML
- CSS

### Frameworks/Libraries/APIs:

- React
- Spotify Web API

### Software/Services:

- VSCodium
- Figma
- Heroku

## HOW TO USE:
### Signing In:
Upon opening the app, you will be prompted to authenticate with your Spotify account. After doing so, you will be greeted with a search panel on the left, and a results panel on the right.

### Searching:
In the search panel, you can fine-tune what you're looking for based on different song features and genres. Alternatively, you can simply press "FOR ME" to have a list of songs curated to your specific tastes fill the results panel.

### Recommendation Results: 
Once recommendations are visible, you can scroll through the results panel on the right to view them, clicking on a song will take you to that song's Spotify page, and if you desire, you can click the "CREATE PLAYLIST" button below, to turn your recommendations into a Spotify playlist on your account for you to easily listen to. (These playlists are private by default, but can be made public from your Spotify account)

## ICEBOX FEATURES:

In the future, I intend to add:

- Timeframe length filtering for user's personalized recommendations
- The ability to search for more media types than just songs (albums, artists, podcasts, etc)
- The option to disable individual sliders if a user has no preference on a certain song attribute
- The ability to search for non-personalized music without authenticating
- A delay for the playlist button, to help prevent accidentally making the same one multiple times
- A brief css animation for loading in song recommendations
- Fitler song popularity by artist popularity instead, as the current song popularity parameter only takes the popularity of a song relative to its artist's other songs
- The ability to use the web player API to sample recommended songs
- A more polished and professional looking UI
- More variation in the personalized song recommendations

## UPDATE LOG:

### 12/21/2023 Original Sprint Finished - v1.0

- Basic features implemented over one-week sprint
