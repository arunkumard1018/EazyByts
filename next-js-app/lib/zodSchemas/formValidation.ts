import { z } from "zod";

// Registeration Form schema
export const Regschema = z.object({
    name: z.string().min(1, "Name required"),
    email: z.string().email("Invalid email address").min(1, "Email required"),
    password: z.string().min(6, "Password must be at least 6 characters long").min(1, "Password required"),
    city: z.string().min(1, "City required"),
    state: z.string().min(1, "State required"),
    zip: z.string().min(1, "Zip code required"),
    isAggreedThePolicy: z.boolean().refine(val => val === true, "You must agree to the policy"),
});


export const loginSchema = z.object({
    email: z.string().email("Invalid email address"), // Validate email format
    password: z.string().min(6, "Password must be at least 6 characters"), // Ensure minimum password length
  });