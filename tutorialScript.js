var firstTimeTutorial = false;
var firstPopupText = 'Hey ! This is the way how to start communication with someone! Beep Booop!';
var secondPopupText = 'You can also use the chat to communicate! ';
var tutorialBubble ='tutorial_popup';
var tutorialChat ='tutorial_chat_popup';
var tutorialExplanation ='tutorial_explanation_popup';
var popupExplanation = undefined;
function launchTutorial (){
    WA.ui.openPopup(tutorialBubble, firstPopupText, [
        {
            label: "Next",
            className: "popUpElement",
            callback: (popup) => {
                popup.close();

                WA.ui.openPopup(tutorialChat, secondPopupText, [
                    {
                        label: "Open Chat",
                        className: "popUpElement",
                        callback: (popup1) => {
                            WA.sendChatMessage("Hey we can talk here too! Beep Boop", 'Wobot');
                            popup1.close();
                            WA.ui.openPopup("tutorial_final_popup","You are good to go! Go through the stairs and meet our wonderful school. Beep Boop",[
                                {
                                    label: "Got it!",
                                    className : "success",callback:(popup2 => {
                                        popup2.close();
                                        WA.restorePlayerControl();
                                    })
                                }
                            ])
                        }
                    }

                ])
            }
        }
    ]);
    WA.disablePlayerControl();

}


WA.room.onEnterZone('popupZone', () => {
    WA.ui.displayBubble();
    if (!firstTimeTutorial) {
        firstTimeTutorial = true;
        launchTutorial();
    }
    else {
        popupExplanation = WA.ui.openPopup(tutorialExplanation, 'Do you want to review the explanation?', [
            {
                label: "No",
                className: "error",
                callback: (popup) => {
                    popup.close();
                }
            },
            {
                label: "Yes",
                className: "success",
                callback: (popup) => {
                    popup.close();
                    launchTutorial();
                }
            }
        ])
    }
});

WA.room.onLeaveZone('popupZone', () => {
    if (popupExplanation !== undefined) popupExplanation.close();
    WA.ui.removeBubble();
});

let arrowZoneName = 'arrow_zone';
let wasdZoneName = 'wasd_zone';
let shiftZoneName = 'shift_zone';
let bookZoneName = 'book_zone';
let eggZoneName = 'egg_zone';

let arrowPopup = 'arrow_popup';
let wasdPopup = 'wasd_popup';
let shiftPopup = 'shift_popup';
let bookPopupVariable = 'book_popup';

let arrowText = "The use of arrow keys in games has come back into fashion from the late 1980s and early 1990s.";
let wasdText = "Dark Castle (1986) may be the first game to use WASD keys and mouse for control.";
let shiftText = "Gotta Go Fast!";
let bookText = "'Lifelong Kindergarten: Cultivating Creativity through Projects, Passion, Peers, and Play' by Mitchel Resnick";

WA.room.onEnterZone(arrowZoneName, () => {
    currentPopup =  WA.ui.openPopup(arrowPopup, arrowText,[])
})

WA.room.onLeaveZone(arrowZoneName, closePopUp);

WA.room.onEnterZone(wasdZoneName, () => {
    currentPopup =  WA.ui.openPopup(wasdPopup, wasdText,[{
	    label: "Close",
  className: "deki",
  callback: (popup) => {
      // Close the popup when the "Close" button is pressed.
      popup.close();
  }
    }]);
})

WA.room.onLeaveZone(wasdZoneName, closePopUp);

WA.room.onEnterZone(shiftZoneName, () => {
    currentPopup =  WA.ui.openPopup(shiftPopup, shiftText,[]);
})

WA.room.onLeaveZone(shiftZoneName, closePopUp);

WA.room.onEnterZone(bookZoneName, () => {
    currentPopup =  WA.ui.openPopup(bookPopupVariable, bookText,[]);
})

WA.room.onLeaveZone(bookZoneName, closePopUp);

WA.room.onEnterZone(eggZoneName, () => {
    WA.openTab("https://en.wikipedia.org/wiki/Easter_egg_(media)");
})
	//easter egg link: https://www.notion.so/42wolfsburg/3-Easter-Egg-Page-ba26652a736a404cac2cc4432113280d
function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}

















//var canvas = document.getElementByID('game').getElementByTag('canvas');

//canvas.addListener('click', function() { console.log(123); }, false);

//var x = document.querySelector("#game > canvas")
//console.log(x);

//WA.sendChatMessage("Hey you discovered an egg, you can check it out here: https://www.notion.so/42wolfsburg/3-Easter-Egg-Page-ba26652a736a404cac2cc4432113280d", 'Wobot');
//WA.openTab("https://www.notion.so/42wolfsburg/3-Easter-Egg-Page-ba26652a736a404cac2cc4432113280d")


//WA.onChatMessage('https://www.notion.so/42wolfsburg/3-Easter-Egg-Page-ba26652a736a404cac2cc4432113280d');
