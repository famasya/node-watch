# node-watch
Looking for file changes, and when push it to the browser.
###Known issues
Delay time still not solved. When I make changes on file, it took few seconds to recognize the changes by node (using Elementary OS, Ubuntu derived). Thus when there is rapid changes on file it might not be displayed.
This is what I tried:
+ Using [fs.watchFile and fs.watch](https://nodejs.org/api/fs.html). Unstable.
+ Using watch [npm watch](https://www.npmjs.com/package/watch). Still delayed.

I have some ideas to solve it. Just looking for a time.
