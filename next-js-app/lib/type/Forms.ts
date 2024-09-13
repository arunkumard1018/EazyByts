import { z } from "zod";


// Define error type
export type FormErrors = {
  [key: string]: string; // Key is the field name, value is the error message
};

export type RegForm = {
  name: string,
  email: string,
  password: string,
  city: string,
  state: string,
  zip: number,
  isAggreedThePolicy: boolean,
}




const formSchema = z.object({
  username: z.string().min(2).max(50),
})
