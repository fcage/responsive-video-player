Module creates a responsive video player using the jwplayer.js video library

Notes:
Player doesn't respond gracefully to being resized by a tween in Firefox browsers. This is a fault of the player. It will reload the player and you will lose control of it with javascript if you chose to scale it with say jQuery animations.