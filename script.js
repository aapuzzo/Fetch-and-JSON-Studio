window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(json){
            console.log(json)
            const container = document.getElementById("container");
            //json.sort((a, b) => (a.hoursInSpace < b.hoursInSpace) ? 1 : -1)
            json.sort(function(a, b){return b.hoursInSpace - a.hoursInSpace})
            // for (i=0;i < json.length; i++) {
            //     for (j=0; j < json.length - 1; j++){
            //         if (json[j].hoursInSpace < json[j+1].hoursInSpace){
            //             let tempVal = json[j].hoursInSpace;
            //             json[j].hoursInSpace = json[j+1].hoursInSpace;
            //             json[j+1].hoursInSpace = tempVal; 
            //         }
            //     }
            // }    
           
            for(let i in json){
                if(json[i].active === true){
                    container.innerHTML += `
                    <div class="astronaut">
                        <div class="bio">
                            <h3>${json[i].firstName} ${json[i].lastName}</h3>
                            <ul>
                                <li>Hours in space: ${json[i].hoursInSpace}</li>
                                <li id="active">Active: ${json[i].active}</li>
                                <li>Skills: ${json[i].skills.join(', ')}</li>
                            </ul>
                        </div>
                        <img class="avatar" src=${json[i].picture}>
                    </div>
                `    
                }
                else{
                    container.innerHTML += `
                    <div class="astronaut">
                        <div class="bio">
                            <h3>${json[i].firstName} ${json[i].lastName}</h3>
                            <ul>
                                <li>Hours in space: ${json[i].hoursInSpace}</li>
                                <li id="inactive">Active: ${json[i].active}</li>
                                <li>Skills: ${json[i].skills.join(', ')}</li>
                            </ul>
                        </div>
                        <img class="avatar" src=${json[i].picture}>
                    </div>
                ` 
                }
            }
        });
    });
});