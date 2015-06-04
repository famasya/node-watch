var watch = require('watch')
watch.createMonitor('/home/famasya/Works/nodejs/watchfile', function (monitor) {
  monitor.files['/home/famasya/Works/nodejs/watchfile/data.txt'] 
  monitor.on("created", function (f, stat) {
    console.log("created");
  })
  monitor.on("changed", function (f, curr, prev) {
    console.log("changed");
  })
  monitor.on("removed", function (f, stat) {
   console.log("removed");
 })
//  monitor.stop();
})