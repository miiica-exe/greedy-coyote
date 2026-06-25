//==================================================
// WORLD
//==================================================

export const locations = {

    //==================================================
    // 🌏ROOT (vague locations)
    //==================================================

    island:{
        id:"island",
        label:"Island",
        description:"A lonely island.",

        children:[
            "woods",
            "coast",
            "meadow",
            "village",
            "city",
            "caves",
            "peninsula",
            "camp"
        ]
    },
// 🌲===============WOODS===============
    woods:{
        id:"woods",
        label:"Woods",
        description:"Tall trees surround you.",
        parent:"island",
        backButton:false,
        children:[
            "westWood",
            "northWood",
            "heartWood"
        ]
    },
    
    heartWood:{
        id:"heartWood",
        label:"Heart of the Woods",
        description:"There is a lot of old forest growth here.",
        parent:"woods",
        backButton:false,
        children:[
            "yard",
            "footPath",
            "oldRoad"
        ]
    },

    northWood:{
        id:"northWood",
        label:"Nothern Forest",
        description:"There are a few pine trees among the oaks here.",
        parent:"woods",
        backButton:false,
    },

    westWood:{
        id:"westWood",
        label:"Western Woods",
        description:"The forest is less dense here.",
        parent:"woods",
        backButton:false
    },
// ==============House===============
    yard:{
        id:"yard",
        label:"Yard",
        description:"An overgrown yard.",
        parent:"heartWood",
        backButton:false,
        children:[
            "house",
            "fountain",
            "garden",
            "burnPile"
        ],
        connections:[
            {
            target:"shop",
            },
            ],
    },

    house:{
        id:"house",
        label:"Entryway",
        description:"You enter the front of the house.",
        parent:"yard",
        backButton:false,
        children:[
            "hall"
            ],
    },

    hall:{
        id:"hall",
        label:"Hall",
        description:"A great hall runs through the center of the house.",
        parent:"house",
        children:[
            "shop",
            "kitchen",
            "dining",
            "foyer",
            "stairs"
        ],
        connections:[
            {
            target:"shop",
            },
            ],
    },
//======
    shop:{
        id:"shop",
        label:"Stitcher's Shop",
        description:"Hmm, something smells... fishy?",
        parent:"hall",
        backButton:true,
        children:[
            "shopWindow",
        ],
        connections:[
            {
            target:"shopWindow",
            },
            {
            target:"yard",
            },
            {
            target:"hall",
            },
            ],
    },
    shopWindow:{
        id:"shopWindow",
        label:"Big Window",
        description:"You have to crane your neck to look through it into the yard.",
        parent:"shop"
    },
//======
    kitchen:{
        id:"kitchen",
        label:"Kitchen",
        description:"Mmm, you smell fresh bread.",
        parent:"hall",
        children:[
            "kitchenTable",
        ]
    },
    kitchenTable:{
        id:"kitchenTable",
        label:"Tiny Table",
        description:"You sit at the single, tiny table on a matching tiny chair. It fits perfectly. You wonder when dinner will be ready.",
        parent:"kitchen"
    },
//======
    dining:{
        id:"dining",
        label:"Dining Room",
        description:"It's dark in here.",
        parent:"hall",
            backButton:false,
        children:[
            "diningTable",
        ]
    },
    diningTable:{
        id:"diningTable",
        label:"Big Dining Room Table",
        description:"The table is set, but all that you can see on the plates is dust and cobwebs.",
        parent:"dining"
    },
//======
    foyer:{
        id:"foyer",
        label:"Foyer",
        description:"There is a fireplace and comfy seating in here.",
        parent:"hall",
        children:[
            "firePlace",
        ]
    },
    firePlace:{
        id:"firePlace",
        label:"Fireplace",
        description:"The coals still radiate heat, someone should stoke it.",
        parent:"foyer",
    },
//======
    stairs:{
        id:"stairs",
        label:"Stairwell",
        description:"Up or Down?",
        parent:"hall",
        children:[
            "cellar",
            "landing"
        ]
    },
    
    cellar:{
        id:"cellar",
        label:"Cellar",
        description:"Woah! It is seriously dark down here.",
        parent:"stairs"
    },
//======
    landing:{
        id:"landing",
        label:"Second Floor Landing",
        description:"At the top of the stairs, you see a balcony to the left, and Stitcher's door to the right. There's a sofa against the far wall, and a painting on the wall above it. You wonder what it depicts, then you wonder what wondering is. Maybe that's what it's all about.",
        parent:"stairs",
        children:[
            "balcony",
            "office",
            "roof"
            ]
    },

    balcony:{
        id:"balcony",
        label:"Balcony",
        description:"This balcony overlooks the back yard. There are trees as far as the eye can see. There are white railings on all sides, and potentiall access to the roof if you can squeeze through...",
        parent:"landing"
    },

    office:{
        id:"office",
        label:"Stitcher's Office",
        description:"Nothing available yet...",
        parent:"landing"
    },

    roof:{
        id:"roof",
        label:"Rooftop",
        description:"The wind is making a gentle noise in the eaves. You can see that there is a window slightly ajar up here. Maybe you could go through it.",
        parent:"landing"
    },
// 🌱===============MEADOW===============
    meadow:{
        id:"meadow",
        label:"Meadow",
        description:"Your head barely peaks over the tall grass.",
        parent:"island",
        backButton:false,
        children:[
            "spring",
            "brook"
        ]
    },
    spring:{
        id:"spring",
        label:"Mossy Spring",
        description:"Clear water is bubbling up from some moss-covered rocks. Take a drink?",
        parent:"meadow",
    },
    brook:{
        id:"brook",
        label:"Babbling Brook",
        description:"The water makes an interesting babbling, bubbling sound as it rolls over stones. You wonder if you could roll like that too.",
        parent:"meadow",
    },
// 🛖===============VILLAGE===============
    village:{
        id:"village",
        label:"The Village",
        description:"a quaint village. you wonder who you could meet here.",
        parent:"island",
        backButton:false,
        children:[
            "vendors"
        ]
    },
    vendors:{
        id:"vendors",
        label:"Vendor's Row",
        description:"There are several different shops on this street, who do you want to visit?",
        parent:"village",
    },
// 🏙️===============CITY===============
    city:{
        id:"city",
        label:"The City",
        description:"You can hardly hear yourself think",
        parent:"island",
        backButton:false,
        children:[
            "downtown",
            "suburbs"
        ]
    },
    downtown:{
        id:"downtown",
        label:"Downtown",
        description:"Wow! You didn't know there were so many people in the world. You can't tell where you're going most of the time.",
        parent:"city"
    },
    suburbs:{
        id:"suburbs",
        label:"Suburbs",
        description:"So many mansions! But why do they all look the same?",
        parent:"city"
    },
// 🕳️===============CAVES===============
    caves:{
        id:"caves",
        label:"Cave Entrance",
        description:"Your shadow soon becomes indecipherable from the shadows of the cave before you.",
        parent:"island",
        backButton:false,
        children:[
            "descent"
        ]
    },
    descent:{
        id:"descent",
        label:"Cave Descent",
        description:"The ground becomes cold and sandy as it slopes into the depths. You should have a flashlight to continue.",
        parent:"caves"
    },
// 🌊===============PENINSULA===============
    peninsula:{
        id:"peninsula",
        label:"The Peninsula",
        description:"The view from here is so good that you almost wish there was something to see.",
        parent:"island",
        backButton:false,
        children:[
            "northPoint",
            "quickSand"
        ]
    },
    northPoint:{
        id:"northPoint",
        label:"North Point",
        description:"There is cold, grey water on three sizes, you feel strangely free.",
        parent:"peninsula",
    },
    quickSand:{
        id:"quickSand",
        label:"Quicksand!",
        description:"Oh no, the ground seems to want to suck you in, better be careful where you step.",
        parent:"peninsula",
    },
// 🏖️===============COAST===============
    coast:{
        id:"coast",
        label:"The Coast",
        description:"Mmm, fishy.",
        parent:"island",
        backButton:false,
        children:[
            "northCoast",
            "westCoast",
            "southCoast",
            "eastCoast"
        ]
    },
    northCoast:{
        id:"northCoast",
        label:"Northern shores",
        description:"The wind blows cold from the sea.",
        parent:"coast",
    },
    westCoast:{
        id:"westCoast",
        label:"Western Water's Edge",
        description:"There are many large boulders, navigating here seems tricky.",
        parent:"coast",
    },
    southCoast:{
        id:"southCoast",
        label:"Southern Shores",
        description:"It's very swampy here. The cattails create a small green forest around you.",
        parent:"coast",
    },
    eastCoast:{
        id:"eastCoast",
        label:"East Coast",
        description:"There are glassy pebbles along the beaches! Maybe you should take a few.",
        parent:"coast",
    },
};

