let r = Math.floor(Math.random()*100)
let message = document.getElementById("message")
function guess(number){
          if (r<number) {
                    message.innerText= "daha kicik reqem daxil edin"
          }
          else if (r>number) {
                    message.innerText= "daha boyuk reqem yazin"
          }
          else {
                    message.innerText= "duzdur"
          };
}
