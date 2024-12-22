const output = document.getElementById("output");
function setCookies() {
   document.cookie = "username=abcd;domain:tutorialspoint.com;expires=Tue, 22 Aug 2023 12:00:00 UTC;";
}
function readCookies() {
   const allCookies = document.cookie.split("; ");
   output.innerHTML = "The cookie is : <br>";
   for (const cookie of allCookies) {
      const [key, value] = cookie.split("=");
      if (key == "username") {
         output.innerHTML += `${key} : ${decodeURIComponent(value)} <br>`;
      }
   }
}