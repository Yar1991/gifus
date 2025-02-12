import { exec } from "node:child_process";
import { promisify } from "node:util";
import { randomUUID } from "node:crypto";
import { input, userQuery } from "./helpers.js";

const promiseExec = promisify(exec);


export function downloadGifs(urls) {
  const OS = process.platform;
  const reqCommand = OS === "win32" ? "powershell curl.exe -s -L -o" : "curl -s -L -o";
  const updatedQueryText = userQuery.replaceAll("+", "");


  urls.forEach( async (url, index)=> {
    const randUUID = randomUUID();
    try {
      const { _, stderr } = await promiseExec(`${reqCommand} ~/Downloads/${updatedQueryText}_${randUUID}.gif ${url}`);
        if (stderr) {
          console.log("🚫 Process failed 🚫");
          console.log(stderr);
          process.exit();
        } else {
          input.emit("downloaded", ++index);
        }
    } catch(err) {
      console.log("🚫 Process failed 🚫");
    }
  }); 

}
