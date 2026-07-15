//==================================================
// WORLD
//==================================================

export const locations = {

    yard:{
        id:"yard",
        label:"Overgrown Yard",
        description:"There is a small yard surrounding the mansion. There is a worn fence peeking up through the overgrowth, and you can tell it used to be painted white.",
        connections:[
            {
            target:"veranda"
            },
            {
            target:"shop"
            },
            {
            target:"kitchen"
            },
            ],
    },

    veranda:{
        id:"veranda",
        label:"Front Veranda",
        description:"The veranda wraps around the front of the mansion. Brambles and ivy cling to the railing. This place must have been beautiful once.",
        connections:[
            {
            target:"yard",
            },
            {
            target:"hall",
            }
            ],
    },

    hall:{
        id:"hall",
        label:"Hall",
        description:"A hall runs the length of the mansion.",
        connections:[
            {
            target:"veranda"
            },
            {
            target:"shop"
            },
            {
            target:"foyer"
            },
            {
            target:"kitchen"
            },
            {
            target:"stairs"
            },
            ],
    },

    shop:{
        id:"shop",
        label:"Stitcher's Shop",
        description:"placeholder",
        connections:[
            {
            target:"yard",
            },
            {
            target:"hall"
            },
            ],
    },

    foyer:{
        id:"foyer",
        label:"Foyer",
        description:"cozy placeholder",
        connections:[
            {
            target:"hall"
            },
            {
            target:"dining"
            },
            ],
    },

    dining:{
        id:"dining",
        label:"Dining Room",
        description:"The blinds are drawn",
        connections:[
            {
            target:"foyer",
            },
            {
            target:"kitchen",
            },
            ],
    },

    kitchen:{
        id:"kitchen",
        label:"Kitchen",
        description:"smells like bread",
        connections:[
            {
            target:"dining"
            },
            {
            target:"hall"
            },
            {
            target:"yard"
            },
            ],
    },

    stairs:{
        id:"stairs",
        label:"Stairwell",
        description:"Up or down?",
        connections:[
            {
            target:"hall",
            },
            {
            target:"cellar"
            },
            {
            target:"landing"
            },
            ],
    },

    cellar:{
        id:"cellar",
        label:"Cellar",
        description:"Woah, it is seriously dark in here.",
        connections:[
            {
            target:"stairs"
            },
            ],
    },

    landing:{
        id:"landing",
        label:"Second Story Landing",
        description:"placeholder",
        connections:[
            {
            target:"stairs"
            },
            {
            target:"balcony",
            },
            ],
    },

    balcony:{
        id:"balcony",
        label:"Balcony",
        description:"overlooking the back yard",
        connections:[
            {
            target:"landing"
            }
            ],
    },
        
