"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { Radio, RadioGroup } from "@heroui/react";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const signUpPage = () => {
  const [role, setRole ] = useState("seeker");
  const plan = role === "seeker" ? "seeker_free" : "recruiter_free";
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());
    const { data, error } = await authClient.signUp.email({
      email: user.email,
      name: user.name,
      password: user.password,
      image: user.image,
      role: user.role,
      plan,
    });
    if (data) {
      redirect("/");
    }
    if (error) {
      toast.error("Signup not successful");
    }
  };
  const handleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };
  return (
    <div className="container mx-auto mt-40 mb-40  flex justify-center items-center">
      <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
        <TextField isRequired name="name" type="text">
          <Label>Name</Label>
          <Input placeholder="Enter your name" />
          <FieldError />
        </TextField>
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="john@example.com" />
          <FieldError />
        </TextField>
        <TextField isRequired name="imageUrl" type="url">
          <Label>Image URL</Label>
          <Input placeholder="Enter your name" />
          <FieldError />
        </TextField>
        {/* Password */}
        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }
            return null;
          }}
        >
          <Label>Password</Label>
          <Input placeholder="Enter your password" />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>

        {/* radio group */}
        <div className="flex flex-col gap-6">
          <RadioGroup
            value={role}
            onValueChange={setRole}
            defaultValue="seeker"
            name="role"
            orientation="horizontal"
          >
            <Radio value="seeker">
              <Radio.Control>
                <Radio.Indicator />
              </Radio.Control>
              <Radio.Content>
                <Label>Job seeker</Label>
              </Radio.Content>
            </Radio>
            <Radio value="recruiter">
              <Radio.Control>
                <Radio.Indicator />
              </Radio.Control>
              <Radio.Content>
                <Label>Recruiter</Label>
              </Radio.Content>
            </Radio>
          </RadioGroup>
        </div>
        <div>
          <Button type="submit" className={"bg-[#5C53FE] w-full"}>
            <Check />
            Submit
          </Button>
          <p className="text-center pt-2">Or,</p>
          <Button
            onClick={handleSignIn}
            type="submit"
            className={"bg-white text-black mt-2 w-full"}
          >
            <FcGoogle />
            Sign Up with google
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default signUpPage;
