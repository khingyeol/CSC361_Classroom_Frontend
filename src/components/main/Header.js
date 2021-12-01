import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom';
import '../../index.css'
import Dropdown from './Dropdown'
import ModalDropdown from './ModalDropdown';
import { jwtAuth } from '../../services/actions/api_auth';

//ดึง api เส้นใหม่ GET /auth และ
//ถ้ามัน Response 401 ให้ window.location.reload() 
//แต่ถ้า Response 200 เอา res.data.data มาใช้ใน Header ได้เลย

const Header = () => {

  const { classid } = useParams();
  const [content, setContent] = useState([])

  useEffect( async () => {
    const res = await jwtAuth();

    if(res.auth){
      setContent(res.data)
    }else{
      setContent([])
      window.location.reload();

    }

  }, []);

    const head = content.map((item) =>
        <Dropdown data={item} />
    )

    return (
      <>
          <div className="header flex justify-between w-auto px-8 py-4">
          <Link to="/">
              <h1 className="top-4 left-6 self-center">on<span className="colors-green">Class</span>().</h1>
          </Link>
          <div className="space-x-4 top-4 right-4 self-center inline-flex items-center">
              
              
              {/* <button className="home square-btn m-3" type="button"></button> */}
                <div className=""> <ModalDropdown /> </div>
              <div className=""> {head} </div>
          </div>
  
          </div>
  
      </>
    );
  }
  
export default Header;