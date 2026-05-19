// 'use client'
// import { Card } from '@heroui/react';
// import { useState } from "react";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { Check } from "@gravity-ui/icons";
// import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
// import React from 'react';
// import { authClient } from '@/lib/auth-client';
// import { redirect } from 'next/navigation';
// import { GiShuttlecock } from 'react-icons/gi';
// import Link from 'next/link';

// const RegisterPage = () => {
//     const [showPassword, setShowPassword] = useState(false);
//     const onSubmit = async (e) => {
//         e.preventDefault();

//         const formData = new FormData(e.currentTarget);
//         const user = Object.fromEntries(formData.entries());

//         const { data, error } = await authClient.signUp.email({
//         email:  user.email,
//         password: user.password,
//         name: user.name,
//         image: user.image
//     })

//     if(data){
//         redirect('/')
//     }

//     if(error){
//         //toast
//         alert('Error')
//     }
    

//     }
//     return (
//         <div className='max-w-7xl mx-auto'>
//             {/* ================= LOGO ================= */}
//             <Link href="/" className="flex items-center gap-3 cursor-pointer group">

//                 <div className="bg-gradient-to-br from-emerald-500 via-green-400 to-teal-500 p-3 rounded-2xl shadow-lg group-hover:scale-105 transition">
//                     <GiShuttlecock className="text-2xl text-white" />
//                 </div>

//                 <div>
//                     <h1 className="text-2xl font-black tracking-tight bg-gradient-to-r from-emerald-400 via-green-400 to-teal-300 bg-clip-text text-transparent">
//                         SportNest
//                     </h1>

//                     <p className="text-[8px] uppercase tracking-[4px] text-gray-400">
//                         Book • Play • Compete
//                     </p>
//                 </div>

//             </Link>
//             <div className='text-center my-3'>
//                 <h1 className='text-2xl font-bold'>Create Account</h1>
//                 <p>Start Using SportNest For Free</p>
//             </div>
//             <Card className='border rounded-none'>
//                 <Form onSubmit={onSubmit} className="flex w-96 flex-col gap-4">
//                     {/* Name */}
//                     <TextField
//                         isRequired
//                         name="name"
//                         type="text"

//                     >
//                         <Label>Name</Label>
//                         <Input placeholder="Enter Your Name" />
//                         <FieldError />
//                     </TextField>
//                     {/* Email */}
//                     <TextField
//                         isRequired
//                         name="email"
//                         type="email"
//                         validate={(value) => {
//                             if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
//                                 return "Please enter a valid email address";
//                             }
//                             return null;
//                         }}
//                     >
//                         <Label>Email</Label>
//                         <Input placeholder="john@example.com" />
//                         <FieldError />
//                     </TextField>
//                     {/* Photo URL */}
//                     <TextField
//                         name="image"
//                         type="url"

//                     >
//                         <Label>Photo URL</Label>
//                         <Input placeholder="Photo URL" />
//                         <FieldError />
//                     </TextField>
//                     {/* Password */}
//                     <TextField
//                         isRequired
//                         minLength={6}
//                         name="password"
//                         type={showPassword ? "text" : "password"}
//                         validate={(value) => {
//                             if (value.length < 6) {
//                                 return "Password must be at least 6 characters";
//                             }
//                             if (!/[A-Z]/.test(value)) {
//                                 return "Password must contain at least one uppercase letter";
//                             }
//                             if (!/[a-z]/.test(value)) {
//                                 return "Password must contain at least one lowercase letter";
//                             }
//                             return null;
//                         }}
//                     >
//                         <Label>Password</Label>

//                         <div className="relative w-full">
//                             <Input
//                                 className="w-full pr-10"
//                                 placeholder="Enter your password"
//                             />

//                             <button
//                                 type="button"
//                                 onClick={() => setShowPassword(!showPassword)}
//                                 className="absolute right-3 top-1/2 -translate-y-1/2 z-10 text-gray-500 hover:text-gray-700"
//                             >
//                                 {showPassword ? <FaEyeSlash /> : <FaEye />}
//                             </button>
//                         </div>

//                         <Description>
//                             Must be at least 6 characters with 1 uppercase and 1 lowercase
//                         </Description>

//                         <FieldError />
//                     </TextField>
//                     <div className="flex justify-center gap-2">
//                         <Button className={'rounded-none w-full bg-lime-400'} type="submit">
//                             Create Account
//                         </Button>
//                     </div>
//                 </Form>
//             </Card>
//         </div>
//     );
// };

// export default RegisterPage;



// *********************************************************************


// 'use client'

// import React, { useState } from 'react';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import { Card } from '@heroui/react';
// import {
//     Button,
//     Description,
//     FieldError,
//     Form,
//     Input,
//     Label,
//     TextField
// } from "@heroui/react";

// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { GiShuttlecock } from 'react-icons/gi';
// import { authClient } from '@/lib/auth-client';

// const RegisterPage = () => {
//     const [showPassword, setShowPassword] = useState(false);
//     const router = useRouter();

//     const onSubmit = async (e) => {
//         e.preventDefault();

//         const formData = new FormData(e.currentTarget);
//         const user = Object.fromEntries(formData.entries());

//         const { data, error } = await authClient.signUp.email({
//             email: user.email,
//             password: user.password,
//             name: user.name,
//             image: user.image || undefined
//         });

//         if (data) {
//             router.push('/');
//         }

//         if (error) {
//             alert(error.message || "Registration failed");
//         }
//     };

//     return (
//         <div className='max-w-7xl mx-auto pt-10 px-4'>

//             {/* Logo */}
//             <div className='flex justify-center mb-8'>
//                 <Link
//                     href="/"
//                     className="flex items-center gap-3 cursor-pointer group"
//                 >
//                     <div className="bg-gradient-to-br from-emerald-500 via-green-400 to-teal-500 p-3 rounded-2xl shadow-lg group-hover:scale-105 transition">
//                         <GiShuttlecock className="text-2xl text-white" />
//                     </div>

//                     <div>
//                         <h1 className="text-2xl font-black tracking-tight bg-gradient-to-r from-emerald-400 via-green-400 to-teal-300 bg-clip-text text-transparent">
//                             SportNest
//                         </h1>

//                         <p className="text-[8px] uppercase tracking-[4px] text-gray-400">
//                             Book • Play • Compete
//                         </p>
//                     </div>
//                 </Link>
//             </div>


//             {/* Card */}
//             <Card className='max-w-md mx-auto border rounded-none p-8'>

//                 {/* Heading inside card */}
//                 <div className='text-center mb-6'>
//                     <h1 className='text-3xl font-bold'>
//                         Create Account
//                     </h1>

//                     <p className='text-gray-400 text-sm mt-2'>
//                         Start Using SportNest For Free Today
//                     </p>
//                 </div>

//                 <Form
//                     onSubmit={onSubmit}
//                     className="flex w-full flex-col gap-4"
//                 >

//                     {/* Name */}
//                     <TextField
//                         isRequired
//                         name="name"
//                         type="text"
//                     >
//                         <Label>Name</Label>
//                         <Input placeholder="Enter your name" />
//                         <FieldError />
//                     </TextField>


//                     {/* Email */}
//                     <TextField
//                         isRequired
//                         name="email"
//                         type="email"
//                         validate={(value) => {
//                             if (
//                                 !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
//                             ) {
//                                 return "Please enter a valid email";
//                             }
//                             return null;
//                         }}
//                     >
//                         <Label>Email</Label>
//                         <Input placeholder="john@example.com" />
//                         <FieldError />
//                     </TextField>


//                     {/* Photo URL */}
//                     <TextField
//                         name="image"
//                         type="url"
//                     >
//                         <Label>Photo URL</Label>
//                         <Input placeholder="Enter photo URL" />
//                         <FieldError />
//                     </TextField>


//                     {/* Password */}
//                     <TextField
//                         isRequired
//                         minLength={6}
//                         name="password"
//                         type={showPassword ? "text" : "password"}
//                         validate={(value) => {
//                             if (value.length < 6) {
//                                 return "Password must be at least 6 characters";
//                             }

//                             if (!/[A-Z]/.test(value)) {
//                                 return "Password must contain at least one uppercase letter";
//                             }

//                             if (!/[a-z]/.test(value)) {
//                                 return "Password must contain at least one lowercase letter";
//                             }

//                             return null;
//                         }}
//                     >
//                         <Label>Password</Label>

//                         <div className="relative w-full">

//                             <Input
//                                 className="w-full pr-12"
//                                 placeholder="Enter your password"
//                             />

//                             <button
//                                 type="button"
//                                 onClick={() =>
//                                     setShowPassword(!showPassword)
//                                 }
//                                 className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-gray-500 hover:text-gray-700"
//                             >
//                                 {showPassword
//                                     ? <FaEyeSlash size={18} />
//                                     : <FaEye size={18} />
//                                 }
//                             </button>

//                         </div>

//                         <Description className='text-gray-400'>
//                             Must be at least 6 characters with 1 uppercase and 1 lowercase
//                         </Description>

//                         <FieldError />
//                     </TextField>


//                     <Button
//                         className='rounded-none w-full bg-lime-400 mt-2'
//                         type="submit"
//                     >
//                         Create Account
//                     </Button>

//                 </Form>

//             </Card>
//         </div>
//     );
// };

// export default RegisterPage;


// ***********************************************************************



'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Card } from '@heroui/react';
import {
    Button,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextField
} from "@heroui/react";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import { GiShuttlecock } from 'react-icons/gi';
import { authClient } from '@/lib/auth-client';
import toast from 'react-hot-toast';

const RegisterPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());

        try {
            const { data, error } = await authClient.signUp.email({
                email: user.email,
                password: user.password,
                name: user.name,
                image: user.image || undefined
            });

            if (error) {
                toast.error(
                    error.message || "Registration failed"
                );
                return;
            }

            if (data) {
                toast.success("Account created successfully!");

                setTimeout(() => {
                    router.push('/');
                }, 1000);
            }

        } catch (err) {
            toast.error("Something went wrong");
            console.log(err);
        }
    };

    return (
        <div className='max-w-7xl mx-auto pt-10 px-4'>

            {/* Logo */}
            <div className='flex justify-center mb-8'>
                <Link
                    href="/"
                    className="flex items-center gap-3 cursor-pointer group"
                >
                    <div className="bg-gradient-to-br from-emerald-500 via-green-400 to-teal-500 p-3 rounded-2xl shadow-lg">
                        <GiShuttlecock className="text-2xl text-white" />
                    </div>

                    <div>
                        <h1 className="text-2xl font-black tracking-tight bg-gradient-to-r from-emerald-400 via-green-400 to-teal-300 bg-clip-text text-transparent">
                            SportNest
                        </h1>

                        <p className="text-[8px] uppercase tracking-[4px] text-gray-400">
                            Book • Play • Compete
                        </p>
                    </div>
                </Link>
            </div>


            {/* Card */}
            <Card className='max-w-md mx-auto border rounded-none p-8'>

                <div className='text-center mb-6'>
                    <h1 className='text-3xl font-bold'>
                        Create Account
                    </h1>

                    <p className='text-gray-400 text-sm mt-2'>
                        Start Using SportNest For Free Today
                    </p>
                </div>

                <Form
                    onSubmit={onSubmit}
                    className="flex w-full flex-col gap-4"
                >

                    <TextField isRequired name="name">
                        <Label>Name</Label>
                        <Input placeholder="Enter your name" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        name="email"
                        type="email"
                    >
                        <Label>Email</Label>
                        <Input placeholder="john@example.com" />
                        <FieldError />
                    </TextField>

                    <TextField
                        name="image"
                        type="url"
                    >
                        <Label>Photo URL</Label>
                        <Input placeholder="Enter photo URL" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        minLength={6}
                        name="password"
                        type={showPassword ? "text" : "password"}
                        validate={(value) => {
                            if (value.length < 6)
                                return "Password must be at least 6 characters";

                            if (!/[A-Z]/.test(value))
                                return "Must contain uppercase letter";

                            if (!/[a-z]/.test(value))
                                return "Must contain lowercase letter";

                            return null;
                        }}
                    >
                        <Label>Password</Label>

                        <div className="relative w-full">

                            <Input
                                className="w-full pr-12"
                                placeholder="Enter your password"
                            />

                            <button
                                type="button"
                                onClick={() =>
                                    setShowPassword(!showPassword)
                                }
                                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-gray-500"
                            >
                                {showPassword
                                    ? <FaEyeSlash size={18} />
                                    : <FaEye size={18} />
                                }
                            </button>

                        </div>

                        <Description className='text-gray-400'>
                            Must be at least 6 characters with uppercase and lowercase letters
                        </Description>

                        <FieldError />
                    </TextField>

                    <Button
                        className='rounded-none w-full bg-lime-400 mt-2'
                        type="submit"
                    >
                        Create Account
                    </Button>

                </Form>

            </Card>
        </div>
    );
};

export default RegisterPage;