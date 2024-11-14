import { Button } from '@/components/ui/button'
import { signIn } from 'next-auth/react'
import toast from 'react-hot-toast'

  export default async function page() {
    async function loginWithGoogle() {
      try {
          await signIn('google')
        } catch (error) {
            console.log(error)
            toast.error('Something went wrong with your login!!!')
      } 
    }
    
    return (
        <div>
            <h1>Sign In</h1>
            <Button onClick={loginWithGoogle}>Sign In with Google</Button>
        </div>
    )
}

