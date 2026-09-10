// les donnes
const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }
];

// initialiser les variables 

let tickets = [] ;
let choix ;

// initialiser prompt 
const prompt = require("prompt-sync")() ;

// fonction pour afficher tous les trajets disponibles
function AfficherTrajets(){
    console.log("                                             ");
    console.log("        === TRAJETS DISPONIBLES ===        ");
    console.log("                                             ");

    for(let x of trips){
        console.log(`# ${x.id} ${x.departure} --> ${x.destination}`);
        console.log(`Départ : ${x.departureTime}`);
        console.log(`Arrivée  : ${x.arrivalTime}`);
        console.log(`Prix  : ${x.price} DH`);
        console.log(`Places disponibles : ${x.availableSeats}`);
        console.log("                                             ");
    }
    
}


// une fonction pour trouver le numero de place
function getNumPlace(IdT){
    let count = 0 ;
    for(let t of tickets){
        if(t.tripId === IdT) count ++ ;
    }
    return count ;
}


// une fonction pour acheter un ticket
function AcheterTicket(){
    let nom = prompt("entrer votre nom :")
    let IdT = Number(prompt("entrer Identifiant du trajet :"))
    let ticket = {} ;
    let isExist = false ;

    for(let x of trips){
        if(x.id === IdT){
            if(0 < x.availableSeats){
                ticket.id = tickets.length + 1
                ticket.passengerName = nom 
                ticket.tripId = IdT 
                ticket.seatNumber = getNumPlace(IdT) + 1 
                ticket.price = x.price

                tickets.push(ticket)

                x.availableSeats -- 
                
                console.log("Ticket acheté avec succès.");
                console.log("                           ");
                console.log(`Ticket #${ticket.id}`);
                console.log(`Passager : ${ticket.passengerName}`);
                console.log(`Trajet : ${x.departure} --> ${x.destination}`);
                console.log(`Place : ${ticket.seatNumber}`);
                console.log(`Prix : ${ticket.price} DH`);                

                isExist = true ;
                
                break
            }else{
                console.log("Train complet.");
                
            }
        }
    }

    if(!isExist) console.log("Trajet introuvable.");
    
    
}

// une fonction pour trouver une trajet de chaque ticket 
function getTrajet(id){
    let departure ;
    let destination ;
    for(let tr of trips){
        if(tr.id === id){
            departure = tr.departure ;
            destination = tr.destination ;
        }
    }

    return {departure : departure , destination : destination}
}

// une fonction pour afficher les tickets disponibles
function AfficherTickets(){
    console.log("                         ");
    if(0 < tickets.length){
        console.log("     === TICKETS ===     ");
    }else{
        console.log("Aucun ticket enregistré.");
    }

    for(let t of tickets){

        console.log("                ");
        console.log(`Ticket #${t.id}`);
        console.log(`Passager : ${t.passengerName}`);
        let departure = getTrajet(t.tripId).departure 
        let destination = getTrajet(t.tripId).destination
        console.log(`Trajet : ${departure} --> ${destination}`);
        console.log(`Place : ${t.seatNumber}`);
        console.log(`Prix : ${t.price} DH`);                

    }
}

// une fonction pour annuler le ticket
function AnnulerTicket(){
    let IdT = Number(prompt("Identifiant du ticket : "))
    let isExist = false ;

    for(let t of tickets){
        if(t.id === IdT){
            let indexT = tickets.findIndex(ticket => ticket.id === t.id)
            tickets.splice(indexT,1)
            for(let i=indexT ;i<tickets.length ; i++){
                tickets[i].id -- 
                tickets[i].seatNumber --
            } 

            let index = trips.findIndex(trip => trip.id === t.tripId)
            trips[index].availableSeats ++

            console.log("             ");
            console.log("Identifiant du ticket : ",t.id);
            console.log("             ");
            console.log("Ticket annulé avec succès.");

            isExist = true ;

            break
        }
    }

    if(!isExist) console.log("Ticket introuvable.");
}


// une fonction pour Chercher un ticket au nom du passager
function  RechercherTicket(){
    let nom = prompt("Nom du passager : ")
    let isExist = false 

    for(let t of tickets){
        if(t.passengerName === nom){

            console.log("                ");
            console.log(`Ticket #${t.id}`);
            console.log(`Passager : ${t.passengerName}`);
            let departure = getTrajet(t.tripId).departure 
            let destination = getTrajet(t.tripId).destination
            console.log(`Trajet : ${departure} --> ${destination}`);
            console.log(`Place : ${t.seatNumber}`);
            console.log(`Prix : ${t.price} DH`);

            isExist = true
        }
    }

    if (!isExist) console.log("il n'y a aucun ticket avec ce nom de passager");
}


// une fonction pour Filtrer les trajets à partir de la ville de départ
function FiltrerTrajets(){
    const ville = prompt("Ville de départ : ")
    let isExist = false ;

    console.log("       -----------------------           ");
    
    for(let T of trips){
        if(T.departure === ville){
            console.log(`${T.departure} --> ${T.destination} : ${T.price} DH`);
            isExist = true
        }
    }

    if(!isExist) console.log("il y a aucun trajet departure de ",ville);

    console.log("       -----------------------           ");
    
}

// afficher le menu 
do {
    
    console.log("===================================================");
    console.log("                 RAILWAY MANAGER                   ");
    console.log("===================================================");
    console.log("                                                   ");
    console.log("1. Afficher les trajets");
    console.log("2. Acheter un ticket");
    console.log("3. Afficher les tickets");
    console.log("4. Annuler un ticket");
    console.log("5. Rechercher un ticket");
    console.log("6. Filtrer les trajets");
    console.log("7. Trier les trajets");
    console.log("0. Quitter");
    console.log("                                                   ");
    
    choix = Number(prompt("votre choix :"))
    
    switch (choix) {
        case 1:
            AfficherTrajets();
            break;
        case 2:
            AcheterTicket();
            break;
        case 3:
            AfficherTickets();
            break;
        case 4:
            AnnulerTicket();
            break;
        case 5:
            RechercherTicket();
            break;
        case 6:
            FiltrerTrajets();
            break;
        case 7:
        console.log("Trier les trajets");
            break;
        case 0:
        console.log("Vous avez quitté le programme");
            break;
        default:
            console.log("choisez un nombre entre 0 et 7");
            break;
    }

} while (choix != 0);
