import React, { useState } from 'react'
import loginIcons from '../../assets/signin_custom_green.gif'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate} from 'react-router-dom';
import imageTobase64 from '../../helpers/imageTobase64';
import SummaryApi from '../../common';
import { toast } from 'react-toastify';
import Footer from '../Footer';

const SignUp = () => {
    const [showPassword,setShowPassword] = useState(false);
    const [showConfrimPassword, setShowConfirmPassword] = useState (false);
    const [data,setData] = useState({
        email : "",
        password : "",
        name: "",
        confrimPassword: "",
        profilePic: ""
    })

    const navigate = useNavigate()
    const handleOnChange = (e) =>{
        const { name , value } = e.target

        setData((preve)=>{
            return{
                ...preve,
                [name] : value
            }
        })
    }
    const handleUploadPic = async(e) =>{
        const file = e.target.files[0]
        
        const imagePic = await imageTobase64(file)
        
        setData((preve)=>{
          return{
            ...preve,
            profilePic : imagePic
          }
        })
    
      }

    const handleSubmit = async(e) =>{
        e.preventDefault()
        if(data.password === data.confrimPassword){
            const dataReponse = await fetch(SummaryApi.signUp.url,{
                method: SummaryApi.signUp.method,
                headers : {
                    "content-type" : "application/json"
                },
               body: JSON.stringify(data)
            })
            const dataApi = await dataReponse.json()

            if(dataApi.success){
                toast.success(dataApi.message)
                navigate("/login")
            }
            if(dataApi.error){
                toast.error(dataApi.message)
            }
        }else{
            console.log("please check your passwaord and confirm password");
            
        }
        
    }

    console.log("data login",data)

  return (
    <>
      <section id='sign-up'>
        <div className='mx-auto container p-20'>

            <div className='bg-slate-100 p-5 w-full max-w-sm mx-auto'>
                    <div className='w-20 h-20 mx-auto relative overflow-hidden rounded-full'>
                        <div>
                        <img src={data.profilePic || loginIcons} alt='login icons'/>
                        </div>
                        <form>
                            <label>
                            <div className='text-xs bg-slate-200 pb-4 pt-2 cursor-pointer text-center absolute bottom-0 w-full bg-opacity-80'>
                            Upload Photo
                        </div>
                        <input type="file" className='hidden' onChange={handleUploadPic}/>
                            </label>
                        </form>
                    </div>

                    <form className='pt-6 flex flex-col gap-2' onSubmit={handleSubmit}>
                        <div className='grid'>
                        <label>Name : </label>
                            <div className='bg-white p-2'>
                                <input 
                                    type='name' 
                                    placeholder='Enter your Name' 
                                    name='name'
                                    value={data.name}
                                    onChange={handleOnChange}
                                    required
                                    className='w-full h-full outline-none bg-transparent'/>
                            </div>
                        </div>
                        <div className='grid'>
                        <label>Email : </label>
                            <div className='bg-white p-2'>
                                <input 
                                    type='email' 
                                    placeholder='Enter your Email...' 
                                    name='email'
                                    value={data.email}
                                    onChange={handleOnChange}
                                    required
                                    className='w-full h-full outline-none bg-transparent'/>
                            </div>
                        </div>

                        <div>
                            <label>Password : </label>
                            <div className='bg-white p-2 flex'>
                                <input 
                                    type={showPassword ? "text" : "password"} 
                                    placeholder='Enter your password...'
                                    value={data.password}
                                    name='password' 
                                    onChange={handleOnChange}
                                    required
                                    className='w-full h-full outline-none bg-transparent'/>
                                <div className='cursor-pointer text-xl' onClick={()=>setShowPassword((preve)=>!preve)}>
                                    <span>
                                        {
                                            showPassword ? (
                                                <FaEyeSlash/>
                                            )
                                            :
                                            (
                                                <FaEye/>
                                            )
                                        }
                                    </span>
                                </div>
                                
                            </div>
                           
                        </div>
                        <div>
                            <label> Confirm Password : </label>
                            <div className='bg-white p-2 flex'>
                                <input 
                                    type={showConfrimPassword ? "text" : "password"} 
                                    placeholder='Confirm your password...'
                                    value={data.confrimPassword}
                                    name='confrimPassword' 
                                    onChange={handleOnChange}
                                    required
                                    className='w-full h-full outline-none bg-transparent'/>
                                <div className='cursor-pointer text-xl' onClick={()=>setShowConfirmPassword((preve)=>!preve)}>
                                    <span>
                                        {
                                            showConfrimPassword ? (
                                                <FaEyeSlash/>
                                            )
                                            :
                                            (
                                                <FaEye/>
                                            )
                                        }
                                    </span>
                                </div>
                                
                            </div>
                            
                        </div>


                        <button className='bg-[#277F58] hover:bg-[#1e6554] text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6'>Sign Up</button>

                    </form>

                    <p className='my-5'>Already have account ? <Link to={"/login"} className=' text-red-600 hover:text-red-700 hover:underline'>Login</Link></p>
            </div>


        </div>
    </section>
    <Footer/>
    </>
  )
}

export default SignUp
