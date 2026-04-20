//BOM -->

//& LOCATION ONJECT

// 1. href

// let crur1 = location.href
// console.log(crur1)

// location.href = "https://www.google.com"

//2. hostname
// let hostname = location.hostname
// console.log(hostname);

//3. host
// let host = location.hostname
// console.log(host);

//4. protocol
// let protocol = location.protocol;
// console.log(protocol);

//5. port
// let port = location.port;
// console.log(port);

//6. search
// let search = location.search; // it will give the query string of the url after the ? mark
// console.log(search);

//7. pathname
// let pathname = location.pathname; // it will give the path of the url after the domain name
// console.log(pathname);

//& methods in location object

//1. assign
// let url = "https://www.google.com";
// location.assign(url); // it will navigate to the url and add the url in the history stack

//2. reload
// location.reload();

//3. replace
// let url = "https://www.google.com";
// location.replace(url); // it will navigate to the url but it will not add the url in the history stack

//4. reload(true)
location.reload();
// location.reload(true); // it will reload the page from the server

//5. reload(false)
// location.reload(false); // it will reload the page from the cache

// methods in location object--->
//1. assign()  -->can track history
// let url = "https://www.google.com"
// location.assign(url)

//2. replace  --> can not track history
// let url = "https://www.google.com"
// location.replace(url)

//3. relode
// location.reload()
// location.reload('true')

// screan object---->
// 1. screean width
// let width = screen.width
// console.log(width)

// screen height
// let height = screen.height
// console.log(height)

// available width
// let awidth = screen.availWidth
// console.log(awidth)

//available height
// let aheight = screen.availHeight
// console.log(aheight)

// screen color depth
// console.log(screen.colorDepth)

// history
// let data = History.length;
// console.log(data);

// console.log(history);

// history.back();
// history.forward();
// history.go();

