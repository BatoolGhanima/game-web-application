import errorImage from '../assets/error.svg'
import { Link } from 'react-router-dom'
const ErrorPage = () => {
  return (
    <div>
      <div className=' mt-32 flex flex-col justify-center items-center'>
        <img src={errorImage} alt="" className='w-1/2' />

      <p>we are sory , something went wrong :( </p>
      <Link to={'/'} className='text-purple-500'> ← back to home </Link>
    </div></div>
  )
}

export default ErrorPage

//this component created to show page error if anything wrong or not found page