import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('تسجيل الدخول باستخدام:', { email, password, rememberMe });
    // Here you would typically handle authentication
    // If successful, you might redirect the user to a dashboard or home page
    navigate('/dashboard'); // Example redirect after successful login
  };

  return (
    <div
      className='flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-indigo-100 to-blue-50 p-4'
      dir='rtl'
    >
      <div className='w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-xl'>
        {/* رأس الصفحة */}
        <div className='bg-gradient-to-r from-blue-600 to-indigo-700 px-8 py-10 text-center text-white'>
          <h1 className='mb-3 text-3xl font-bold'>مرحباً بعودتك</h1>
          <p className='text-blue-100'>
            سعداء برؤيتك مجدداً! يرجى تسجيل الدخول للمتابعة
          </p>
        </div>

        {/* نموذج تسجيل الدخول */}
        <div className='p-8'>
          <form onSubmit={handleSubmit}>
            {/* حقل البريد الإلكتروني */}
            <div className='mb-6'>
              <label
                htmlFor='email'
                className='mb-2 block text-sm font-medium text-gray-700'
              >
                البريد الإلكتروني
              </label>
              <div className='relative'>
                <input
                  id='email'
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='w-full rounded-lg border border-gray-300 px-4 py-3 pr-10 text-right focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200'
                  placeholder='أدخل بريدك الإلكتروني'
                  required
                />
                <Mail className='pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400' />
              </div>
            </div>

            {/* حقل كلمة المرور */}
            <div className='mb-6'>
              <div className='mb-2 flex items-center justify-between'>
                <button
                  type='button'
                  className='text-xs font-medium text-blue-600 hover:text-blue-800'
                  onClick={() => console.log('نسيت كلمة المرور')}
                >
                  نسيت كلمة المرور؟
                </button>
                <label
                  htmlFor='password'
                  className='text-sm font-medium text-gray-700'
                >
                  كلمة المرور
                </label>
              </div>
              <div className='relative'>
                <input
                  id='password'
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className='w-full rounded-lg border border-gray-300 px-4 py-3 pr-10 text-right focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200'
                  placeholder='أدخل كلمة المرور'
                  required
                />
                <button
                  type='button'
                  onClick={() => setShowPassword(!showPassword)}
                  className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600'
                >
                  {showPassword ? (
                    <EyeOff className='h-5 w-5' />
                  ) : (
                    <Eye className='h-5 w-5' />
                  )}
                </button>
              </div>
            </div>

            {/* تذكرني */}
            <div className='mb-6 flex items-center'>
              <label
                htmlFor='remember-me'
                className='mr-2 text-sm text-gray-600'
              >
                تذكرني
              </label>
              <input
                id='remember-me'
                type='checkbox'
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className='h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500'
              />
            </div>

            {/* زر تسجيل الدخول */}
            <button
              type='submit'
              className='mb-4 w-full rounded-lg bg-gradient-to-r from-blue-600 to-indigo-700 py-3 text-center text-sm font-medium text-white shadow-md transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300'
            >
              تسجيل الدخول
            </button>

            {/* رابط إنشاء حساب */}
            <div className='text-center text-sm text-gray-600'>
              ليس لديك حساب؟{' '}
              <Link
                to='/signup'
                className='font-medium text-blue-600 hover:text-blue-800'
              >
                إنشاء حساب جديد
              </Link>
            </div>
          </form>

          {/* خيارات تسجيل الدخول الأخرى */}
          <div className='mt-8'>
            <div className='relative mb-6'>
              <div className='absolute inset-0 flex items-center'>
                <div className='w-full border-t border-gray-300'></div>
              </div>
              <div className='relative flex justify-center text-sm'>
                <span className='bg-white px-2 text-gray-500'>
                  أو تسجيل الدخول باستخدام
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
