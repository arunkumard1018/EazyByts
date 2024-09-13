import { z } from "zod";

export const BusinessFormSchema = z.object({
    name: z.string()
        .min(3, { message: "Business name must be at least 3 characters.", }),
    category: z.string({ required_error: "Please select a Business Category.", }).
        min(3, { message: "Please select a Business Category.", }),
    address: z.string({ required_error: "Adress required for Invoicing" })
        .min(5, { message: "Address Required" }),
    city: z.string().min(3, { message: "City Required" }),
    zip: z.number().min(3, { message: "Zip Required" }),
    state: z.string().min(3, { message: "Select The State" }),
    GSTIN: z.string(),
    statecode: z.number(),
    HSN: z.number(),

})