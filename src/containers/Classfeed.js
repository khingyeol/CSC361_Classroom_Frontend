import React from 'react';
import '../index.css';


function Classfeed(){
    return(
<div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
  <div class="flex-shrink-0">
    <img class="h-12 w-12" src="https://pbs.twimg.com/media/FDraKU8VgAgScBR?format=png&name=360x360" alt="ChitChat Logo" />
  </div>

  <div>
    <div class="text-xl font-medium text-black">ChitChat</div>
    <p class="text-gray-500">You have a new message!</p>
  </div>
</div>
  )
}

export default Classfeed;