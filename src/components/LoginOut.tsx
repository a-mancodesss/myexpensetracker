
import { signIn,signOut } from "@/lib/auth"
import exp from "constants"
 
  function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("google")
      }}
    >
      <button type="submit"> SignIn</button>
    </form>
  )
} 
 
 function SignOut() {
  return (
    <form
      action={async () => {
        "use server"
        await signOut()
      }}
    >
      <button type="submit">SignOut</button>
    </form>
  )
}
export {SignIn, SignOut}