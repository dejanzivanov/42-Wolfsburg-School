let wobotAuditoriumZone = 'wobot_auditorium_zone';
let wobotAuditoriumPopup = 'wobot_auditorium_popup';
let wobotAuditoriumText = "Welcome hitchiker to our Auditorium. Todays topic is: 'What is the answer to the Ultimate Question of Life, the Universe, and Everything?'.";


function ajax(a,b,c){//url,function,just a placeholder
c=new XMLHttpRequest;
c.open('GET',a);
c.onload=b;
c.send()
}

function alertTxt(){
console.log(this.response)
}

window.onload=function(){
ajax('placeholder.txt',alertTxt)
}

WA.onEnterZone(wobotAuditoriumZone, () => {
    currentPopup =  WA.openPopup(wobotAuditoriumPopup, wobotAuditoriumText,[])
})

WA.onLeaveZone(arrowZoneName, closePopUp);

function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}
