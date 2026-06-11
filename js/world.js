//==================================================
// WORLD
//==================================================

export const locations = {

    //==================================================
    // ROOT
    //==================================================

    island:{
        id:"island",
        label:"Island",
        description:"A lonely island.",

        children:[
            "woods"
        ]
    },

    woods:{
        id:"woods",
        label:"Woods",
        description:"Tall trees surround the property.",
        parent:"island",
        backButton:false,
        children:[
            "yard"
        ]
    },

    //==================================================
    // YARD
    //==================================================

    yard:{
        id:"yard",
        label:"Yard",
        description:
            "An overgrown yard outside. The property is larger than you first thought.",
        parent:"woods",
        backButton:false,
        children:[
            "fountain",
            "garden",
            "clover"
        ],

        connections:[
            {
                target:"hall"
            },
            {
                target:"shop"
            },
            {
                target:"kitchen"
            }
        ],

        lootboxes:{
            litter:{
                label:"Scattered Litter",

                type:"search",

                inventory:[
                    "smallBone"
                ]
            }
        }
    },

    fountain:{
        id:"fountain",

        label:"Overgrown Fountain",

        description:
            "A fountain consumed by weeds.",

        parent:"yard",

        lootboxes:{
            fountainLoot:{
                label:"Fountain Debris",

                type:"search",

                inventory:[
                    "smallBone"
                ]
            }
        }
    },

    garden:{
        id:"garden",

        label:"Lost Garden",

        description:
            "A daffodil peeks through the overgrowth.",

        parent:"yard"
    },

    clover:{
        id:"clover",

        label:"Clover Patch",

        description:
            "The air feels oddly cool here.",

        parent:"yard"
    },

    //==================================================
    // SHOP
    //==================================================

    shop:{
        id:"shop",

        label:"Shop",

        description:
            "The Stitcher's workshop. Something smells fishy.",

        parent:"yard",

        children:[
            "deskArea",
            "shoeboxCorner",
            "windowArea",
            "bookshelves",
            "operatingTable"
        ],

        connections:[
            {
                target:"hall"
            },
            {
                target:"yard"
            }
        ],

        lootboxes:{

            deskBox:{
                label:"Desk Locked Box",

                type:"locked",

                inventory:[]
            },

            shoebox:{
                label:"Shoebox",

                type:"safe",

                inventory:[]
            },

            rubble:{
                label:"Pile Of Rubble",

                type:"search",

                inventory:[
                    "smallBone",
                    "bigBone",
                    "scrapBook"
                ]
            }
        }
    },

    deskArea:{
        id:"deskArea",

        label:"Stitcher's Desk",

        description:
            "Covered in tools and scraps.",

        parent:"shop"
    },

    shoeboxCorner:{
        id:"shoeboxCorner",

        label:"Shoebox Corner",

        description:
            "A forgotten shoebox rests in the corner.",

        parent:"shop"
    },

    windowArea:{
        id:"windowArea",

        label:"Big Window",

        description:
            "Everything seems brighter here.",

        parent:"shop"
    },

    bookshelves:{
        id:"bookshelves",

        label:"Bookshelves",

        description:
            "Tall shelves packed with books.",

        parent:"shop",

        lootboxes:{
            shelfLoot:{
                label:"Interesting Book",

                type:"search",

                inventory:[
                    "scrapBook"
                ]
            }
        }
    },

    operatingTable:{
        id:"operatingTable",

        label:"Operating Table",

        description:
            "This is where you woke up.",

        parent:"shop"
    },

    //==================================================
    // HOUSE
    //==================================================

    hall:{
        id:"hall",

        label:"Hall",

        description:
            "A large hall stretches through the center of the house.",

        connections:[
            {
                target:"shop"
            },
            {
                target:"yard"
            },
            {
                target:"kitchen"
            },
            {
                target:"foyer"
            },
            {
                target:"stairs"
            }
        ]
    },

    foyer:{
        id:"foyer",

        label:"Foyer",

        description:
            "A cozy room with a dying fireplace.",

        parent:"hall",

        children:[
            "fireplace",
            "rug"
        ],

        connections:[
            {
                target:"hall"
            },
            {
                target:"dining"
            }
        ]
    },

    fireplace:{
        id:"fireplace",

        label:"Fireplace",

        description:
            "The coals still radiate warmth.",

        parent:"foyer"
    },

    rug:{
        id:"rug",

        label:"Plush Rug",

        description:
            "Very soft.",

        parent:"foyer"
    },

    dining:{
        id:"dining",

        label:"Dining Room",

        description:
            "A table is set but nobody is here.",

        connections:[
            {
                target:"foyer"
            },
            {
                target:"kitchen"
            }
        ],

        lootboxes:{
            tableLoot:{
                label:"Table Setting",

                type:"search",

                inventory:[
                    "spoon"
                ]
            }
        }
    },

    kitchen:{
        id:"kitchen",

        label:"Kitchen",

        description:
            "Fresh bread fills the air.",

        connections:[
            {
                target:"hall"
            },
            {
                target:"yard"
            },
            {
                target:"dining"
            }
        ]
    },

    //==================================================
    // STAIRS
    //==================================================

    stairs:{
        id:"stairs",

        label:"Stairs",

        description:
            "Where would you like to go?",

        connections:[
            {
                target:"hall"
            },
            {
                target:"cellar"
            },
            {
                target:"landing"
            }
        ]
    },

    cellar:{
        id:"cellar",

        label:"Cellar",

        description:
            "It is too dark to see.",

        connections:[
            {
                target:"stairs"
            }
        ]
    },

    landing:{
        id:"landing",

        label:"Landing",

        description:
            "The upstairs landing.",

        connections:[
            {
                target:"stairs"
            },
            {
                target:"balcony"
            }
        ]
    },

    balcony:{
        id:"balcony",

        label:"Balcony",

        description:
            "A small balcony overlooking the yard.",

        connections:[
            {
                target:"landing"
            }
        ],

        challenges:[
            "roofJump"
        ]
    },

    roof:{
        id:"roof",

        label:"Roof",

        description:
            "The wind whistles through the eaves.",

        challenges:[
            "openWindow"
        ],

        connections:[
            {
                target:"balcony"
            },
            {
                target:"stitcherRoom",

                conditions:[
                    {
                        type:"challenge",
                        id:"openWindow"
                    }
                ]
            }
        ]
    },

    stitcherRoom:{
        id:"stitcherRoom",

        label:"Stitcher's Room",

        description:
            "This location is locked.",

        connections:[
            {
                target:"roof"
            }
        ]
    }
};

