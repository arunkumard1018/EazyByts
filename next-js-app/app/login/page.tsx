'use client'

import { AppLogo } from "@/components/custom/elements"
import { InternalServerError } from "@/components/errors/errors"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { loginSchema } from "@/lib/zodSchemas/formValidation"
import { authenticate } from "@/service/AuthService"
import { AxiosError } from "axios"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"


export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false)
  const [fieldErrors, setFieldErrors] = useState<{ email?: string; password?: string }>({});
  const [serverError, setServerError] = useState(false)
  const [loading, setLoading] = useState(false);
  const router = useRouter();


  const handleSubmit = async () => {

    const formData = { email, password };
    const validationResult = loginSchema.safeParse(formData);

    if (!validationResult.success) {
      // If validation fails, show the error message
      const errors = validationResult.error.formErrors.fieldErrors;
      setFieldErrors({
        email: errors.email?.[0],
        password: errors.password?.[0],
      });
      return;
    }

    try {
      setLoading(true)
      const response = await authenticate(email, password);
      // on Authentication Successfull
      if (response.status === 200) router.push('/dashboard');
    } catch (error) {
      console.log(error)
      if (error instanceof AxiosError) {
        //Invalid Credentials
        if (error.response?.status === 401) setError(true)
        //Internal Server Error
        else setServerError(true);
      } else {
        setError(true)
      }
    } finally {
      setLoading(false);
    }
  };



  if (serverError) {
    return <InternalServerError message="unable to Login at this time" reset={() => setServerError(false)} />
  }


  return (
    <div className="mt-20">
      <Card className="mx-auto max-w-sm">
        <CardHeader>

          <CardTitle className="text-2xl">
            <Link href="/"><AppLogo /></Link>
          </CardTitle>

          {!error && <CardDescription className="text-center">Enter your Credentials to login to your account</CardDescription>}
          {error && <div className="text-center text-red-500">Invalid Credentials Please Check!</div>}
        </CardHeader>

        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email" className="flex justify-between items-center">Email {fieldErrors.email && <p className="text-red-500 text-sm">{fieldErrors.email}*</p>}
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={fieldErrors.email ? 'border-red-500' : ''}
              />
            </div>

            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link href="#" className="ml-auto inline-block text-sm underline">
                  Forgot your password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={fieldErrors.password ? 'border-red-500' : ''}
              />
              {fieldErrors.email && <p className="text-red-500 text-sm">{fieldErrors.password}*</p>}
            </div>

            <Button type="submit" className="w-full" onClick={handleSubmit} disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </Button>

            <Button variant="outline" className="w-full">Login with Google</Button>
          </div>

          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="underline">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}


