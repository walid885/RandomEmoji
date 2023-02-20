const btnEl = document.getElementById("btn");

const textEl = document.getElementById("text")
const emoji = []; 
async function getEmoji(){
    let response = await fetch("https://emoji-api.com/emojis?access_key=ad52c5fe5b97d775333aab2f6aebaea4d04b3815");
    data = await response.json()
    for(let i=0 ; i<1500; i++){
        emoji.push({
            emojiName:data[i].character,
            emojiCode : data[i].unicodeName,
        })
    }
}
getEmoji()
console.log(emoji);

btnEl.addEventListener("click",()=>{
    const randomNum = Math.floor(Math.random()*emoji.length)
    btnEl.innerText = emoji[randomNum].emojiName; 
    textEl.innerText = emoji[randomNum].emojiCode;
})