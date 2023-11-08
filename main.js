const ShortBtn = document.getElementById("short-btn");
const ReloadBtn = document.getElementById("reload-btn");

ShortBtn.addEventListener('click', ShortenUrl);
function ShortenUrl(){
    var urlToShorten = document.getElementById("originalUrl").value;
    var ShortenedUrlText = document.getElementById("shortenedUrl");
    var apiUrl = "https://tinyurl.com/api-create.php?url=" + encodeURIComponent(urlToShorten);
    fetch(apiUrl).then(response => response.text()).then(data => {
        ShortenedUrlText.value = data;
    }).catch(error => {
        ShortenedUrlText.value = "Error: Unable to shorten url!";
    });
};
ReloadBtn.addEventListener('click', () => {
    location.reload();
});