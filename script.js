const html = document.documentElement;
const body = document.body;

html.style.height = '100%';
body.style.height = '100%';
body.style.overflowY = 'scroll';

const header = document.createElement("div");
header.style.position = "absolute";
header.style.top = "0%";
header.style.left = "0%";
header.style.width = "100%";
header.style.backgroundColor = "gray";
header.style.height = "10%";

const Logo = document.createElement('div');
Logo.style.top = '50%'; 
Logo.style.left = '3%'; 
Logo.style.width = '50px'; 
Logo.style.height = '50px'; 
Logo.style.backgroundColor = 'white'; 
Logo.style.borderRadius = '50%'; 
Logo.style.position = 'absolute'; 
Logo.style.transform = 'translate(-50%, -50%)'; 

const MainPage = document.createElement("div");
MainPage.id = "MainPage";
MainPage.style.position = "absolute";
MainPage.style.top = "50%";
MainPage.style.left = "50%";
MainPage.style.width = "90%";
MainPage.style.height = "60%";
MainPage.style.backgroundColor = 'rgb(210, 210, 210)';
MainPage.style.transform = 'translate(-50%, -50%)'; 

const TitleText = document.createElement("h1");
TitleText.innerText = "Start Your Journey Here";
TitleText.id = "TitleText";
TitleText.style.position = "absolute";
TitleText.style.top = "20%";
TitleText.style.left = "0%";
TitleText.style.width = "100%";
TitleText.style.textAlign = "center";
TitleText.style.transform = 'translate(-50%, -50%)'; 
TitleText.style.transform = 'scale(2.5, 2)'; 
TitleText.style.transition = 'opacity 0.5s ease-in-out';

const BodyText = document.createElement("h3");
BodyText.innerText = "";
BodyText.id = "BodyText";
BodyText.style.position = "absolute";
BodyText.style.top = "30%";
BodyText.style.left = "8%";
BodyText.style.width = "50%";
BodyText.style.textAlign = "left";
BodyText.style.transform = 'translate(-50%, -50%)'; 
BodyText.style.transform = 'scale(1, 1)'; 
BodyText.style.transition = 'opacity 0.5s ease-in-out';
BodyText.style.opacity = "0";

const StartedButton = document.createElement("div");
StartedButton.id = "MainButton1";
StartedButton.innerText = "Get Started";
StartedButton.style.position = "absolute";
StartedButton.style.top = "65%";
StartedButton.style.left = "32%";
StartedButton.style.width = "25%";
StartedButton.style.height = "15%";
StartedButton.style.backgroundColor = "gray";
StartedButton.style.color = "white";
StartedButton.style.fontSize = "30px";
StartedButton.style.display = "flex";
StartedButton.style.alignItems = "center"; 
StartedButton.style.justifyContent = "center"; 
StartedButton.style.borderRadius = "35px";
StartedButton.style.transform = 'translate(-50%, -50%)'; 
StartedButton.style.transition = 'opacity 0.5s ease-in-out';
StartedButton.style.cursor = "pointer";

const LogInButton = document.createElement("div");
LogInButton.id = "MainButton2";
LogInButton.innerText = "Login";
LogInButton.style.position = "absolute";
LogInButton.style.top = "65%";
LogInButton.style.left = "68%";
LogInButton.style.width = "25%";
LogInButton.style.height = "15%";
LogInButton.style.backgroundColor = "gray";
LogInButton.style.color = "white";
LogInButton.style.fontSize = "30px";
LogInButton.style.display = "flex";
LogInButton.style.alignItems = "center"; 
LogInButton.style.justifyContent = "center"; 
LogInButton.style.borderRadius = "35px";
LogInButton.style.transform = 'translate(-50%, -50%)'; 
LogInButton.style.transition = 'opacity 0.5s ease-in-out';
LogInButton.style.cursor = "pointer";

const MainButton3 = document.createElement("div");
MainButton3.id = "MainButton3";
MainButton3.innerText = "";
MainButton3.style.position = "absolute";
MainButton3.style.top = "65%";
MainButton3.style.left = "68%";
MainButton3.style.width = "25%";
MainButton3.style.height = "15%";
MainButton3.style.backgroundColor = "gray";
MainButton3.style.color = "white";
MainButton3.style.fontSize = "30px";
MainButton3.style.display = "flex";
MainButton3.style.alignItems = "center"; 
MainButton3.style.justifyContent = "center"; 
MainButton3.style.borderRadius = "35px";
MainButton3.style.transform = 'translate(-50%, -50%)'; 
MainButton3.style.transition = 'opacity 0.5s ease-in-out';
MainButton3.style.cursor = "pointer";
MainButton3.style.opacity = "0";

const marungkoPage_1 = document.createElement("div");
marungkoPage_1.id = "Marungko_1 Page";
marungkoPage_1.style.position = "absolute";
marungkoPage_1.style.top = "-30%";  
marungkoPage_1.style.left = "5%";
marungkoPage_1.style.width = "90%";
marungkoPage_1.style.height = "60%";
marungkoPage_1.style.backgroundColor = "white"; 
marungkoPage_1.style.opacity = "0";
marungkoPage_1.style.transition = 'opacity 0.5s ease-in-out';

const marungkoPage_2 = document.createElement("div");
marungkoPage_2.id = "Marungko_2 Page";
marungkoPage_2.style.position = "absolute";
marungkoPage_2.style.top = "-30%";  
marungkoPage_2.style.left = "5%";
marungkoPage_2.style.width = "90%";
marungkoPage_2.style.height = "60%";
marungkoPage_2.style.backgroundColor = "white"; 
marungkoPage_2.style.opacity = "0";
marungkoPage_2.style.transition = 'opacity 0.5s ease-in-out';

const marungkoPage_3 = document.createElement("div");
marungkoPage_3.id = "Marungko_3 Page";
marungkoPage_3.style.position = "absolute";
marungkoPage_3.style.top = "-30%";  
marungkoPage_3.style.left = "5%";
marungkoPage_3.style.width = "90%";
marungkoPage_3.style.height = "60%";
marungkoPage_3.style.backgroundColor = "white"; 
marungkoPage_3.style.opacity = "0";
marungkoPage_3.style.transition = 'opacity 0.5s ease-in-out';


const marungko_1 = document.createElement("h2");
marungko_1.id = "marungko_1";
marungko_1.innerHTML = "A-ba-ni-ko";
marungko_1.style.position = "absolute";
marungko_1.style.top = "0%";
marungko_1.style.left = "0%";
marungko_1.style.cursor = "pointer";

const marungko_1Audio = document.createElement("audio");
marungko_1Audio.id = "Abaniko Audio";
marungko_1Audio.src = "Abaniko.m4a"; 

const marungko_2 = document.createElement("h2");
marungko_2.id = "marungko_2";
marungko_2.innerHTML = "Pa-leng-ke";
marungko_2.style.position = "absolute";
marungko_2.style.top = "10%";
marungko_2.style.left = "0%";
marungko_2.style.cursor = "pointer";

const marungko_2Audio = document.createElement("audio");
marungko_2Audio.id = "Palengke Audio";
marungko_2Audio.src = "Palengke.m4a"; 

const marungko_3 = document.createElement("h2");
marungko_3.id = "marungko_3";
marungko_3.innerHTML = "La-me-sa";
marungko_3.style.position = "absolute";
marungko_3.style.top = "0%";
marungko_3.style.left = "0%";
marungko_3.style.cursor = "pointer";

const marungko_3Audio = document.createElement("audio");
marungko_3Audio.id = "Lamesa Audio";
marungko_3Audio.src = "Lamesa.m4a"; 

const marungko_4 = document.createElement("h2");
marungko_4.id = "marungko_4";
marungko_4.innerHTML = "Lu-wa-san";
marungko_4.style.position = "absolute";
marungko_4.style.top = "10%";
marungko_4.style.left = "0%";
marungko_4.style.cursor = "pointer";

const marungko_4Audio = document.createElement("audio");
marungko_4Audio.id = "Luwasan Audio";
marungko_4Audio.src = "Luwasan.m4a"; 

const marungko_5 = document.createElement("h2");
marungko_5.id = "marungko_5";
marungko_5.innerHTML = "Wa-ta-wat";
marungko_5.style.position = "absolute";
marungko_5.style.top = "10%";
marungko_5.style.left = "0%";
marungko_5.style.cursor = "pointer";

const marungko_5Audio = document.createElement("audio");
marungko_5Audio.id = "Watawat Audio";
marungko_5Audio.src = "Watawat.m4a"; 

const partbutton_1 = document.createElement("div");
partbutton_1.id = "Marungko Phase 1";
partbutton_1.innerHTML = "";
partbutton_1.style.position = "absolute";
partbutton_1.style.top = "105%";  
partbutton_1.style.left = "47%";
partbutton_1.style.width = "1.5%";
partbutton_1.style.height = "5%";
partbutton_1.style.borderRadius = "15px";
partbutton_1.style.backgroundColor = "gray";
partbutton_1.style.opacity = "0";
partbutton_1.style.transition = 'opacity 0.5s ease-in-out';
partbutton_1.style.cursor = "pointer";

const partbutton_2 = document.createElement("div");
partbutton_2.id = "Marungko Phase 2";
partbutton_2.innerHTML = "";
partbutton_2.style.position = "absolute";
partbutton_2.style.top = "105%";  
partbutton_2.style.left = "50%";
partbutton_2.style.width = "1.5%";
partbutton_2.style.height = "5%";
partbutton_2.style.borderRadius = "15px";
partbutton_2.style.backgroundColor = "gray";
partbutton_2.style.opacity = "0";
partbutton_2.style.transition = 'opacity 0.5s ease-in-out';
partbutton_2.style.cursor = "pointer";


const partbutton_3 = document.createElement("div");
partbutton_3.id = "Marungko Phase 3";
partbutton_3.innerHTML = "";
partbutton_3.style.position = "absolute";
partbutton_3.style.top = "105%"; 
partbutton_3.style.left = "53%";
partbutton_3.style.width = "1.5%";
partbutton_3.style.height = "5%";
partbutton_3.style.borderRadius = "15px";
partbutton_3.style.backgroundColor = "gray";
partbutton_3.style.opacity = "0";
partbutton_3.style.transition = 'opacity 0.5s ease-in-out';
partbutton_3.style.cursor = "pointer";

const frontPage = document.createElement("div");
frontPage.id = "FrontPage";
frontPage.style.position = "absolute";
frontPage.style.top = "130%";
frontPage.style.left = "50%";
frontPage.style.width = "90%";
frontPage.style.height = "60%";
frontPage.style.backgroundColor = 'rgb(210, 210, 210)';
frontPage.style.transform = 'translate(-50%, -50%)'; 

const frontPageText = document.createElement("h1");
frontPageText.innerText = "Let's Read";
frontPageText.style.position = "absolute";
frontPageText.style.top = "20%";
frontPageText.style.left = "15%";
frontPageText.style.transform = 'translate(0%, 0%)'; 
frontPageText.style.transform = 'scale(2.5, 2)'; 

const frontPageText_1 = document.createElement("h1");
frontPageText_1.innerText = "Have some fun in Reading";
frontPageText_1.style.position = "absolute";
frontPageText_1.style.top = "30%";
frontPageText_1.style.left = "6%";
frontPageText_1.style.transform = 'translate(0%, 0%)'; 
frontPageText_1.style.transform = 'scale(1, 1)'; 

const frontPageStart = document.createElement("div");
frontPageStart.id = "FrontPage Read More";
frontPageStart.innerText = "Read More";
frontPageStart.style.position = "absolute";
frontPageStart.style.top = "65%";
frontPageStart.style.left = "21%";
frontPageStart.style.width = "30%";
frontPageStart.style.height = "15%";
frontPageStart.style.backgroundColor = "gray";
frontPageStart.style.color = "white";
frontPageStart.style.fontSize = "30px";
frontPageStart.style.display = "flex";
frontPageStart.style.alignItems = "center"; 
frontPageStart.style.justifyContent = "center"; 
frontPageStart.style.borderRadius = "35px";
frontPageStart.style.transform = 'translate(-50%, -50%)'; 
frontPageStart.style.cursor = "pointer";

const programPage = document.createElement("div");
programPage.id = "ProgramPage";
programPage.style.position = "absolute";
programPage.style.top = "210%";
programPage.style.left = "50%";
programPage.style.width = "90%";
programPage.style.height = "60%";
programPage.style.backgroundColor = 'rgb(210, 210, 210)';;
programPage.style.transform = 'translate(-50%, -50%)'; 

const programPageText = document.createElement("h1");
programPageText.id = "Program Title";
programPageText.innerText = "Let's Explore";
programPageText.style.position = "absolute";
programPageText.style.top = "20%";
programPageText.style.left = "65%";
programPageText.style.transform = 'translate(-50%, -50%)'; 
programPageText.style.transform = 'scale(2.5, 2)'; 
programPageText.style.transition = 'opacity 0.5s ease-in-out';

const programPageText_1 = document.createElement("h1");
programPageText_1.id = "Program Body";
programPageText_1.innerText = "Know the world of reading";
programPageText_1.style.position = "absolute";
programPageText_1.style.top = "32%";
programPageText_1.style.left = "60%";
programPageText_1.style.width = "50%";
programPageText_1.style.transform = 'translate(0%, 0%)'; 
programPageText_1.style.transform = 'scale(1.23, 1)'; 
programPageText_1.style.transition = 'opacity 0.5s ease-in-out';

const programPageTextStart = document.createElement("div");
programPageTextStart.id = "Core Program Button";
programPageTextStart.innerText = "Programs";
programPageTextStart.style.position = "absolute";
programPageTextStart.style.top = "65%";
programPageTextStart.style.left = "73%";
programPageTextStart.style.width = "30%";
programPageTextStart.style.height = "15%";
programPageTextStart.style.backgroundColor = "gray";
programPageTextStart.style.color = "white";
programPageTextStart.style.fontSize = "30px";
programPageTextStart.style.display = "flex";
programPageTextStart.style.alignItems = "center"; 
programPageTextStart.style.justifyContent = "center"; 
programPageTextStart.style.borderRadius = "35px";
programPageTextStart.style.transform = 'translate(-50%, -50%)'; 
programPageTextStart.style.transition = 'opacity 0.5s ease-in-out';
programPageTextStart.style.cursor = "pointer";

const programPageText_2 = document.createElement("h1");
programPageText_2.id = "Marungko Title"
programPageText_2.innerText = "Marungko";
programPageText_2.style.position = "absolute";
programPageText_2.style.top = "5%";
programPageText_2.style.left = "50%";
programPageText_2.style.width = "50%";
programPageText_2.style.transform = 'translate(0%, 0%)'; 
programPageText_2.style.opacity = "0";
programPageText_2.style.transition = 'opacity 0.5s ease-in-out';

const programPageText_4 = document.createElement("h2");
programPageText_4.id = "Marungko Description"
programPageText_4.innerText = "A syllabic reading exercise for beginners";
programPageText_4.style.position = "absolute";
programPageText_4.style.top = "25%";
programPageText_4.style.left = "46.5%";
programPageText_4.style.width = "20%";
programPageText_4.style.textAlign = 'center'; 
programPageText_4.style.transform = 'translate(0%, 0%)'; 
programPageText_4.style.opacity = "0";
programPageText_4.style.transition = 'opacity 0.5s ease-in-out';

const programPageSelect_1 = document.createElement("div");
programPageSelect_1.id = "Marungko Button";
programPageSelect_1.innerText = "Select";
programPageSelect_1.style.position = "absolute";
programPageSelect_1.style.top = "5%";
programPageSelect_1.style.left = "56%";
programPageSelect_1.style.width = "20%";
programPageSelect_1.style.height = "15%";
programPageSelect_1.style.backgroundColor = "gray";
programPageSelect_1.style.color = "white";
programPageSelect_1.style.fontSize = "30px";
programPageSelect_1.style.display = "flex";
programPageSelect_1.style.alignItems = "center"; 
programPageSelect_1.style.justifyContent = "center"; 
programPageSelect_1.style.borderRadius = "35px";
programPageSelect_1.style.transform = 'translate(-50%, -50%)'; 
programPageSelect_1.style.transition = 'opacity 0.5s ease-in-out';
programPageSelect_1.style.opacity = "0";
programPageSelect_1.style.cursor = "pointer";

const programPageText_3 = document.createElement("h1");
programPageText_3.id = "Kwentong Bata Title"
programPageText_3.innerText = "Kwentong Bata";
programPageText_3.style.position = "absolute";
programPageText_3.style.top = "5%";
programPageText_3.style.left = "75%";
programPageText_3.style.width = "50%";
programPageText_3.style.transform = 'translate(0%, 0%)'; 
programPageText_3.style.opacity = "0";
programPageText_3.style.transition = 'opacity 0.5s ease-in-out';

const programPageText_5 = document.createElement("h2");
programPageText_5.id = "Kwento Description"
programPageText_5.innerText = "Story Telling";
programPageText_5.style.position = "absolute";
programPageText_5.style.top = "25%";
programPageText_5.style.left = "74%";
programPageText_5.style.width = "20%";
programPageText_5.style.textAlign = 'center'; 
programPageText_5.style.transform = 'translate(0%, 0%)'; 
programPageText_5.style.opacity = "0";
programPageText_5.style.transition = 'opacity 0.5s ease-in-out';

const programPageSelect_2 = document.createElement("div");
programPageSelect_2.id = "Kwento Button";
programPageSelect_2.innerText = "Select";
programPageSelect_2.style.position = "absolute";
programPageSelect_2.style.top = "80%";
programPageSelect_2.style.left = "84%";
programPageSelect_2.style.width = "20%";
programPageSelect_2.style.height = "15%";
programPageSelect_2.style.backgroundColor = "gray";
programPageSelect_2.style.color = "white";
programPageSelect_2.style.fontSize = "30px";
programPageSelect_2.style.display = "flex";
programPageSelect_2.style.alignItems = "center"; 
programPageSelect_2.style.justifyContent = "center"; 
programPageSelect_2.style.borderRadius = "35px";
programPageSelect_2.style.transform = 'translate(-50%, -50%)'; 
programPageSelect_2.style.transition = 'opacity 0.5s ease-in-out';
programPageSelect_2.style.opacity = "0";
programPageSelect_2.style.cursor = "pointer";

const assessmentPage = document.createElement("div");
assessmentPage.id = "AssessmentPage";
assessmentPage.style.position = "absolute";
assessmentPage.style.top = "290%";
assessmentPage.style.left = "50%";
assessmentPage.style.width = "90%";
assessmentPage.style.height = "60%";
assessmentPage.style.backgroundColor = 'rgb(210, 210, 210)';;
assessmentPage.style.transform = 'translate(-50%, -50%)'; 

const assessmentText = document.createElement("h1");
assessmentText.innerText = "Let's Test";
assessmentText.style.position = "absolute";
assessmentText.style.top = "20%";
assessmentText.style.left = "17%";
assessmentText.style.transform = 'translate(-50%, -50%)'; 
assessmentText.style.transform = 'scale(3, 2.3)'; 

const assessmentText_1 = document.createElement("h1");
assessmentText_1.innerText = "Assess your Comprehension";
assessmentText_1.style.position = "absolute";
assessmentText_1.style.top = "32%";
assessmentText_1.style.left = "7%";
assessmentText_1.style.width = "50%";
assessmentText_1.style.transform = 'translate(0%, 0%)'; 
assessmentText_1.style.transform = 'scale(1, 1)'; 

const assessmentTextStart = document.createElement("div");
assessmentTextStart.innerText = "Assess Now";
assessmentTextStart.style.position = "absolute";
assessmentTextStart.style.top = "65%";
assessmentTextStart.style.left = "22%";
assessmentTextStart.style.width = "30%";
assessmentTextStart.style.height = "15%";
assessmentTextStart.style.backgroundColor = "gray";
assessmentTextStart.style.color = "white";
assessmentTextStart.style.fontSize = "30px";
assessmentTextStart.style.display = "flex";
assessmentTextStart.style.alignItems = "center"; 
assessmentTextStart.style.justifyContent = "center"; 
assessmentTextStart.style.borderRadius = "35px";
assessmentTextStart.style.transform = 'translate(-50%, -50%)'; 
assessmentTextStart.style.cursor = "pointer";

const footer = document.createElement("div");
footer.style.position = "absolute";
footer.style.top = "350%";
footer.style.left = "0%";
footer.style.width = "100%";
footer.style.backgroundColor = "gray";
footer.style.height = "60%";

document.body.append(header);
document.body.append(MainPage);
document.body.append(frontPage);
document.body.append(programPage);
document.body.append(assessmentPage);
document.body.append(footer);





header.append(Logo);
MainPage.append(TitleText);
MainPage.append(StartedButton);
MainPage.append(LogInButton);
MainPage.append(MainButton3);
MainPage.append(BodyText);
MainPage.append(marungkoPage_1);
MainPage.append(marungkoPage_2);
MainPage.append(marungkoPage_3);
MainPage.append(partbutton_1);
MainPage.append(partbutton_2);
MainPage.append(partbutton_3);
frontPage.append(frontPageText);
frontPage.append(frontPageText_1);
frontPage.append(frontPageStart);
programPage.append(programPageText);
programPage.append(programPageText_1);
programPage.append(programPageText_2);
programPage.append(programPageText_3);
programPage.append(programPageText_4);
programPage.append(programPageText_5);
programPage.append(programPageTextStart);
programPage.append(programPageSelect_1);
programPage.append(programPageSelect_2);
assessmentPage.append(assessmentText);
assessmentPage.append(assessmentText_1);
assessmentPage.append(assessmentTextStart);

marungkoPage_1.append(marungko_1);
marungkoPage_1.append(marungko_2);
marungkoPage_2.append(marungko_3);
marungkoPage_2.append(marungko_4);
marungkoPage_3.append(marungko_5);

document.getElementById("MainButton1").addEventListener('click', function() {
            document.getElementById("FrontPage").scrollIntoView({ behavior: 'smooth' });
	    setTimeout(() => {
            	window.scrollBy(0, -50); // Scroll 50px higher
        	}, 300);
        });


document.getElementById("FrontPage Read More").addEventListener('click', function() {
            document.getElementById("MainPage").scrollIntoView({ behavior: "smooth" });
	    setTimeout(() => { window.scrollBy(0, -125); }, 300); 
	    setTimeout(() => { document.getElementById("MainButton1").style.opacity = 0;}, 300);
	    setTimeout(() => { document.getElementById("MainButton2").style.opacity = 0;}, 300);
            setTimeout(() => { document.getElementById("TitleText").style.opacity = 0;}, 300);
	    setTimeout(() => { document.getElementById("BodyText").style.opacity = 0;}, 300);
	    setTimeout(() => { document.getElementById("TitleText").innerHTML = "A Guide to Beginner Reading"}, 1000);
	    setTimeout(() => { document.getElementById("TitleText").style.left = "-20%";}, 1000);	    
            setTimeout(() => { document.getElementById("TitleText").style.top = "10%";}, 1000);	    
	    setTimeout(() => { document.getElementById("TitleText").style.transform = "scale(1.2, 1.2)";}, 1000);
	    setTimeout(() => { document.getElementById("BodyText").style.opacity = "1";}, 1000);;
	    setTimeout(() => { document.getElementById("BodyText").innerHTML = "Beginner reading is the foundation of literacy, where new readers learn to recognize letters, connect sounds, and build vocabulary. Simple stories with familiar words and short sentences help readers gain confidence and enjoyment. Colorful illustrations and supportive text encourage curiosity, laying the groundwork for a lifelong love of reading.";}, 1000);	   
	    setTimeout(() => { document.getElementById("TitleText").style.opacity = 1;}, 1000);
	    setTimeout(() => { document.getElementById("MainButton3").style.top = "84%";}, 1000);	    
	    setTimeout(() => { document.getElementById("MainButton3").style.left = "30%";}, 1000);	    	    
	    setTimeout(() => { document.getElementById("MainButton3").style.width = "40%";}, 1000);	    	    	    
	    setTimeout(() => { document.getElementById("MainButton3").innerHTML = "Start Reading";}, 1000);
	    setTimeout(() => { document.getElementById("MainButton3").style.opacity = 1;}, 1000);	  	 
	});

document.getElementById("MainButton3").addEventListener('click', function() {
            document.getElementById("ProgramPage").scrollIntoView({ behavior: 'smooth' });
	    setTimeout(() => {
            	window.scrollBy(0, 290); // Scroll 50px higher
        	}, 300);
        });

document.getElementById("Core Program Button").addEventListener('click', function() {            
	    setTimeout(() => { document.getElementById("Program Title").style.opacity = 0;}, 0);
	    setTimeout(() => { document.getElementById("Program Body").style.opacity = 0;}, 0);	    
       	    setTimeout(() => { document.getElementById("Core Program Button").style.opacity = 0;}, 0);	    
 	    setTimeout(() => { document.getElementById("Marungko Title").style.opacity = 1;}, 0);
	    setTimeout(() => { document.getElementById("Kwentong Bata Title").style.opacity = 1;}, 0);
	    setTimeout(() => { document.getElementById("Marungko Button").style.top = "75%"}, 0);	
       	    setTimeout(() => { document.getElementById("Marungko Button").style.opacity = 1;}, 0);	    
       	    setTimeout(() => { document.getElementById("Kwento Button").style.opacity = 1;}, 0);
	    setTimeout(() => { document.getElementById("Kwento Button").style.top = "75%"}, 0);		    
       	    setTimeout(() => { document.getElementById("Marungko Description").style.opacity = 1;}, 0);	  
	    setTimeout(() => { document.getElementById("Kwento Description").style.opacity = 1;}, 0);	         	       
	 });

document.getElementById("Marungko Button").addEventListener('click', function() {   
	document.getElementById("MainPage").scrollIntoView({ behavior: "smooth" });
	setTimeout(() => { window.scrollBy(0, -525); }, 400); 
	setTimeout(() => { document.getElementById("TitleText").style.opacity = "0";}, 300);
	setTimeout(() => { document.getElementById("BodyText").style.opacity = "0";}, 300);;
	setTimeout(() => { document.getElementById("MainButton3").style.opacity = "0";}, 300);
 	setTimeout(() => { document.getElementById("TitleText").innerHTML = "Marungko";}, 300);
	setTimeout(() => { document.getElementById("TitleText").style.left = "0%";}, 300);
	setTimeout(() => { document.getElementById("TitleText").style.opacity = "1";}, 900);
	setTimeout(() => { document.getElementById("Marungko Phase 1").style.opacity = "1";}, 1200);
	setTimeout(() => { document.getElementById("Marungko Phase 2").style.opacity = "1";}, 1400);
	setTimeout(() => { document.getElementById("Marungko Phase 3").style.opacity = "1";}, 1600);
	setTimeout(() => { document.getElementById("Marungko_1 Page").style.opacity = "1";}, 1800);
	setTimeout(() => { document.getElementById("Marungko_1 Page").style.top = "30%";}, 1900);
	setTimeout(() => { document.getElementById("Marungko_2 Page").style.opacity = "0";}, 1800);
	setTimeout(() => { document.getElementById("Marungko_2 Page").style.top = "-100%";}, 1900);
	setTimeout(() => { document.getElementById("Marungko_3 Page").style.opacity = "0";}, 1800);
	setTimeout(() => { document.getElementById("Marungko_3 Page").style.top = "-100%";}, 1900);
	});   

document.getElementById("Kwento Button").addEventListener('click', function() {   
	document.getElementById("AssessmentPage").scrollIntoView({ behavior: "smooth" });
        setTimeout(() => { window.scrollBy(0, -100); }, 400); 
	setTimeout(() => { document.getElementById("TitleText").style.opacity = "0";}, 300);
	setTimeout(() => { document.getElementById("BodyText").style.opacity = "0";}, 300);;
	setTimeout(() => { document.getElementById("MainButton3").style.opacity = "0";}, 300);
	});   

document.getElementById("Marungko Phase 1").addEventListener('click', function() {   
	setTimeout(() => { document.getElementById("Marungko_3 Page").style.opacity = "0";}, 0);
	setTimeout(() => { document.getElementById("Marungko_3 Page").style.top = "-100%";}, 300);
	setTimeout(() => { document.getElementById("Marungko_2 Page").style.opacity = "0";}, 0);
	setTimeout(() => { document.getElementById("Marungko_2 Page").style.top = "-100%";}, 300);
	setTimeout(() => { document.getElementById("Marungko_1 Page").style.opacity = "1";}, 300);
	setTimeout(() => { document.getElementById("Marungko_1 Page").style.top = "30%";}, 300);
	});

document.getElementById("Marungko Phase 2").addEventListener('click', function() {   
	setTimeout(() => { document.getElementById("Marungko_3 Page").style.opacity = "0";}, 0);
	setTimeout(() => { document.getElementById("Marungko_3 Page").style.top = "-100%";}, 300);
	setTimeout(() => { document.getElementById("Marungko_1 Page").style.opacity = "0";}, 0);
	setTimeout(() => { document.getElementById("Marungko_1 Page").style.top = "-100%";}, 300);
	setTimeout(() => { document.getElementById("Marungko_2 Page").style.opacity = "1";}, 300);
	setTimeout(() => { document.getElementById("Marungko_2 Page").style.top = "30%";}, 300);
	});

document.getElementById("Marungko Phase 3").addEventListener('click', function() {   
	setTimeout(() => { document.getElementById("Marungko_1 Page").style.opacity = "0";}, 0);
	setTimeout(() => { document.getElementById("Marungko_1 Page").style.top = "-100%";}, 300);
	setTimeout(() => { document.getElementById("Marungko_2 Page").style.opacity = "0";}, 0);
	setTimeout(() => { document.getElementById("Marungko_2 Page").style.top = "-100%";}, 300);
	setTimeout(() => { document.getElementById("Marungko_3 Page").style.opacity = "1";}, 300);
	setTimeout(() => { document.getElementById("Marungko_3 Page").style.top = "30%";}, 300);
	});

document.getElementById("marungko_1").addEventListener('click', function() {
	marungko_1Audio.play();
	});   

document.getElementById("marungko_2").addEventListener('click', function() {
	marungko_2Audio.play();
	});   

document.getElementById("marungko_3").addEventListener('click', function() {
	marungko_3Audio.play();
	});  

document.getElementById("marungko_4").addEventListener('click', function() {
	marungko_4Audio.play();
	});   

document.getElementById("marungko_5").addEventListener('click', function() {
	marungko_5Audio.play();
	});   
