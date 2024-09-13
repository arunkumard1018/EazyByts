
export type Payment = {
    id: string
    amount: number
    status: "pending" | "processing" | "success" | "failed"
    email: string
    isHidden?: boolean
}


export type Business = {
    id: string
    businessLogo: string
    BusinessName: String
    revenue: number
    totalInvoices: number
}

export type Customers = {
    id: string
    name: String
    city: string
    shippingAddress: string
    billingAddress: string
    GSTIN: string
    phone: number
    email: string
    state: string
    zip: number
}

export type GSTDetail = {
    type: "IGST" | "GST" | "UGST";
    rate: number;
};

export type Product = {
    SKU: string;
    name: string;
    desc: string;
    price: number;
    discount: number;
    GST: string;
    GST_VALUE: number;
    status: string;
};
