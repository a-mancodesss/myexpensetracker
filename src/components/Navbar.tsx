
import {SignIn, SignOut} from './LoginOut'
import { auth } from '@/lib/auth'

const Navbar = async() => {
  const session = await auth()
  const firstName = session?.user?.name?.split(' ')[0]
  return (
    <div className='flex justify-between items-center font-playfair sm:text-xl'>
  <div className="left text-yellow-500">
  {session?.user?.name ? firstName :'MXT'}
  </div>
  <div className="mid text-center ">My Expense Tracker</div>
  
    <div className="status">
      {session?.user?.name ? <SignOut/> : <SignIn />}
    </div>
  
    </div>
  )
}

export default Navbar