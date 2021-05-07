let wobotGroundZone = 'wobot_ground_zone';
let wobotGroundPopup = 'wobot_ground_popup';
let wobotGroundText = "Welcome hitchiker to 42 Wolfsburg.";


WA.onEnterZone(wobotGroundZone, () => {
    currentPopup =  WA.openPopup(wobotGroundPopup, wobotGroundText,[])
})

WA.onLeaveZone(wobotGroundZone, closePopUp);

function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}
