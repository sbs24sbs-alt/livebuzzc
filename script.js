const loadLive = () => {
fetch("https://cricbuzz-cricket.p.rapidapi.com/matches/v1/live",{
 headers:{
  "X-RapidAPI-Key":"YOUR_API_KEY",
  "X-RapidAPI-Host":"cricbuzz-cricket.p.rapidapi.com"
 }
})
.then(res=>res.json())
.then(data=>{
 let html="";
 data.typeMatches[0].seriesMatches.forEach(s=>{
  s.seriesAdWrapper?.matches.forEach(m=>{
   html+=`<div class="match"><h3>${m.matchInfo.team1.teamName} vs ${m.matchInfo.team2.teamName}</h3><p>${m.matchInfo.status}</p></div>`;
  })
 })
 document.getElementById("matches").innerHTML=html;
})
}
loadLive();
setInterval(loadLive,30000);
