import mongodb from "mongodb"
const ObjectId = mongodb.ObjectId
let sva

export default class svaDAO{
    static async injectDB(conn)
    {
        if(sva)
        {
            return
        }
        try{
            sva = await conn.db("Svajobportal").collection("Applications")
            
        }catch(e)
        {
            console.error(`Unable to establish collection handles in userDAO: ${e}`)
        }
    }

    static async addJobDAO(firstname,lastname,email,mobileno,resume,appliedPosition)
    {
        try{
            const svaDoc = {
                firstname :firstname,
                lastname : lastname,
                email : email,
                mobileno : mobileno,
                resume : resume,
                appliedPosition : appliedPosition
            }
            
            const addApp = await sva.insertOne(svaDoc)
           
            return addApp
        }catch(e)
        {
            console.error(`Unable to post activity: ${e}`);
            return {error:e}
        }
    }

    static async getJobDAO()
    {
        try{
         const getSva = await sva.find({}).toArray()
         return getSva
        }catch(e)
        {
            console.error(`Unable to Get Activities: ${e}`)
            return {error:e}
        }
    }

    static async getIdJobDAO(id)
    {
        try{
         const getsva = await sva.find({_id:new ObjectId(id)}).toArray()
         
         return getsva
        }catch(e)
        {
            console.error(`Unable to Get Activities: ${e}`)
            return {error:e}
        }
    }

    static async updateJobDAO(id,firstname,lastname,email,mobileno,resume,appliedPosition)
    {
        try{
            const updatesva =await sva.updateOne(
                {_id: new ObjectId(id)},
                {$set : {
                    firstname :firstname,
                    lastname : lastname,
                    email : email,
                    mobileno : mobileno,
                    resume : resume,
                    appliedPosition : appliedPosition
                }}
            )
            
            return updatesva
        }catch(e)
        {
            console.error(`Unable to Update Activities: ${e}`)
            return {error:e}
        }
    }

    static async deleteJobDAO(id)
    {
        
        try{
            const deleteSva = await sva.deleteOne({
                _id: new ObjectId(id),
            })
            
            return deleteSva
        }catch(e)
        {
            console.error(`Unable to Delete Activities: ${e}`)
            return {error:e}
        }
    }
}