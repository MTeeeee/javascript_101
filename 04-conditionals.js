// if - else


let wetter = "regnet";


if (wetter === "sonnig") {
    console.log("Vergiss die Sonnenbrille nicht!");
} else {
    console.log("Du brauchst wohl einen Regenschirm.")
}

let time = 11;

if (time < 9) {
    console.log("Guten Morgen")
} else if (time < 18) {
    console.log("Guten Tag")
} else {
    console.log("Guten Abend!")
}


// &&     und Opperator
// ||     oder Opperator
// ! nicht Opperator

let vorname = "Bob";
let nachname = "Ross";

if (vorname === "Bob" && nachname === "Ross") {
    console.log("Happy little accidents :)")
}


// switch

let tag = "Freitag";

switch (tag) {
    case "Monday":
        console.log("Es ist Montag.");
        break;
    case "Dienstag":
        console.log("Es ist Dienstag");
        break;
    case "Mittwoch":
        console.log("Es ist Mittwoch meine leute.");
        break;
    case "Donnerstag":
        console.log("Es ist Donnerstag");
        break;
    case "Freitag":
        console.log("Es ist Freitag");
        break;
    case "Samstag":
        console.log("Es ist Samstag");
        break;
    case "Sonntag":
        console.log("Es ist Sonntag");
        break;
    default:
        console.log("Ungültiger Tag")
}


// Try Catch



try {
    if (wetter === "sonnig") {
        console.log(lol);
        console.log("Vergiss die Sonnenbrille nicht!");
    } else {
        console.log("Du brauchst wohl einen Regenschirm.");
    }
    }
    catch(err) {
        console.log("OOOOppppsiieeeee!");
    }