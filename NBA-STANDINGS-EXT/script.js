async function fetchData() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '6549c8928emshc3162f19c808a92p15cb8djsn149af7efe129',
            'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
        }
    };
    
    const res = await fetch('https://api-nba-v1.p.rapidapi.com/standings?league=standard&season=2022', options)
    const record = await res.json()
    console.log('record', record)


    document.getElementById("teams").innerHTML = record.response.map(item => `<li>${item.team.name} <br> W : ${item.win.total} L : ${item.loss.total} <img src="${item.team.logo}" alt="Trulli" width="50" height="33"> </li>`).join('-');
}
fetchData(); 