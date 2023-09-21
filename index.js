const details = document.querySelector(".details");
const adviceId = document.querySelector(".advice-id");
fetch('https://api.adviceslip.com/advice')
.then(response=>{
   return response.json();
})
 .then(data =>{
    adviceId.textContent = `ADVICE # ${data.slip.id}`
    details.textContent = `${data.slip.advice}`
 })
 .catch(error => console.log(error));