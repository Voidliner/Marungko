const bg_1 = document.createElement("img");
bg_1.src = "image/image_1.jpg";
bg_1.style.position = "relative";
bg_1.style.top = "300px";
bg_1.style.left = "50%";
bg_1.style.width = "105%"; 
bg_1.style.height = "108vh";
bg_1.style.transform = "translate(-50%, -50%)";

const bg_1Cover = document.createElement("div");
bg_1Cover.style.position = "absolute";
bg_1Cover.style.top = "0px";
bg_1Cover.style.left = "50%";
bg_1Cover.style.width = "120%"; 
bg_1Cover.style.height = "195vh";
bg_1Cover.style.backgroundColor = "black";
bg_1Cover.style.opacity = "0.5";
bg_1Cover.style.transform = "translate(-50%, -50%)";

const title = document.createElement("h1");
title.innerHTML = "Your Journey Begins Here";
title.style.position = "absolute";
title.style.top = "40%";
title.style.left = "50%";
title.style.width = "70%";
title.style.color = "white";
title.style.fontSize = "50px";
title.style.fontFamily = "Helvetica";
title.style.transform = "translate(-50%, -50%)";
title.style.transition = "opacity 1.2s ease-in-out, top 1s ease-in-out";
title.style.opacity = "0";
title.style.textShadow = "-1px -1px 0px black, " + "1px -1px 0px black, " + "-1px 1px 0px black, " + "1px 1px 0px black";
title.style.display = "flex";
title.style.justifyContent = "center"; 
title.style.textAlign = "center";

const GetStarted_Button = document.createElement("div");
GetStarted_Button.innerHTML = "Get Started";
GetStarted_Button.style.position = "absolute";
GetStarted_Button.style.top = "450px";
GetStarted_Button.style.left = "50%";
GetStarted_Button.style.width = "350px"; 
GetStarted_Button.style.height = "8%";
GetStarted_Button.style.color = "white";
GetStarted_Button.style.fontSize = "40px";
GetStarted_Button.style.fontWeight = "300";
GetStarted_Button.style.fontFamily = "Helvetica";
GetStarted_Button.style.display = "flex";
GetStarted_Button.style.textAlign = "center";
GetStarted_Button.style.alignItems = "center";
GetStarted_Button.style.justifyContent = "center"; 
GetStarted_Button.style.borderRadius = "20px";
GetStarted_Button.style.outline = "2px solid white";
GetStarted_Button.style.transition = "background-color 0.3s, color 0.3s, opacity 1.2s ease-in-out, top 1s ease-in-out";
GetStarted_Button.style.transform = "translate(-50%, -50%)";
GetStarted_Button.style.cursor = "pointer";
GetStarted_Button.style.opacity = "0";

const ReadTitle = document.createElement("h1");
ReadTitle.innerHTML = "Start Reading Now";
ReadTitle.style.position = "absolute";
ReadTitle.style.top = "120%";
ReadTitle.style.left = "50%";
ReadTitle.style.width = "90%";
ReadTitle.style.color = "white";
ReadTitle.style.fontSize = "50px";
ReadTitle.style.fontFamily = "Helvetica";
ReadTitle.style.transform = "translate(-50%, -50%)";
ReadTitle.style.transition = "opacity 1.2s ease-in-out, top 1s ease-in-out";
ReadTitle.style.opacity = "0";
ReadTitle.style.textShadow = "-1px -1px 0px black, " + "1px -1px 0px black, " + "-1px 1px 0px black, " + "1px 1px 0px black";
ReadTitle.style.display = "flex";
ReadTitle.style.justifyContent = "center"; 
ReadTitle.style.textAlign = "center";

const bg_2 = document.createElement("img");
bg_2.id = "bg_2";
bg_2.src = "image/image_2.jpg";
bg_2.style.position = "relative";
bg_2.style.top = "265px";
bg_2.style.left = "50%";
bg_2.style.width = "100vw"; 
bg_2.style.height = "100vh";
bg_2.style.transform = "translate(-50%, -50%)";
bg_2.style.transition = "opacity 0.5s ease-in-out";
bg_2.style.opacity = "0";

const bg_2Cover = document.createElement("div");
bg_2Cover.style.position = "absolute";
bg_2Cover.style.top = "692px";
bg_2Cover.style.left = "0";
bg_2Cover.style.width = "120%"; 
bg_2Cover.style.height = "100vh";
bg_2Cover.style.backgroundColor = "black";
bg_2Cover.style.transition = "opacity 0.5s ease-in-out";
bg_2Cover.style.opacity = "0";

const ReadMore_Button = document.createElement("div");
ReadMore_Button.innerHTML = "Read More";
ReadMore_Button.style.position = "absolute";
ReadMore_Button.style.top = "980px";
ReadMore_Button.style.left = "50%";
ReadMore_Button.style.width = "350px"; 
ReadMore_Button.style.height = "8%";
ReadMore_Button.style.color = "white";
ReadMore_Button.style.fontSize = "40px";
ReadMore_Button.style.fontWeight = "300";
ReadMore_Button.style.fontFamily = "Helvetica";
ReadMore_Button.style.display = "flex";
ReadMore_Button.style.textAlign = "center";
ReadMore_Button.style.alignItems = "center";
ReadMore_Button.style.justifyContent = "center"; 
ReadMore_Button.style.borderRadius = "20px";
ReadMore_Button.style.outline = "2px solid white";
ReadMore_Button.style.transition = "background-color 0.3s, color 0.3s, opacity 1.2s ease-in-out, top 1s ease-in-out";
ReadMore_Button.style.transform = "translate(-50%, -50%)";
ReadMore_Button.style.cursor = "pointer";
ReadMore_Button.style.opacity = "0";

const ReadBody = document.createElement("h1");
ReadBody.innerHTML = "Beginner reading is the foundation of literacy, where new readers learn to recognize letters, connect sounds, and build vocabulary. Simple stories with familiar words and short sentences help readers gain confidence and enjoyment. Colorful illustrations and supportive text encourage curiosity, laying the groundwork for a lifelong love of reading.";
ReadBody.style.position = "absolute";
ReadBody.style.top = "150%";
ReadBody.style.left = "50%";
ReadBody.style.width = "70%";
ReadBody.style.color = "white";
ReadBody.style.fontSize = "20px";
ReadBody.style.fontFamily = "Helvetica";
ReadBody.style.transform = "translate(-50%, -50%)";
ReadBody.style.transition = "opacity 1.2s ease-in-out, top 1s ease-in-out";
ReadBody.style.opacity = "0";
ReadBody.style.textShadow = "-1px -1px 0px black, " + "1px -1px 0px black, " + "-1px 1px 0px black, " + "1px 1px 0px black";
ReadBody.style.display = "flex";
ReadBody.style.justifyContent = "center"; 
ReadBody.style.textAlign = "center";

document.body.append(bg_1);
document.body.append(bg_1Cover);
document.body.append(title);
document.body.append(GetStarted_Button);


function loadAnimation(){
	title.style.top = "30%";
	title.style.opacity = "1"

	setTimeout(() => { GetStarted_Button.style.opacity = "1";}, 0);
	setTimeout(() => { GetStarted_Button.style.top = "400px";}, 300);
	}
function adjustBackground() {
    if (window.innerWidth < 1000) {
	bg_1.style.width = "1500px";
	bg_2.style.width = "1500px";
    	bg_1.style.height = auto;
	bg_2.style.height = auto;	
	}
    bg_1.style.width = "1500px"; 
    bg_2.style.width = window.innerWidth + "px";
    bg_1.style.height = auto; 
    bg_2.style.height = auto;
}


GetStarted_Button.addEventListener("mouseover", () => {
    GetStarted_Button.style.backgroundColor = "white";
    GetStarted_Button.style.color = "black";
	});

GetStarted_Button.addEventListener("mouseout", () => {
    GetStarted_Button.style.backgroundColor = "transparent";
    GetStarted_Button.style.color = "white";
	});

GetStarted_Button.addEventListener("click", () => {
    document.body.append(bg_2);
    document.body.append(bg_2Cover);
    document.body.append(ReadTitle);
    document.body.append(ReadMore_Button);
    const targetElement = document.getElementById("bg_2");  // Use the variable to access the element
    targetElement.scrollIntoView({ behavior: "smooth" });
      
    setTimeout(() => { ReadMore_Button.innerHTML = "Read More";}, 0);
    setTimeout(() => { ReadMore_Button.style.top = "980px";}, 0);
    setTimeout(() => { ReadBody.style.opacity = "0";}, 0);
    setTimeout(() => { ReadTitle.innerHTML = "Start Reading";}, 0);
    setTimeout(() => { bg_2.style.opacity = "1";}, 500);
    setTimeout(() => { bg_2Cover.style.opacity = "0.5";}, 500);
    setTimeout(() => { ReadTitle.style.opacity = "1";}, 800);
    setTimeout(() => { ReadMore_Button.style.opacity = "1";}, 1000);
	});

ReadMore_Button.addEventListener("click", () => {
	if (ReadMore_Button.innerHTML == "Read More"){
        setTimeout(() => { ReadTitle.style.opacity = "0";}, 0);
        setTimeout(() => { ReadMore_Button.style.opacity = "0";}, 0);
        setTimeout(() => { ReadTitle.innerHTML = "A Guide to Beginner Reading";}, 1200);
	setTimeout(() => { document.body.append(ReadBody);}, 1200);
	setTimeout(() => { ReadMore_Button.style.top = "1250px";}, 1300);
	setTimeout(() => { ReadTitle.style.opacity = "1";}, 1600);
        setTimeout(() => { ReadBody.style.opacity = "1";}, 1700);
	setTimeout(() => { ReadBody.innerHTML = "Beginner reading is the foundation of literacy, where new readers learn to recognize letters, connect sounds, and build vocabulary. Simple stories with familiar words and short sentences help readers gain confidence and enjoyment. Colorful illustrations and supportive text encourage curiosity, laying the groundwork for a lifelong love of reading.";}, 1700);
	setTimeout(() => { ReadMore_Button.innerHTML = "Start Reading";}, 1200);
	setTimeout(() => { ReadMore_Button.style.opacity = "1";}, 3000);
		}
	});

window.addEventListener("load", loadAnimation);
window.addEventListener("load", adjustBackground());
window.addEventListener("resize", adjustBackground());


// Add event listener for window resize
window.addEventListener("resize", adjustBackground);
