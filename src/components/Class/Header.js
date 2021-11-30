import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom';
import '../../index.css'
import { jwtAuth } from '../../services/actions/api_auth';
import App from '../../App';
import AuthPage from '../../containers/AuthPage';
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

      const what = () =>{
          this.setState(state => ({eiei:'kk'}));
      }
    

return (
    <div className="header flex justify-between w-auto px-8 py-4">
        <Link to="/">
            <h1 className="top-4 left-6 self-center">web<span className="colors-green">site</span></h1>
        </Link>
        <div className="space-x-4 top-4 right-4 self-center">
            <button className="home profile-dp"></button>
        </div>
    </div>
    );
};
export default Header;