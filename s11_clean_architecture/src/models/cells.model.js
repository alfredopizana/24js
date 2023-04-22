import mongoose, { Schema } from "mongoose";

const cellsSchemma = new mongoose.Schema({

    name: String, // Spark
    koders: [{ type: String }] // ids ["1","2","3"] = [{name:"Isra","lastName":""}] 

    /**
     * ObjectId - Ref
     * 
     * 
     * .populate
     */
})

// const Koder = mongoose.model('koders', koderSchema)


export { } // Esto es un objeto