document.querySelector("#btn").addEventListener('click', makeReq);


async function makeReq() {
    const imgNum = Math.round(Math.random()*124)
    const res = await fetch(`api/images/${imgNum}`);
    const data = await res.json();

    console.log(data.imgUrl);
    document.querySelector("#img").src = data.imgUrl;
};


const image = document.querySelector('img');


    function saturate(){
        console.log("saturation 150%");
        image.style.filter = "saturate(200%)";
    }
    function desaturate(){
        console.log("saturation 50%");
        image.style.filter = "saturate(50%)";
    }
    function monochrome(){
        console.log("saturation 0%");
        image.style.filter = "saturate(0%)";
    }
    function revertToOriginal(){
        console.log('saturation 100%');
        image.style.filter = "saturate(100%)"
    }

document.querySelector('#sat').addEventListener('click', saturate);

document.querySelector('#desat').addEventListener('click', desaturate);

document.querySelector('#satzero').addEventListener('click', monochrome);

document.querySelector('#revert').addEventListener('click', revertToOriginal);

// document.querySelector('#clickMe').addEventListener('click', makeReq)

// async function makeReq(){

//   const userName = document.querySelector("#userName").value;
//   const res = await fetch(`/api?student=${userName}`)
//   const data = await res.json()

//   console.log(data);
//   document.querySelector("#personName").textContent = data.name
//   document.querySelector("#personStatus").textContent = data.status
//   document.querySelector("#personOccupation").textContent = data.currentOccupation
// }

// fetch("https://api.nasa.gov/planetary/apod?api_key=XWUpXEwDC4qrETVTVchh5OBfVtipKUlfoWTV8aXz")
//  .then(res => res.json()) // parse response as JSON
//  .then(data => {
//    console.log(data)
//    if(data.media_type === "video"){
//        document.querySelector('iframe').src = data.url;
//    }else{
//        document.querySelector("#apodImage").src = data.url
//        document.querySelector("iframe").style.display = "none";
//    }
//    document.querySelector("#apodExp").innerText = data.explanation
//    document.querySelector("#apodTitle").innerText = data.title
//  })  
//  .catch(err => {
//      console.log(`error ${err}`)
//  });

