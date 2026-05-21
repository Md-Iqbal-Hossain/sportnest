
'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Card, Separator } from '@heroui/react';
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
import { FcGoogle } from 'react-icons/fc';

const RegisterPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();

    // const onSubmit = async (e) => {
    //     e.preventDefault();

    //     const formData = new FormData(e.currentTarget);
    //     const user = Object.fromEntries(formData.entries());

    //     try {
    //         const { data, error } = await authClient.signUp.email({
    //             email: user.email,
    //             password: user.password,
    //             name: user.name,
    //             image: user.image || undefined
    //         });

    //         if (error) {
    //             toast.error(
    //                 error.message || "Registration failed"
    //             );
    //             return;
    //         }

    //         if (data) {
    //             toast.success("Account created successfully!");

    //             setTimeout(() => {
    //                 router.push('/login');
    //             }, 1000);
    //         }

    //     } catch (err) {
    //         toast.error("Something went wrong");
    //         console.log(err);
    //     }
    // };

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());

        if (user.password.length < 6) {
            toast.error("Password must be at least 6 characters");
            return;
        }

        if (!/[A-Z]/.test(user.password)) {
            toast.error("Password must contain uppercase letter");
            return;
        }

        if (!/[a-z]/.test(user.password)) {
            toast.error("Password must contain lowercase letter");
            return;
        }

        try {
            const { data, error } = await authClient.signUp.email({
                email: user.email,
                password: user.password,
                name: user.name,
                image: user.image || undefined
            });

            if (error) {
                toast.error(error.message || "Registration failed");
                return;
            }

            if (data) {
                await authClient.signOut();

                toast.success("Account created successfully! Please log in.");

                setTimeout(() => {
                    router.push('/login');
                    router.refresh();
                }, 1000);
            }

        } catch (err) {
            toast.error("Something went wrong");
            console.log(err);
        }
    };

    const handleGoogleSignin = async () => {
        await authClient.signIn.social({
            provider: "google",
        });
    }

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
                        className='rounded-none w-full bg-gradient-to-br from-lime-500 via-green-400 to-teal-800 p-3 mt-2'
                        type="submit"
                    >
                        Create Account
                    </Button>

                </Form>
                <div className='flex justify-center items-center gap-3'>
                    <Separator />
                    <div className='whitespace-nowrap text-gray-400 text-sm'>or continue with</div>
                    <Separator />
                </div>
                <div>
                    <Button onClick={handleGoogleSignin} variant='outline' className={'w-full rounded-none'}><FcGoogle /> Continue with Google</Button>
                </div>

                <div className="text-center mt-6 text-sm text-gray-400">
                    Already have an account?{' '}
                    <Link
                        href="/login"
                        className="font-medium text-emerald-400 hover:text-emerald-300 transition-colors duration-200 underline underline-offset-4"
                    >
                        Login
                    </Link>
                </div>

            </Card>
        </div>
    );
};

export default RegisterPage;