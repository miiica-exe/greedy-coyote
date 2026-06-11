//==================================================
// IMPORTS
//==================================================

import { locations } from "./world.js";
import { items } from "./items.js";

//==================================================
// GAME STATE
//==================================================

export const state = {

    currentLocation:"shop",

    chapter:0,

    visitedLocations:{},

    completedChallenges:{},

    openedLootboxes:{}
};

//==================================================
// PLAYER
//==================================================

export const player = {

    name:"Coyote",

    inventory:[],

    capacity:10,

    bodyParts:{
        head:"coyoteHead",
        body:"coyoteBody",
        legs:"coyoteLegs"
    }
};
// PLAYER INVENTORY================================

function inventoryWeight(){

    let total = 0;

    player.inventory.forEach(itemId=>{

        total +=
            items[itemId]?.weight
            || 0;
    });

    return total;
}

function addItem(itemId){

    const item = items[itemId];

    if(!item){
        return false;
    }

    if(
        inventoryWeight()
        +
        item.weight
        >
        player.capacity
    ){

        log(
            `${item.name} is too heavy.`,
            "fail"
        );

        return false;
    }

    player.inventory.push(itemId);

    log(
        `Added ${item.name}.`,
        "success"
    );

    return true;
}
//==================================================
// TEMP BODY PART DATA
//==================================================

const bodyParts = {

    coyoteHead:{
        stats:{
            acumen:1
        }
    },

    coyoteBody:{
        stats:{
            tether:-1
        }
    },

    coyoteLegs:{
        stats:{
            pliage:2,
            heft:-2
        }
    }
};

//==================================================
// INITIALIZE
//==================================================

export function initializeGame(){

    state.visitedLocations[
        state.currentLocation
    ] = true;

    render();

    log(
        "You awake. You're on a metal table."
    );
}

//==================================================
// LOG
//==================================================

export function log(message, css=""){

    const div =
        document.createElement("div");

    div.className =
        `logEntry ${css}`;

    div.textContent =
        message;

    document
        .getElementById("log")
        .prepend(div);
}

//==================================================
// TIME
//==================================================

function isNight(){

    return (
        new Date().getMinutes()
        >= 30
    );
}

function getTimeModifier(stat){

    if(
        stat === "tether" &&
        isNight()
    ){
        return 1;
    }

    return 0;
}

//==================================================
// CHAPTER MODIFIERS
//==================================================

function getChapterModifier(){

    return 0;
}

//==================================================
// STATS
//==================================================

export function getStat(stat){

    let total = 0;

    Object.values(
        player.bodyParts
    ).forEach(partId=>{

        const part =
            bodyParts[partId];

        total +=
            part?.stats?.[stat]
            || 0;
    });

    total +=
        getTimeModifier(stat);

    total +=
        getChapterModifier(stat);

    return total;
}

//==================================================
// CONDITIONS
//==================================================

export function checkConditions(
    conditions
){

    if(
        !conditions ||
        conditions.length===0
    ){
        return true;
    }

    return conditions.every(
        condition=>{

        switch(
            condition.type
        ){

            case "challenge":

                return state
                    .completedChallenges[
                        condition.id
                    ];

            case "chapter":

                return (
                    state.chapter
                    >=
                    condition.chapter
                );

            case "visited":

                return state
                    .visitedLocations[
                        condition.location
                    ];

            default:
                return false;
        }

    });
}

//==================================================
// LOCATION
//==================================================

export function moveTo(
    locationId
){

    if(
        !locations[locationId]
    ){
        return;
    }

    state.currentLocation =
        locationId;

    state.visitedLocations[
        locationId
    ] = true;

    render();
}

//==================================================
// CHALLENGES
//==================================================

const challenges = {

    roofJump:{

        label:"Climb To Roof",

        stat:"pliage",

        dc:4,

        repeatable:true,

        success:{
            type:"travel",
            target:"roof"
        }
    },

    openWindow:{

        label:"Open Window",

        stat:"heft",

        dc:1,

        repeatable:false
    }
};

function rollD6(){

    return (
        Math.floor(
            Math.random()*6
        ) + 1
    );
}

function runChallenge(id){

    const challenge =
        challenges[id];

    if(!challenge){
        return;
    }

    const roll =
        rollD6()
        +
        getStat(
            challenge.stat
        );

    if(
        roll >= challenge.dc
    ){

        log(
            `Success! (${roll}/${challenge.dc})`,
            "success"
        );

        state.completedChallenges[
            id
        ] = true;

        if(
            challenge.success
        ){
            resolveSuccess(
                challenge.success
            );
        }

    }else{

        log(
            `Failure! (${roll}/${challenge.dc})`,
            "fail"
        );
    }

    render();
}

//==================================================
// CHALLENGE RESULTS
//==================================================

function resolveSuccess(
    success
){

    switch(
        success.type
    ){

        case "travel":

            moveTo(
                success.target
            );

            break;
    }
}

//==================================================
// CHARACTER PANEL
//==================================================

function renderCharacter(){

    const panel =
        document.getElementById(
            "characterPanel"
        );

    panel.innerHTML = `
        <h2>${player.name}</h2>

        <div>
            Pliage:
            ${getStat("pliage")}
        </div>

        <div>
            Tether:
            ${getStat("tether")}
        </div>

        <div>
            Heft:
            ${getStat("heft")}
        </div>

        <div>
            Acumen:
            ${getStat("acumen")}
        </div>
    `;
}

//==================================================
// WORLD INFO
//==================================================

function renderWorldInfo(){

    document
        .getElementById(
            "chapterDisplay"
        )
        .textContent =
        state.chapter;

    document
        .getElementById(
            "timeDisplay"
        )
        .textContent =
        isNight()
        ? "Night"
        : "Day";
}

//==================================================
// LOCATION
//==================================================

function renderLocation(){

    const location =
        locations[
            state.currentLocation
        ];

    document
        .getElementById(
            "locationLabel"
        )
        .textContent =
        location.label;

    document
        .getElementById(
            "locationDescription"
        )
        .textContent =
        location.description
        || "";
}

//==================================================
// CHILD LOCATIONS
//==================================================

function renderChildren(){

    const holder =
        document.getElementById(
            "childLocationButtons"
        );

    holder.innerHTML = "";

    const location =
        locations[
            state.currentLocation
        ];

    (
        location.children || []
    ).forEach(id=>{

        const child =
            locations[id];

        const button =
            document.createElement(
                "button"
            );

        button.textContent =
            child.label;

        button.onclick =
            ()=>moveTo(id);

        holder.appendChild(
            button
        );
    });

    const parentButton =
        document.getElementById(
            "parentButton"
        );

    if(location.parent){

        parentButton.style.display =
            "inline-block";

        parentButton.onclick =
            ()=>moveTo(
                location.parent
            );

    }else{

        parentButton.style.display =
            "none";
    }
}

//==================================================
// CONNECTIONS
//==================================================

function renderConnections(){

    const holder =
        document.getElementById(
            "connectionButtons"
        );

    holder.innerHTML = "";

    const location =
        locations[
            state.currentLocation
        ];

    (
        location.connections
        || []
    ).forEach(connection=>{

        if(
            !checkConditions(
                connection.conditions
            )
        ){
            return;
        }

        const destination =
            locations[
                connection.target
            ];

        const button =
            document.createElement(
                "button"
            );

        button.textContent =
            destination.label;

        button.onclick =
            ()=>moveTo(
                connection.target
            );

        holder.appendChild(
            button
        );
    });
}

//==================================================
// CHALLENGES
//==================================================

function renderChallenges(){

    const holder =
        document.getElementById(
            "challengeButtons"
        );

    holder.innerHTML = "";

    const location =
        locations[
            state.currentLocation
        ];

    (
        location.challenges
        || []
    ).forEach(id=>{

        const challenge =
            challenges[id];

        if(!challenge){
            return;
        }

        if(
            !challenge.repeatable &&
            state.completedChallenges[id]
        ){
            return;
        }

        const button =
            document.createElement(
                "button"
            );

        button.textContent =
            `${challenge.label}
             (${challenge.stat}
             DC${challenge.dc})`;

        button.onclick =
            ()=>runChallenge(id);

        holder.appendChild(
            button
        );
    });
}

//==================================================
// LOOTBOXES
//==================================================

function renderLootboxes(){

    const holder =
        document.getElementById(
            "lootboxButtons"
        );

    holder.innerHTML = "";

    const location =
        locations[
            state.currentLocation
        ];

    Object.entries(
        location.lootboxes || {}
    ).forEach(([id, box])=>{

        if(
            box.type==="search"
            &&
            box.inventory.length===0
        ){
            return;
        }

        const button =
            document.createElement(
                "button"
            );

        button.textContent =
            box.label;

        button.onclick =
            ()=>openLootbox(
                id
            );

        holder.appendChild(
            button
        );
    });
}

//==================================================
// PLACEHOLDER(lootbox types)
//==================================================

function openLootbox(id){

    activeLootbox = id;

    renderLootboxPanel();
}
let activeLootbox = null;

function renderLootboxPanel(){

    const panel =
        document.getElementById(
            "lootboxContent"
        );

    const location =
        locations[
            state.currentLocation
        ];

    const box =
        location.lootboxes[
            activeLootbox
        ];

    if(!box){

        panel.innerHTML =
            "Select a lootbox.";

        return;
    }

    let html = `
        <h4>${box.label}</h4>
        <p>Type: ${box.type}</p>
    `;

    if(
        box.type === "search"
    ){

        if(
            box.inventory.length===0
        ){

            html += "(empty)";

        }else{

            box.inventory.forEach(
                (itemId,index)=>{

                html += `
                    <button
                        onclick="
                            window.takeLoot(
                                ${index}
                            )
                        ">
                        Take
                        ${items[itemId].name}
                    </button>
                    <br>
                `;
            });
        }
    }

    if(
        box.type === "safe"
    ){

        html +=
            "<h4>Stored Items</h4>";

        if(
            box.inventory.length===0
        ){

            html += "(empty)";
        }

        box.inventory.forEach(
            (itemId,index)=>{

            html += `
                <button
                    onclick="
                        window.takeLoot(
                            ${index}
                        )
                    ">
                    Withdraw
                    ${items[itemId].name}
                </button>
                <br>
            `;
        });

        html +=
            "<hr><h4>Inventory</h4>";

        player.inventory.forEach(
            (itemId,index)=>{

            html += `
                <button
                    onclick="
                        window.depositLoot(
                            ${index}
                        )
                    ">
                    Deposit
                    ${items[itemId].name}
                </button>
                <br>
            `;
        });
    }

    if(
        box.type === "locked"
    ){

        html +=
            "<h4>Inventory</h4>";

        player.inventory.forEach(
            (itemId,index)=>{

            const item =
                items[itemId];

            if(
                item.special
            ){
                return;
            }

            html += `
                <button
                    onclick="
                        window.depositLoot(
                            ${index}
                        )
                    ">
                    Deposit
                    ${item.name}
                </button>
                <br>
            `;
        });
    }

    panel.innerHTML = html;
}

window.takeLoot =
function(index){

    const location =
        locations[
            state.currentLocation
        ];

    const box =
        location.lootboxes[
            activeLootbox
        ];

    const itemId =
        box.inventory[index];

    if(
        addItem(itemId)
    ){

        box.inventory.splice(
            index,
            1
        );
    }

    renderLootboxPanel();

    renderLootboxes();

    renderInventory();
};

window.depositLoot =
function(index){

    const location =
        locations[
            state.currentLocation
        ];

    const box =
        location.lootboxes[
            activeLootbox
        ];

    const itemId =
        player.inventory[index];

    player.inventory.splice(
        index,
        1
    );

    box.inventory.push(
        itemId
    );

    log(
        `Stored ${items[itemId].name}.`,
        "success"
    );

    renderLootboxPanel();

    renderInventory();
};


//==================================================
// INVENTORY
//==================================================

function renderInventory(){

    const panel =
        document.getElementById(
            "inventoryPanel"
        );

    let html = `
        <div class="inventoryWeight">
            Weight:
            ${inventoryWeight()}
            /
            ${player.capacity}
        </div>
    `;

    if(
        player.inventory.length===0
    ){

        html += "(empty)";

    }else{

        player.inventory.forEach(itemId=>{

            html += `
                <div class="inventoryItem">
                    ${items[itemId].name}
                </div>
            `;
        });
    }

    panel.innerHTML = html;
}

//==================================================
// MASTER RENDER
//==================================================

function render(){

    renderCharacter();

    renderWorldInfo();

    renderLocation();

    renderChildren();

    renderConnections();

    renderChallenges();

    renderLootboxes();

    renderInventory();
}
