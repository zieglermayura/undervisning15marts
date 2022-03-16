console.log("Jeg er kørt")

const myName = "Christina"
const lastName = "Ziegler"
const email = "Zieglermayura@gmail.com"
const fullName = myName + " " + lastName;

const welcome = 
"Hej" + 
myName + 
", velkommen til og tak fordi du har skrevet dig op til mit nyhedsbrev, håber du kommer til at nyde mit indhold"

const welcome2 = `'Hej ${myName}, velkommen'`;


console.log(myName + " " + lastName)

console.log(welcome2)

const height = 1.55;
const weight = 58;
console.log(weight + height)

const bmi = weight / (height * height)
console.log(bmi)


const euro = 7.45
const usd = 6.55

const dkk = 6000

console.log(dkk / euro)

console.log(dkk / usd)

const doesLikeCats = false
const isJavaScriptNice = true

const result = 3.5 < 4;
console.log(result);


const adresse = {
    vej: 'Nørgaardsvej',
    nummer: 22,
};

adresse.postnr = 2800;

console.log(adresse.nummer);
console.log(adresse.vej);

const person = {
    name: "Christina",
    lastName: lastName,
    email: email,
};

console.log(person.name);
console.log(person.lastName);
console.log(person.email);

person.job = "Studerende"

console.log(person.name)
console.log(person.lastName)

person.name = person.name + "Mayura"

person.adresse = adresse;
console.log(person.job.location)

const games = ["dota2", "apex"]

const flows = ["Billede", "Portfolio", "Konceptudvikling", "SO-ME", "Video-produktion"];

const flow = flows[1];
console.log(flow);


console.log(games[1]);

const brother = {
    name: "Oliver"
}

const sister = {
    name: "Emma"
}

const siblings = [sister, brother]


// funktioner: portion genbruglig kode

function bmiCalculate(height, weight) {
    const bmi = weight / (height * height)
    return bmi;
}

bmiCalculate(1.55,55);

function kursberegner(kurs, beløb) {
    const omregner = beløb / kurs
    console.log(omregner)
}

kursberegner(7.45 , 6000);
kursberegner(6.5 , 6000);

const test = console.log();
console.log(test); 

const bmi2 = bmiCalculate(1.55, 55);
console.log(bmi2)









