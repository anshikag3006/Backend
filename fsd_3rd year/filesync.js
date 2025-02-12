const fs=require("fs/promises");
// const read = async()=> {
//     const data = await fs.readFile("./data.txt", "utf-8");
//     console.log(data);
// }
//read();
const write = async()=>{
    const newData = "This is my new work"
    await fs.writeFile("./data1.txt",newData,"utf-8");
}
write();
console.log("1st")
console.log("2nd")
console.log("3rd")
console.log("4th")