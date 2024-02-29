import mongoose from "mongoose";


export default function connect() : void {
    mongoose.connect('mongodb://127.0.0.1:27017/tax_chatting').then((res: any) => { console.log("connexion réussite") }
    ).catch((err:any) => console.log("erreur")
    )
}