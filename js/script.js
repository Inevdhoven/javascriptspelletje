var popup = document.querySelector("#popup"); //Hier maak ik een variable aan, waaraan ik een element uit de index.html met het id popup koppel.
var buttonPopup = document.querySelector("#button"); //Hier maak ik een variable aan, waaraan ik een element uit de index.html met het id button koppel.

function popupWeg() { // Dit is een function genaamd popupWeg.
    console.log("De popup gaat weg"); // Hiermee test ik of de functie werkt. Wanneer de functie werkt moet er in de console De popup gaat weg komen te staan.
    popup.classList.add("popupsluiten"); //Hier voeg ik aan de variable popup de class popupsluiten toe. In de HTML komt er bij het element met het id popup een class popupsluiten.
}
buttonPopup.addEventListener('click', popupWeg); // Op het element van de variable buttonPopup komt een event click die de function popupWeg gaat uitvoeren. Wanneer je nu op het element met het id button klikt gaat de popup weg.

//Kleding in de kast
var geleJurk = document.querySelector("#gele_jurk"); //Hier maak ik een variable aan, waaraan ik een element uit de index.html met het id gele_jurk koppel. 
var paarseJurk = document.querySelector("#paarse_jurk"); // Hier en bij de andere tot regel 28 gebeurd hetzelfde als bij de gele_jurk maar dan met het element met het id die in de querySelector word genoemd.

var witteTop = document.querySelector("#witte_top");
var zwarteTop = document.querySelector("#zwarte_top");
var hemdje = document.querySelector("#hemdje");
var pyjamaTop = document.querySelector("#pyjama_top");

var donkereBroek = document.querySelector("#donkerblauwe_broek");
var lichteBroek = document.querySelector("#lichtblauwe_broek");
var pyjamaBroek = document.querySelector("#pyjama_broek");

var schoenen = document.querySelector("#schoenen");

//Kleding aan
var topAan = document.querySelector("#top_aan");
var broekAan = document.querySelector("#broek_aan");
var schoenenUit = document.querySelector("#schoenen_uit");

//Top veranderen
function veranderTop(nieuweClass) { //Dit is een function met de naam veranderTop met de parameter nieuweClass
    topAan.classList.remove("gelejurkaan", "paarsejurkaan", "wittetopaan", "zwartetopaan", "hemdjeaan", "pyjamatopaan"); // Het eerste wat is gebeurd in deze functie is dat alle classes eraf worden gehaalt van het element topAan.
    topAan.classList.add(nieuweClass); //Hier word de class die in de parameter nieuweClass word gestopt toegevoegd.

    if (nieuweClass == 'gelejurkaan' || nieuweClass == 'paarsejurkaan') { // Wanneer de nieuweClass gelejurkaan of paarsejurkaan is
        broekAan.style.display = "none"; // Dan wordt broekAan in de CSS op display none gezet.
    } else { // Wanneer het niet gaat om gelejurkaan of paarsejurkaan
        broekAan.style.display = "block"; // Dan wordt broekAan op display block gezet.
    }
}

//Jurken
function veranderGeleJurk() { // De functie veranderGeleJurk word aangemaakt.
    veranderTop("gelejurkaan"); // De functie veranderTop word aangeroepen met als parameter gelejukaan. gelejurkaan word op de plek van nieuweClass ingevuld. Dus aan het element topAan word nu de class gelejurkaan toegevoegd.
}
geleJurk.addEventListener('click', veranderGeleJurk); // Wanneer er op de geleJurk word geklikt word de functie veranderGeleJurk uitgevoerd.
// Wat ik op regel 43 t/m 46 heb uitgelegd gebeurd ook bij de volgende functies en addEventListeners maar dan met andere variablen, functienamen en parameters.
function veranderPaarseJurk() {
    veranderTop("paarsejurkaan");
}
paarseJurk.addEventListener('dragend', veranderPaarseJurk); // Inplaats van klikken kun je de elementen met dragend slepen naar het poppetje om deze aan te doen.

//Tops
function veranderWitteTop() {
    veranderTop("wittetopaan");
}
witteTop.addEventListener('click', veranderWitteTop);

function veranderZwarteTop() {
    veranderTop("zwartetopaan");
}
zwarteTop.addEventListener('dragend', veranderZwarteTop); 

function veranderHemdje() {
    veranderTop("hemdjeaan");
}
hemdje.addEventListener('dragend', veranderHemdje);

function veranderPyjamaTop() {
    veranderTop("pyjamatopaan");
}
pyjamaTop.addEventListener('click', veranderPyjamaTop);

//Broek veranderen
function veranderBroek(nieuweClass) { 
    broekAan.classList.remove("donkerebroekaan", "lichtebroekaan", "pyjamabroekaan");
    broekAan.classList.add(nieuweClass);
    broekAan.style.display = "block";

    geleOfPaarseJurkAan();
}

//Van gele of paarse jurk naar broek met t-shirt
function geleOfPaarseJurkAan() {
    if (topAan.classList.contains("gelejurkaan")  || topAan.classList.contains("paarsejurkaan") ) { // Als het element van de variable topAan de class gelejurkaan of paarsejurkaan bevat dan
        topAan.src="img/persoon/top_pyjama.png"; // word de source van het img element verander naar de volgende source img/persoon/top_pyjama.png.
        topAan.classList.remove("gelejurkaan", "paarsejurkaan"); // Ook worden de classes gelejurkaan en paarsejurkaan verwijderd.
    }
}

//Broeken
function veranderDonkereBroek() {
    veranderBroek("donkerebroekaan");
}
donkereBroek.addEventListener('click', veranderDonkereBroek);

function veranderLichteBroek() {
    veranderBroek("lichtebroekaan");
}
lichteBroek.addEventListener('dragend', veranderLichteBroek);

function veranderPyjamaBroek() {
    veranderBroek("pyjamabroekaan");
}
pyjamaBroek.addEventListener('click', veranderPyjamaBroek);

//Schoenen
function schoenenAan() {
    if (schoenenUit.style.display == "block") { // Als de schoenen in de CSS op display block staan dan wordt deze
        schoenenUit.style.display = "none"; // op display none gezet.
    } else { // Wanneer de schoenen op niet op display block staan dan wordt deze
        schoenenUit.style.display = "block"; // op display block gezet.
    }
}
schoenen.addEventListener('click', schoenenAan);

//Lachen of niet
var gezicht = document.querySelector("#gezicht");
var lichaam = document.querySelector("#lichaam");
var arm = document.querySelector("#arm");
var lachgeluid = new Audio('audio/lachende_vrouw.mp3'); // Aan de variable word een audiobestand gekoppelt.

function gezichtLachen() {
    gezicht.src="img/persoon/gezicht_lachen.png"; // De afbeelding van het gezicht word veranderd.
    console.log("lachen");
    lachgeluid.play(); // Het audiobestand word via de functie play afgespeeld.
}
lichaam.addEventListener('mouseenter', gezichtLachen); // Het afspelen gebeurd wanner je over bijvoorbeeld het lichaam heen gaat met de muis.
gezicht.addEventListener('mouseenter', gezichtLachen);
arm.addEventListener('mouseenter', gezichtLachen);
topAan.addEventListener('mouseenter', gezichtLachen);
broekAan.addEventListener('mouseenter', gezichtLachen);

function gezichtNormaal() {
    lachgeluid.pause(); // Hiermee word het audiobestand op pause gezet.
    gezicht.src="img/persoon/gezicht_normaal.png"; //De afbeelding van het gezicht word terug veranderd.
    console.log("niet lachen");
}
lichaam.addEventListener('mouseleave', gezichtNormaal); // De functie gezichtNormaal word uitgevoerd wanneer je met de muis bijvoorbeeld het lichaam verlaat.
gezicht.addEventListener('mouseleave', gezichtNormaal);
arm.addEventListener('mouseleave', gezichtNormaal);
topAan.addEventListener('mouseleave', gezichtNormaal);
broekAan.addEventListener('mouseleave', gezichtNormaal);

//Koffie
var koffieBTN = document.querySelector("#koffie_btn");

function bekerKoffie() {
    arm.src="img/persoon/arm_koffie.png";
    arm.classList.add('koffiearm');
}
koffieBTN.addEventListener('click', bekerKoffie);

//WERKEN
var kleedkamer = document.querySelector("#kleedkamer");
var kantoor = document.querySelector("#kantoor");

kleedkamer.hidden = false; // De kleedkamer is zichtbaar.
kantoor.hidden = true; // Het kantoor is niet zichtbaar.

function gaWerken() {
    document.getElementById("bg").style.backgroundImage = "url(img/werkplek/werkplek.png)"; // De achtergrond afbeelding in de CSS word vervangen door een andere afbeelding.

    kleedkamer.hidden = true; // De kleedkamer is niet zichtbaar.
    kantoor.hidden = false; // Het kantoor is zichtbaar.

    var phone = document.querySelector("#phone");
    var phoneRing = new Audio('audio/ringtoon.mp3');

    setTimeout(function(){ // Na 3000 miliseconde = 3 seconde word deze functie uitgevoerd.
        phone.classList.add('ring'); // Aan het element van de variable phone word de class ring toegevoegd.
        phoneRing.play(); // De audio word afgespeeld.
    }, 3000);

    var schermen = ["scherm_uit.png", "scherm_aan1.png", "scherm_aan2.png", "scherm_aan3.png"]; // Hier maak ik een array met de namen van afbeeldingen.
    var foto = document.querySelector("#scherm");
    var huidigeSchermNr = 0; // Het huidigeSchermNr is 0

    function schermVerder() {
        console.log('vooruit');
        huidigeSchermNr = huidigeSchermNr + 1; // Het huidigeSchermNr word veranderd. Bij het huidigeSchermNr word 1 op geteld.
    
        huidigeScherm(); // De functie huidigeScherm word aangeroepen.
    }

    function huidigeScherm() {
        console.log('bladeren');
        if (huidigeSchermNr > schermen.length - 1) { // Wanneer het huidigeschermNr groter is dan de lengte van de array schermen - 1 dan
            huidigeSchermNr = 0; // word het huidigeSchermNr op 0 gezet. 
        } // Deze if statement zorgt ervoor dat wanneer de array aan het einde is gekomen dat hij terug gaat naar het begin
    
        foto.src = 'img/werkplek/' + schermen[huidigeSchermNr]; // Hier word de source veranderd van het element dat is gekoppelt aan de variable foto. Uit de array schermen word het huidigeSchermNr gehaald. Wanneer het huidigeSchermNr bijvoorbeeld twee is word scherm_aan2.png daar in de plaats gezet.
    }
    foto.addEventListener('click', schermVerder); // Wanneer je op het element waar het variable foto aan gekoppelt is klikt wordt de functie schermVerder uitgevoerd.
}
document.getElementById("werken_btn").addEventListener("click", gaWerken); // Op het element met het id werken_btn word een klik toegevoegd die ervoor zorgd dat de functie ga werken word uitgevoert.