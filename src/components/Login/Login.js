/* eslint-disable react-hooks/exhaustive-deps */
import "./Login.css"
import { Formik } from "formik"
import Img from "../../images/images";
import { useDispatch } from "react-redux";
import { selectUsers, toggleCurrentUser } from "../../store/slices/usersSlice/usersSlice";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Login = () => {
    const dispatch = useDispatch()
    const {currentUser} = useSelector(selectUsers)
    const navigate = useNavigate()
    useEffect(() => {
        if(currentUser){
            navigate('/main')
        }
    },[currentUser])
    return (
        <div className="Login">
            <div className="Heading">
                <h5>LOGIN</h5>
                <p>How do i get access order,wishlist and recomendation ?</p>
            </div>
            <Formik
                initialValues={{
                    email: 'john@gmail.com',
                    password: 'm38rmF$'
                }}
                onSubmit={(values, {resetForm})=>{
                    dispatch(toggleCurrentUser(values))
                    resetForm() 
                }}    
            >
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit })=>(
                    <form onSubmit={handleSubmit} className="Form">
                        <div className="InputContainer">
                            <label htmlFor="email">Email</label>
                            <input
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    name="email"
                                    type="text"
                            />
                                {touched.email && errors.email && <p>{errors.email}</p>}
                        </div>
                        <div className="InputContainer">
                            <label htmlFor="password">Password</label>
                                <input
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    name="password"
                                    type="password"
                                />
                                <span>Forgot Password?</span>
                            {touched.password && errors.password && <p>{errors.password}</p>}
                        </div>
                            <button type="submit" >Sign in</button>
                    </form>
                )
                }
            </Formik>
            <p className="RegisterLink">If you are new,<Link to="/reg">Create Now</Link> </p>
            <div className="Orspans">
                    <span>Or</span>
            </div>
            <div className="LoginButtons">
                <button className="GoogleSignIn"><img src={Img.fbIcon} alt="" /> Sign in</button>
                <button className="FacebookSignIn"><img src={Img.googleIcon} alt="" /> Sign in</button>
            </div>
        </div>
    );
}

export default Login;
