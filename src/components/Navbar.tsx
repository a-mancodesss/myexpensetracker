import { ModeToggle } from './DarkModeToggle'

const Navbar = () => {
  return (
    <div className='flex justify-between'>
        <h1 className=" font-playfair heading">My Expense Tracker</h1>
        <ModeToggle />
    </div>
  )
}

export default Navbar