import React, { useState } from 'react';
import '../../index.css'
import { joinClass } from '../../services/actions/api_class';

const ModalDropdown = () => {
    const [joinModal, setjoinModal] = React.useState(false);
    const [createModal, setcreateModal] = React.useState(false);

    const [inputsJoin, setInputsJoin] = useState({class_code: ''})

    const handleChangeJoin = (e) => {
        const data = {...inputsJoin}
        data[e.target.name]=e.target.value
        setInputsJoin(data)
    }

    const onTappedJoin = async (e) => {
        e.preventDefault();
        const res = await joinClass(
            {class_code:inputsJoin.class_code}
        )

        if (res.data.data = 'OK'){
            console.log('OK',res.data.data)
            window.location.reload();
        }else{
            console.log(res.data.data)
        }
    }


return (

    <div class=""
    >

<div class="dropdown">
    <button className="home square-btn" type="button"></button>
        <ul class="dropdown-menu absolute hidden ">
                <li class="">
                <a 
                class="inline-flex items-center space-x-2 rounded-t bg-white hover:bg-grey hover:bg-opacity-10 py-2 px-4 -mx-4 block whitespace-no-wrap" 
                onClick={setjoinModal}>
                    Join Class</a></li>

                <li class="">
                <a 
                class="inline-flex items-center space-x-2 rounded-t bg-white hover:bg-grey hover:bg-opacity-10 py-2 px-4 -mx-4 block whitespace-no-wrap" 
                onClick={setcreateModal}>
                    Create Class</a></li>
        </ul>
</div>


{joinModal ? (
          <div className=''>
            <div
              className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50"

            >
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="box shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-3xl font-semibold">
                      Join Class
                    </h3>
                  </div>
                  {/*body*/}
                  <form>

                  <div className="relative p-6 flex-auto">
                    <p className="text-blueGray-500 text-lg leading-relaxed">
                        Enter Class Code :
                    </p>
                    <input className="tf"
                    type="text"
                    value={inputsJoin.class_code}
                    name="class_code"
                    onChange={handleChangeJoin}></input>
                  </div>


                  </form>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className=" text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setjoinModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className="btn bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setjoinModal(false),onTappedJoin}
                    >
                      Join
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </div>
        ) : null}



{createModal ? (
          <div className=''>
            <div
              className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50"

            >
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="box shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-3xl font-semibold">
                      Create Class
                    </h3>
                  </div>
                  {/*body*/}
                  <form className="p-6 space-y-2">

                  <div className="relative flex-auto">
                    <span className=" text-grey">Class Name :</span>
                        <input 
                        type="text" 
                        className="tf w-full focus:outline-none focus:ring-2 focus:ring-green" 
                        placeholder="" 
                        name=""
                        // value={} 
                        // onChange={}
                        />
                  </div>

                  <div className="relative flex-auto">
                    <span className=" text-grey">Class Subject :</span>
                        <input 
                        type="text" 
                        className="tf w-full focus:outline-none focus:ring-2 focus:ring-green" 
                        placeholder="" 
                        name=""
                        // value={} 
                        // onChange={}
                        />
                  </div>


                  <div className="relative flex-auto">
                    <div className='flex space-x-4'>
                        <span className="flex-1 text-grey">Class Section :</span>
                        <span className="flex-1 text-grey">Class Room :</span>
                    </div>

                    <div className='flex space-x-4'>
                        <input 
                        type="text" 
                        className="flex-1 tf w-full focus:outline-none focus:ring-2 focus:ring-green" 
                        placeholder="" 
                        name=""
                        // value={} 
                        // onChange={}
                        />
                        <input 
                        type="text" 
                        className="flex-1 tf w-full focus:outline-none focus:ring-2 focus:ring-green" 
                        placeholder="" 
                        name=""
                        // value={} 
                        // onChange={}
                        />

                    </div>

                  </div>

                  <div className="relative flex-auto">
                    <span className=" text-grey">Class Description :</span>
                        <input 
                        type="text" 
                        className="tf w-full focus:outline-none focus:ring-2 focus:ring-green" 
                        placeholder="" 
                        name=""
                        // value={} 
                        // onChange={}
                        />
                  </div>

                    

                  </form>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className=" text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setcreateModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className="btn bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setcreateModal(false)}
                    >
                      Create
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </div>
        ) : null}

</div>
);

}
export default ModalDropdown;