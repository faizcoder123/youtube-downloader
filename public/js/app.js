
var convertBtn = document.querySelector('.convert-button');
var URLinput = document.querySelector('.URL-input');
convertBtn.addEventListener('click', () => {
   // console.log(`URL: ${URLinput.value}`);
    sendURL(URLinput.value);
});

function sendURL(URL) {
    // fetch('http://localhost:3000/download?URL='+URL, { // sending url data to this site url inform of json
    //     method:'GET'
    // }).then(res => res.json())
    // .then(json => console.log(json));
 //window.location.href returns the href (URL) of the current page
     window.location.href = '/download?URL='+URL;// will redirect to url ad download
     //window.open('http://www.google.com'); //This will open Google in a new window.
}
//So, we can see if we click on the button, we get a response back from the server with the URL that we send. Now we need to use ytdl-core which stand for YouTube DownLoader core which will download the video for us.
