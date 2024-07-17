"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Card, CardContent, CardFooter, CardHeader } from "../components/ui/card";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../components/ui/form";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Checkbox } from "../components/ui/checkbox";

const loginSchema = z.object({
    email: z.string().email({ message: "Invalid email address." }),
    password: z.string().min(6, { message: "Password must be at least 6 characters." }),
});

export function LoginPage() {
    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    function onSubmit(values: z.infer<typeof loginSchema>) {
        console.log(values);
    }

    return (
        <div className="relative flex items-center justify-center min-h-screen bg-cover bg-center bg-Background sm:justify-end">
            <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm sm:blur-0 sm:opacity-0"></div>
            <div className="relative z-10 h-screen flex-col content-center min-w-[305px]  w-1/2">
                <Card className="sm:h-full flex-col content-center">
                    <CardHeader>
                        <div className="text-center mb-4">
                            <h2 className="text-2xl font-bold text-black"> <span className="text-blue-600">my</span>RealPage</h2>
                            <h3 className="mt-2 text-xl font-semibold">Sign in to your account</h3>
                        </div>
                    </CardHeader>
                    <CardContent className="flex justify-center">
                        <div className="w-8/12 min-w-[260px]">
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Email Address</FormLabel>
                                                <FormControl>
                                                    <Input type="email" placeholder="Email Address" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="password"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Password</FormLabel>
                                                <FormControl>
                                                    <Input type="password" placeholder="Password" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormItem className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <Checkbox {...form.register('remember')} />
                                            <span className="ml-2 text-sm">Remember me</span>
                                        </div>
                                        <a href="#" className="text-sm text-blue-600 hover:underline">
                                            Forgot Password?
                                        </a>
                                    </FormItem>
                                    <Button type="submit" className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white">
                                        Sign in
                                    </Button>
                                </form>
                            </Form>
                        </div>
                    </CardContent>
                    <CardFooter className="text-center flex justify-center">
                        <div>
                            <p className="text-sm">
                                Don't have an account?{' '}
                                <a href="#" className="text-blue-600 hover:underline">
                                    Create an account
                                </a>
                            </p>
                            <p className="mt-4 text-sm">
                                <a href="#" className="text-black hover:underline">
                                    Need Help?
                                </a>
                            </p>
                        </div>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}

export default LoginPage;
