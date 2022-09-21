import { ProviderBtn } from '@/common/provider-button/ProviderBtn';
import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'
import { Login } from './Login'
import { Signup } from './SignUp'
import { LoadSpinner } from '@/common/load-spinner/LoadSpinner'
import { Base } from '../../common/Layout/Base'
import { Section } from '../../common/Layout/Section'
import './auth.css'
import { Box } from '@/common/box/Box';

export default function Auth () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {
    loading,
    error,
    handleLogin,
    handleSignUp } = useAuth()

  return(
    <Base>
      <Section 
      yPadding='pt-32 pb-20'
      className='flex items-center justify-center min-h-screen' >
          
          <div className="flex flex-col items-center justify-center w-full lg:mb-10">
            <Box className='auth_wrapper' aria-live='polite'>
                <div className='auth_form_box'>
                <div 
                  className={`auth_backdrop_loading
                  ${loading ? "flex " : "hidden" }`}
                >
                  <LoadSpinner className="w-20 h-20 bg-slate-500 rounded-full" />
                
                </div>
                  <Routes>
                    <Route
                      path='login'
                      element={
                        <Login
                          password={password}
                          email={email}
                          setPassword={setPassword}
                          setEmail={setEmail}
                          handleLogin={handleLogin}
                          loading={loading}
                        />
                      }
                    />
                    <Route
                      path='signup'
                      element={
                        <Signup
                          password={password}
                          email={email}
                          setPassword={setPassword}
                          setEmail={setEmail}
                          handleSignup={handleSignUp}
                          loading={loading}
                        />
                      }
                    />
                  </Routes>

                  <div className='auth_apps_wrapper'>
                    <ProviderBtn
                      provider='google'
                      backgroundColor='#fff'
                      iconSrc='/icons/Google__G__Logo.svg'
                      className='w-[30%]'
                    />
                    <ProviderBtn
                      provider='discord'
                      backgroundColor='#5865F2'
                      iconSrc='/icons/Discord_Logo.svg'
                      className='w-[30%]'
                    />
                    <ProviderBtn
                      provider='github'
                      backgroundColor='#000'
                      iconSrc='/icons/Github_Logo_white.svg'
                      className='w-[30%]'
                    />
                  </div>

                  <Routes>
                    <Route
                      path='login'
                      element={
                        <p className='mt-4 text-slate-700'>
                          No estas registrado?
                          <Link
                            to='/auth/signup'
                            className='font-bold text-primary mx-1'
                          >
                            Registrarme
                          </Link>
                        </p>
                      }
                    ></Route>
                    <Route
                      path='/signup'
                      element={
                        <p className='mt-4 text-slate-700'>
                          ¿Ya tienes cuenta?
                          <Link
                            to='/auth/login'
                            className='font-bold text-primary mx-1'
                          >
                            Ingresar
                          </Link>
                        </p>
                      }
                    ></Route>
                  </Routes>
                </div>
              </Box>
              
              <p className='mt-4 text-center text-slate-500 font-secondary'>
                ¿Olvidaste tu contraseña?
                <Link to='login' className='font-bold text-primary mx-1'>
                  Recuperar
                </Link>
              </p>
            </div>
      </Section>
    </Base>
  )
}
