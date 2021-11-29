import { React } from 'react'
// import { Menu, Transition } from '@headlessui/react'
// import { ChevronDownIcon } from '@heroicons/react/solid'
import '../../index.css'
import { logout } from '../../services/actions/api_auth'

const Dropdown = () => {

    const onTappedLogout = () =>{
        logout();
        window.location.reload();
    }

return (

    <div class="">

<div class="dropdown pr-5 m-3">
  <button class="home profile-dp inline-flex items-center">
    {/* <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg> */}
  </button>
  <ul class="dropdown-menu absolute hidden ">
      
    <li class="">
        <a 
        class="inline-flex items-center space-x-2 rounded-t text-red bg-white hover:bg-grey hover:bg-opacity-10 py-2 px-4 -mx-4 block whitespace-no-wrap" 
        onClick={onTappedLogout}>
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
            Logout</a></li>
  </ul>
</div>

</div>
);

}
export default Dropdown;