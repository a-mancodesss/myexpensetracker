import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { connectToDb } from "./db/connect"
import {User} from "./db/model"
 
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
        console.log('User*****************',user)
             const dbUser = await User.findOne({email:user?.email})
             if(!dbUser){
              const  newUser = new User({
                  name:user.name,
                  email:user.email,
                  imgUrl:user.image,
              })
              await newUser.save();
              console.log('New user created',newUser)
            }
            }
           catch(e){
                console.log('Error storing the user',e)
                return false;
           }
          
        return true;
    }
  },

})