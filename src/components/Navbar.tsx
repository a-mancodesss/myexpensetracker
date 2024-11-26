
import {SignIn, SignOut} from './LoginOut'
import { auth } from '@/lib/auth'
import { ModeToggle } from './toggle'

const Navbar = async() => {
  const session = await auth()
  const firstName = session?.user?.name?.split(' ')[0]
  return (
    <div className='relative flex justify-around items-center font-playfair sm:text-xl'>
  <div className="left text-yellow-500 font-bold">
  {session?.user?.name ? firstName :'MXT'}
  </div>
  <div className="mid text-center ">My Expense Tracker</div>
  
    <div className="statusAndToggle flex items-center gap-2 font-ralway text-sm">
      <ModeToggle/>
      {session?.user?.name ? <SignOut/> : <SignIn />}
    </div>
  
    </div>
  )
}

export default Navbar