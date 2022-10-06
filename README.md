# Description

This app renders a google map and places a random company and user on this map as markers.

Company's and user's data is random and is provided by faker api.

Map, User and Company are plain Javascript classes.

Typescript was mainly used to create an interface - Mappable. This interface serves as a gatekeeper for the addMarker() method of the Map class.

Generic description of the Map class and Mappable interface allows us to use any Object as an argument for the addMarker() method which creates markers on the map.

# Available Scripts

In the project directory, you can run:

## parcel index.html

Parcel-bundler helps us to run the app in the browser.

Open http://localhost:1234 to view it in your browser.
