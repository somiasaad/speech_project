import mongoose from 'mongoose'

export const dbconnection = () => {
    mongoose.connect("mongodb+srv://somiasaad012:AT6qx36UmejSCFmc@cluster0.wdsvst1.mongodb.net/EmotionDB")
        .then(() => {
            console.log("database connected .");
        }).catch((err) => {
            console.log("error in connect", err);
        })
}



// mongodb+srv://graduated:graduated12@cluster0.xnavg3n.mongodb.net/graduatedproject