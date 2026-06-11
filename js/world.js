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
        ]
    },

    house:{
        id:"house",
        label:"House",
        description:"Tall trees surround you.",
        parent:"yard",
        children:[
            "hall",
            "shop",
            "kitchen",
            "diningRoom",
            "foyer",
            "stairs",
            "cellar",
            "landing",
            "balcony",
            "roof",
            "bedroom"
        ]
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
// 🕳️===============CAVES===============
    caves:{
        id:"caves",
        label:"Cave Entrance",
        description:"The shadow you cast melts into the shadows of the cave before you.",
        parent:"island",
        backButton:false,
        children:[
            "descent"
        ]
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
};

