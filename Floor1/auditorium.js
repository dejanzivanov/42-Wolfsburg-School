let wobotAuditoriumZone = 'wobot_auditorium_zone';
let wobotAuditoriumPopup = 'wobot_auditorium_popup';
let wobotAuditoriumText = "Welcome hitchiker to our Auditorium. Todays topic is: 'What is the answer to the Ultimate Question of Life, the Universe, and Everything?'.";


WA.onEnterZone(wobotAuditoriumZone, () => {
    currentPopup =  WA.openPopup(wobotAuditoriumPopup, wobotAuditoriumText,[])
})

WA.onLeaveZone(wobotAuditoriumZone, closePopUp);

function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}
