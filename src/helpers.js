import readline from "node:readline";
import https from "node:https";
import dotenv from "dotenv";

import { downloadGifs } from "./downloadScript.js";
import { setTimeout } from "node:timers";

dotenv.config();

const URL = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&lang=en`;

export const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let completionTimeout = null;

let limit = 1;
let rating = "g";
let offset = 0;
export let userQuery;

input.on("query", ()=> {
    console.log();
    console.log("Downloading...⏳");
    const req = https.get(`${URL}&q=${userQuery}&limit=${limit}&rating=${rating}&offset=${offset}`, (res) => {
        let data = "";

        res.on("data", (chunk) => {
            data += chunk;
        });

        res.on("end", () => {
            const gifData = JSON.parse(data);
            if (gifData?.meta?.status === 200) {
                const srcUrls = gifData?.data.map((item)=> {
                    return item?.images?.original?.url;
                });
                downloadGifs(srcUrls);
            } else {
                console.log(`🚫 Request failed with the following reason: ${gifData?.meta?.status} ${gifData?.meta?.msg} 🚫`);
                console.log();
                userInput();
            }
        });
    });

    req.on("error", (error) => {
        console.log("🚫 Request failed 🚫");
        console.error(error);
        console.log();
        userInput();
    });

    req.end();
});

input.on("downloaded", (index)=> {
    console.log(`Downloaded gif ${index} ✅`);
    if (index === limit) {
        completionTimeout = setTimeout(()=> {
            userInput();
        }, 1000);
    }
});

export function printMenu() {
    console.log();
    console.log(`
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣀⣀⣀⣠⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣀⣀⣀⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣠⡾⠟⠉⠉⠉⠀⠀⣀⡠⠤⠒⠒⠒⠒⠒⠚⠻⠭⠭⠭⢉⣉⠛⠛⠿⠿⠷⠶⣤⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢀⣼⡟⠁⠀⠀⠀⡠⠖⣉⡥⠔⢂⣈⣉⣉⣀⡉⠉⠉⠑⠒⠒⠒⠒⠒⠒⠒⠒⠊⠁⠂⠈⠙⠻⣦⣄⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣼⠏⠀⠀⠀⠔⢉⠤⣊⠵⠒⠉⠁⠀⠀⠀⠀⠙⢆⠀⠀⠀⠀⠀⠐⡚⠉⠉⠉⠉⠒⢤⡀⠀⠀⠈⢻⡇⠀⠀⠀⠀
⠀⠀⠀⠀⢀⣼⠟⠀⠀⠀⠀⠐⠁⠐⠁⣀⣤⣤⣤⣤⣤⣤⣄⡀⠈⠀⠀⠀⠀⠀⢸⠁⠀⠀⠀⠀⠀⠀⠱⠀⠀⠀⠘⣷⡀⠀⠀⠀
⠀⠀⢀⣴⣾⣯⣤⣤⡀⠀⠀⣤⡤⢠⣾⣿⣿⣿⣿⣿⣧⣈⠉⠻⣶⡄⠀⠀⢀⣀⣨⣴⣶⣿⣿⣿⣿⣦⠀⠤⠤⣀⣀⡙⢿⣦⡀⠀
⠀⣴⠟⡽⠉⢀⣤⠶⠶⡶⣶⣤⣈⠉⠉⠁⢀⣠⡶⠀⠉⠙⠻⢿⠟⠁⠀⠀⠘⠛⣿⡟⠋⠉⠉⠉⠁⠀⠀⠀⣀⣀⠳⢍⠢⡻⣷⡀
⣸⡏⢰⠁⣰⡟⠁⠀⣰⣧⡈⠉⠛⠛⠛⠛⠛⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⣧⡀⠀⠀⢰⣦⣴⡾⠛⡝⠛⠓⠀⡆⢣⣿⡇
⢿⡇⠘⡀⢿⡇⣤⣾⣿⡛⠛⠷⣦⣤⣀⡀⠀⠠⠀⠀⠤⢷⡾⠟⠛⢀⠀⠀⠀⠀⠀⠙⣿⣦⣀⠀⠀⠀⠀⢸⣷⠀⠀⡰⠃⣼⡿⠀
⠘⣷⡄⢧⡈⠻⠀⠀⢹⣷⣄⠀⠀⢹⣿⠿⠷⣶⣤⣀⡀⠈⢿⡄⠛⠛⠛⠃⠀⣀⢀⣴⠟⠙⠃⠙⠒⠄⣠⣾⣿⣧⠠⠖⢫⡿⠃⠀
⠀⠈⠻⣦⣍⠀⠀⠀⠀⠹⣿⡟⠷⣾⣿⣦⣀⠀⠈⠉⢹⡿⠷⠶⣶⣤⣤⣤⣀⣹⣟⣁⣀⣤⣤⣴⡶⠿⣿⠙⣿⣿⠀⠀⣿⠁⠀⠀
⠀⠀⠀⠈⢿⣦⠀⠀⠀⠀⠘⢿⣄⢘⣿⠻⠿⣿⣶⣦⣾⣇⣀⠀⠀⠀⢹⡏⠉⠉⠙⣿⠉⠉⠁⣹⣇⢀⣿⣧⣿⣿⠀⢸⡏⠀⠀⠀
⠀⠀⠀⠀⠀⢻⣆⠀⠀⠀⠀⠀⠻⣿⣏⠀⠀⠀⠉⢙⣿⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠀⢸⡇⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢻⣦⡀⠀⠀⠀⠀⠈⠛⢿⣦⣄⢀⣼⠇⠀⠀⠀⠈⢹⡟⠛⠛⠛⢿⣿⠿⠻⣿⠿⢿⣿⢻⣿⣿⠇⠀⠘⣇⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠙⠿⣦⣐⠢⣄⡒⠢⢄⡈⠙⠿⣿⣦⣤⣀⣀⠀⣸⡇⠀⠀⠀⣿⠃⠀⣼⡟⣀⣿⣧⣽⣿⠏⠀⠀⠀⣿⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠷⣦⣍⡓⠢⢬⣑⠢⢤⣈⠉⠉⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠉⠉⠁⡠⠀⢀⡀⠀⢿⡄⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠷⣦⣌⡉⠓⠪⠽⢶⣦⣤⡄⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⠤⠴⠚⠁⠀⡰⠁⠀⢸⡇⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠷⣦⣄⡀⠀⠀⠉⠉⠒⠒⠒⠠⠄⠀⠀⠠⠤⠤⠤⠒⠒⠉⠀⠀⠀⣼⠇⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠷⠶⣶⣶⣤⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⡾⠋⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠛⠛⠳⠶⠶⠶⠶⠶⠶⠶⠿⠛⠉⠀⠀⠀⠀⠀
        `);
    console.log();
    console.log("1. Request GIFs");
    console.log(`2. Change the number of GIFs to download (current: ${limit})`);
    console.log(`3. Change the rating (current: ${rating})`);
    console.log(`4. Change the search offset (current: ${offset})`);
    console.log("5. Exit");
    console.log();
}


export function userInput(){

    clearTimeout(completionTimeout);
    printMenu();

    input.question("Enter a number: ", (number) => {
        switch(number){
            case "1":
                getUserQuery();
                break;
            case "2":
                updateLimit();
                break
            case "3":
                updateRating();
                break;
            case "4":
                updateOffset();
                break;
            case "5":
                console.log("Bye...🖖");
                console.log();
                input.close();
                process.exit();
            default:
                console.log("🚫 Invalid input 🚫");
                userInput();
                break;
        }
    });
}


function updateLimit() {

    input.question("Enter new limit (min 1, max 20): ", (newLimit)=> {
        const limitPattern = /(?<!.)([1-9]{1}[0-9]{0,1})(?!.)/g;
        if (!newLimit.match(limitPattern) || (+newLimit < 1 || +newLimit > 20)) {
            console.log("🚫 Invalid input 🚫");
            updateLimit();
        } else {
            limit = +newLimit;
            userInput();
        }
    });
}


function updateRating() {

    input.question("Enter new rating (Acceptable values include g, pg, pg-13, r): ", (newRating)=> {
        if (!["g", "pg", "pg-13", "r"].includes(newRating)) {
            console.log("🚫 Invalid input 🚫");
            updateRating();
        } else {
            rating = newRating;
            userInput();
        }
    });
}

function updateOffset() {
    input.question("Enter new offset (e.g. 10): ", (newOffset)=> {
        const offsetPattern = /(?<!.)\d{1,6}(?!.)/g;
        if (!newOffset.match(offsetPattern)) {
            console.log("🚫 Invalid input 🚫");
            updateOffset();
        } else {
            offset = newOffset;
            userInput();
        }
    });
}


function getUserQuery() {

    input.question("Enter the search query (e.g. 'dancing cat') (max length 50 chars): ", (query)=> {
        if (query.length > 50 || query.length < 2) {
            console.log("🚫 The query should be between 2 - 50 chars 🚫");
            getUserQuery();
        } else {
            userQuery = query.split(" ").join("+");
            input.emit("query");
        }
    });
}