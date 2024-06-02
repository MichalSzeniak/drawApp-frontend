"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { login } from "../action";
import { useFormStatus } from "react-dom";

const SignInPage = () => {
  const [email, setEmail] = useState(
    typeof window !== "undefined"
      ? localStorage.getItem("rememberedEmail") || ""
      : ""
  );
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(
    typeof window !== "undefined" && !!localStorage.getItem("rememberedEmail")
  );

  const handleSubmit = async (formData: FormData) => {
    formData.append("email", email);
    formData.append("password", password);
    await login(formData);
    if (rememberMe) {
      localStorage.setItem("rememberedEmail", email);
    } else {
      localStorage.removeItem("rememberedEmail");
    }
  };

  return (
    <div>
      <h1>SignInPage</h1>
      <form>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            placeholder="your@email.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            placeholder="••••••"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="terms2"
            onCheckedChange={(e) => setRememberMe(e.target.checked)}
          />
          <label
            htmlFor="terms2"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Remember me
          </label>
        </div>

        <Button formAction={handleSubmit}>Sign in</Button>
      </form>
    </div>
  );
};
export default SignInPage;
