fetch('https://api.github.com/users/Swastik2442/repos')
  .then(response => response.json())
  .then(function(data) {

  let description = [];
  let full_name = [];
  let url = [];
  let upd = [];
  let updat = [];
  
  for (let item of data) {
    description.push(item.description);
    full_name.push(item.full_name);
    url.push(item.html_url);
    upd.push(Date.parse(item.updated_at))
  }
  let len =  full_name.length - 1;
  let arr = [];
  while(arr.length < 6){
    var r = Math.floor(Math.random() * len) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
  }
  for (let no in upd) {
    var datedat = new Date(upd[no])
    updat.push(datedat.toString().slice(4, 16));
  }
  document.getElementById("p1-name").innerHTML = "<a href=" + url[arr[0]] + ">" + full_name[arr[0]] + "</a>";
  document.getElementById("p1-desc").innerHTML = description[arr[0]];
  document.getElementById("p1-foot").innerHTML = "Last updated: " + updat[arr[0]];
  document.getElementById("p2-name").innerHTML = "<a href=" + url[arr[1]] + ">" + full_name[arr[1]] + "</a>";
  document.getElementById("p2-desc").innerHTML = description[arr[1]];
  document.getElementById("p2-foot").innerHTML = "Last updated: " + updat[arr[1]];
  document.getElementById("p3-name").innerHTML = "<a href=" + url[arr[2]] + ">" + full_name[arr[2]] + "</a>";
  document.getElementById("p3-desc").innerHTML = description[arr[2]];
  document.getElementById("p3-foot").innerHTML = "Last updated: " + updat[arr[2]];
  document.getElementById("p4-name").innerHTML = "<a href=" + url[arr[3]] + ">" + full_name[arr[3]] + "</a>";
  document.getElementById("p4-desc").innerHTML = description[arr[3]];
  document.getElementById("p4-foot").innerHTML = "Last updated: " + updat[arr[3]];
  document.getElementById("p5-name").innerHTML = "<a href=" + url[arr[4]] + ">" + full_name[arr[4]] + "</a>";
  document.getElementById("p5-desc").innerHTML = description[arr[4]];
  document.getElementById("p5-foot").innerHTML = "Last updated: " + updat[arr[4]];
  document.getElementById("p6-name").innerHTML = "<a href=" + url[arr[5]] + ">" + full_name[arr[5]] + "</a>";
  document.getElementById("p6-desc").innerHTML = description[arr[5]];
  document.getElementById("p6-foot").innerHTML = "Last updated: " + updat[arr[5]];
});

function loadingGG() {
    setTimeout(function () {
        document.getElementById("aload").style = "";
        document.getElementById("bload").style = "display: none;";
    }, 2500);
}

function darkToggle() {
  document.body.classList.toggle("dark-mode");
  document.getElementById("site-head").classList.toggle("nav_custom-dark")
  document.getElementById("head-link1").classList.toggle("nav_custom-dark")
  document.getElementById("head-link2").classList.toggle("nav_custom-dark")
  document.getElementById("head-link3").classList.toggle("nav_custom-dark")
  document.getElementById("head-link4").classList.toggle("nav_custom-dark")
  document.getElementById("contacts").classList.toggle("nav_custom-dark")
  if (document.getElementById("flexSwitchCheckDefault").checked == true){
    document.getElementById("darkTogImg").innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" enable-background=\"new 0 0 20 20\" viewBox=\"0 0 20 20\" height=\"30\" width=\"24\"><rect fill=\"none\" height=\"30\" width=\"24\"/><path d=\"M8.04,4.86C7.88,5.39,7.8,5.94,7.8,6.5c0,3.14,2.56,5.7,5.7,5.7c0.56,0,1.11-0.08,1.64-0.24c-0.79,2.07-2.8,3.54-5.14,3.54 c-3.03,0-5.5-2.47-5.5-5.5C4.5,7.66,5.97,5.65,8.04,4.86z M10,3c-3.87,0-7,3.13-7,7s3.13,7,7,7s7-3.13,7-7 c0-0.36-0.03-0.72-0.08-1.06C16.16,10,14.91,10.7,13.5,10.7c-2.32,0-4.2-1.88-4.2-4.2c0-1.41,0.7-2.66,1.76-3.42 C10.72,3.03,10.36,3,10,3L10,3z\"/></svg>"
  } else {
    document.getElementById("darkTogImg").innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" enable-background=\"new 0 0 20 20\" viewBox=\"0 0 20 20\" height=\"30\" width=\"24\"><rect fill=\"none\" height=\"30\" width=\"24\"/><path d=\"M10,7.5c1.38,0,2.5,1.12,2.5,2.5s-1.12,2.5-2.5,2.5S7.5,11.38,7.5,10S8.62,7.5,10,7.5z M10,6c-2.21,0-4,1.79-4,4s1.79,4,4,4 s4-1.79,4-4S12.21,6,10,6L10,6z M3.75,10.75c0.41,0,0.75-0.34,0.75-0.75c0-0.41-0.34-0.75-0.75-0.75h-2C1.34,9.25,1,9.59,1,10 s0.34,0.75,0.75,0.75H3.75z M18.25,10.75c0.41,0,0.75-0.34,0.75-0.75c0-0.41-0.34-0.75-0.75-0.75h-2c-0.41,0-0.75,0.34-0.75,0.75 s0.34,0.75,0.75,0.75H18.25z M9.25,3.75C9.25,4.16,9.59,4.5,10,4.5c0.41,0,0.75-0.34,0.75-0.75v-2C10.75,1.34,10.41,1,10,1 S9.25,1.34,9.25,1.75V3.75z M13.89,5.05c-0.29,0.29-0.29,0.77,0,1.06s0.77,0.29,1.06,0l1.06-1.06c0.29-0.29,0.29-0.77,0-1.06 c-0.29-0.29-0.77-0.29-1.06,0L13.89,5.05z M3.99,14.95c-0.29,0.29-0.29,0.77,0,1.06s0.77,0.29,1.06,0l1.06-1.06 c0.29-0.29,0.29-0.77,0-1.06c-0.29-0.29-0.77-0.29-1.06,0L3.99,14.95z M5.05,6.11c0.29,0.29,0.77,0.29,1.06,0s0.29-0.77,0-1.06 L5.05,3.99c-0.29-0.29-0.77-0.29-1.06,0s-0.29,0.77,0,1.06L5.05,6.11z M14.95,16.01c0.29,0.29,0.77,0.29,1.06,0s0.29-0.77,0-1.06 l-1.06-1.06c-0.29-0.29-0.77-0.29-1.06,0c-0.29,0.29-0.29,0.77,0,1.06L14.95,16.01z M9.25,18.25C9.25,18.66,9.59,19,10,19 c0.41,0,0.75-0.34,0.75-0.75v-2c0-0.41-0.34-0.75-0.75-0.75s-0.75,0.34-0.75,0.75V18.25z\"/></svg>"
  }
}