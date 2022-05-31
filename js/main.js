document.querySelector("#btn").addEventListener('click', makeReq);


async function makeReq() {
    const res = await fetch(`api/images/3`);
    const data = await res.json();

    console.log(data.imgUrl);
    document.querySelector("#img").src = data.imgUrl;
};

function alt(){
    console.log('shits working');
}


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

