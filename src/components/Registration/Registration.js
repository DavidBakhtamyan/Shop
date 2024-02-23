import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as yup from "yup"
import Img from '../../images/images';
import { registration } from '../../store/slices/usersSlice/usersSlice';
import './Registration.css'

const Registration = () => {
    const validation = yup.object().shape({
        username: yup.string().typeError("must be string").required("This field is required"),
        email: yup.string().typeError("must be string").email("invalid email").required("This field is required"),
        password: yup.string().typeError("must be string").min(3, "at least 3 characters").required("This field is required")
    })
    const dispatch = useDispatch()
    const navigate = useNavigate()
    return (
        <div className="Registration">
        <div className="Heading">
            <h5>CREATE ACCOUNT</h5>
            <p className='RegP'>How do i get access order,wishlist and recommendation ?</p>
        </div>
        <Formik
            initialValues={{
                username: '',
                email: '',
                password: ''
            }}
            validateOnBlur
            validationSchema={validation}
            onSubmit={(values)=>{
               dispatch(registration(values))
               navigate('/')
            }}    
        >
            {({values, errors, touched, isValid, handleChange, handleBlur, handleSubmit, dirty})=>(
                <form onSubmit={handleSubmit} className="Form">
                    <div className="InputContainer">
                        <label htmlFor="username">User Name</label>
                        <input
                                value={values.username}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                name="username"
                                type="text"
                        />
                            {touched.username && errors.username && <p className='Error'>{errors.username}</p>}
                    </div>
                    <div className="InputContainer">
                        <label htmlFor="email">Email</label>
                            <input
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                name="email"
                                type="text"
                            />
                        {touched.email && errors.email && <p className='Error'>{errors.email}</p>}
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
                        {touched.password && errors.password && <p className='Error'>{errors.password}</p>}
                            <span className='ForgotPassword'>Forgot Password?</span>
                    </div>
                    <button type="submit" disabled={!isValid && !dirty}>Sign Up</button>
                </form>
            )
            }
        </Formik>
        <p className="RegisterLink">If you are new, Create Now</p>
        <div className="Orspans">
                <span>Or</span>
        </div>
        <div className="RegistrationButtons">
            <button className="GoogleSignIn"><img src={Img.fbIcon} alt="" /> Sign in</button>
            <button className="FacebookSignIn"><img src={Img.googleIcon} alt="" /> Sign in</button>
        </div>
    </div>
    );
}

export default Registration;
