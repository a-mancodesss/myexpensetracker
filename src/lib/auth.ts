import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { connectToDb } from "./db/connect"
import {userModel} from "./db/model"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ""
          })
      
  ],
  callbacks:{
    async session({session}){
      return session;
    },
    
    async signIn({user,account,profile}){

      try{    
        connectToDb()
             const dbuserModel = await userModel.findOne({email:user.email})
             if(!dbuserModel){
              const  newUser = new userModel({
                  name:user.name,
                  email:user.email,
                  imgUrl:user.image,
              })
              await newUser.save();
              console.log('New userModel created',newUser)
            }
            }
           catch(e){
                console.log('Error storing the userModel',e)
                return false;
           }
          
        return true;
    }
  },

})