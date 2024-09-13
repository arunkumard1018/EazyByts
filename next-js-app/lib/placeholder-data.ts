import { Business,Customers, Payment  } from "./type/TableData";

export const INDIAN_STATES: string[] = [
    'Select State',
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
    'West Bengal',
];

export const payments: Payment[] = [

    {
        id: "489e1d42",
        amount: 25000,
        status: "processing",
        email: "arun@gmail.com",
    },
    {
        id: "PAY001",
        amount: 1500,
        status: "success",
        email: "raj.sharma@indiatmail.com",
    },
    {
        id: "PAY002",
        amount: 2500,
        status: "pending",
        email: "meena.iyer@bharatmail.in",
    },
    {
        id: "PAY003",
        amount: 3200,
        status: "failed",
        email: "kiran.patel@desimail.com",
    },
    {
        id: "PAY004",
        amount: 4500,
        status: "processing",
        email: "suresh.nair@hindmail.co.in",
    },
    {
        id: "PAY005",
        amount: 1100,
        status: "success",
        email: "anita.singh@bharatmail.in",
    },
    {
        id: "PAY006",
        amount: 2100,
        status: "pending",
        email: "rahul.verma@desimail.com",
    },
    {
        id: "PAY007",
        amount: 3800,
        status: "failed",
        email: "pooja.kulkarni@indiatmail.com",
    },
    {
        id: "PAY008",
        amount: 2700,
        status: "processing",
        email: "amit.shah@hindmail.co.in",
    },
    {
        id: "PAY009",
        amount: 1400,
        status: "success",
        email: "vijay.desai@bharatmail.in",
    },
    {
        id: "PAY010",
        amount: 1900,
        status: "pending",
        email: "nikhil.jain@desimail.com",
    },
    {
        id: "PAY011",
        amount: 2500,
        status: "failed",
        email: "rekha.menon@hindmail.co.in",
    },
    {
        id: "PAY012",
        amount: 3000,
        status: "processing",
        email: "arjun.gupta@indiatmail.com",
    },
    {
        id: "PAY013",
        amount: 1600,
        status: "success",
        email: "sita.pillai@bharatmail.in",
    },
    {
        id: "PAY014",
        amount: 2300,
        status: "pending",
        email: "priya.chatterjee@desimail.com",
    },
    {
        id: "PAY015",
        amount: 3300,
        status: "failed",
        email: "manish.kumar@hindmail.co.in",
    }
]

// id: string
// businessLogo:string
// BusinessName: String
// revenue:number
// totalInvoices:number
// totalRevenue:number
export const business: Business[] = [
    {
        id: "728ed52f",
        BusinessName: "KG Enterprises",
        businessLogo: "/login-bg.jpg",
        revenue: 850045,
        totalInvoices: 45,
    },
    {
        id: "728ed52k",
        BusinessName: "SG Enterprises",
        businessLogo: "/login-bg.jpg",
        revenue: 850045,
        totalInvoices: 45,
    },
    {
        id: "728ed526",
        BusinessName: "AG Enterprises",
        businessLogo: "/login-bg.jpg",
        revenue: 850045,
        totalInvoices: 45,
    },
    {
        id: "728ed524",
        BusinessName: "RGL Enterprises",
        businessLogo: "/login-bg.jpg",
        revenue: 850045,
        totalInvoices: 45,
    },

]


// id: string
// name: String
// city:string
// shippingAddress : string
// billingAddress:string
// GSTIN:string
// phone:number
// email:string
// state:string
// zip:number

export const CustomersData: Customers[] = [
    {
        id: "IUZPK",
        name: "John",
        city: "Bangalore",
        shippingAddress: "#129 Church Hill Street, Kollar",
        billingAddress: "#129 Church Hill Street, Kollar",
        GSTIN: "IUMN25KL85P",
        phone: 9798989856,
        email: "john@gmail.com",
        state: "Karnataka",
        zip: 577886
    },
    {
        id: "JHGRT",
        name: "Amit Sharma",
        city: "Mumbai",
        shippingAddress: "Flat 301, Daffodil Apartments, Andheri West",
        billingAddress: "Flat 301, Daffodil Apartments, Andheri West",
        GSTIN: "MUMN87PL98K",
        phone: 9820293845,
        email: "amit.sharma@yahoo.com",
        state: "Maharashtra",
        zip: 400053
    },
    {
        id: "RTYJK",
        name: "Sita Rao",
        city: "Hyderabad",
        shippingAddress: "123, Pearl Residency, Banjara Hills",
        billingAddress: "123, Pearl Residency, Banjara Hills",
        GSTIN: "HYDN56KP23L",
        phone: 9123456789,
        email: "sita.rao@gmail.com",
        state: "Telangana",
        zip: 500034
    },
    {
        id: "POUIY",
        name: "Kiran Patel",
        city: "Ahmedabad",
        shippingAddress: "456, Lotus Villa, Satellite",
        billingAddress: "456, Lotus Villa, Satellite",
        GSTIN: "GJMN12RT45Q",
        phone: 9876543210,
        email: "kiran.patel@gmail.com",
        state: "Gujarat",
        zip: 380015
    },
    {
        id: "XZCVB",
        name: "Rahul Verma",
        city: "Delhi",
        shippingAddress: "78, Green Park Extension",
        billingAddress: "78, Green Park Extension",
        GSTIN: "DELH78PL23N",
        phone: 9812345678,
        email: "rahul.verma@hotmail.com",
        state: "Delhi",
        zip: 110016
    },
    {
        id: "NMKLO",
        name: "Priya Singh",
        city: "Chennai",
        shippingAddress: "Plot 23, B Sector, Anna Nagar",
        billingAddress: "Plot 23, B Sector, Anna Nagar",
        GSTIN: "CHNT89JK12M",
        phone: 9845671234,
        email: "priya.singh@rediffmail.com",
        state: "Tamil Nadu",
        zip: 600040
    },
    {
        id: "ASDFG",
        name: "Rohit Gupta",
        city: "Kolkata",
        shippingAddress: "33, Ballygunge Place",
        billingAddress: "33, Ballygunge Place",
        GSTIN: "WBKL34QR56T",
        phone: 9830567890,
        email: "rohit.gupta@gmail.com",
        state: "West Bengal",
        zip: 700019
    },
    {
        id: "QWERT",
        name: "Meena Nair",
        city: "Trivandrum",
        shippingAddress: "12, Rose Garden, Vellayambalam",
        billingAddress: "12, Rose Garden, Vellayambalam",
        GSTIN: "KLTV67MN89P",
        phone: 9847123456,
        email: "meena.nair@yahoo.com",
        state: "Kerala",
        zip: 695010
    },
    {
        id: "HJKLO",
        name: "Arjun Desai",
        city: "Pune",
        shippingAddress: "B-16, Sky Heights, Kothrud",
        billingAddress: "B-16, Sky Heights, Kothrud",
        GSTIN: "PUNM23LK56R",
        phone: 9870012345,
        email: "arjun.desai@gmail.com",
        state: "Maharashtra",
        zip: 411038
    },
    {
        id: "VBNMO",
        name: "Neha Kulkarni",
        city: "Nagpur",
        shippingAddress: "21, Diamond Colony, Civil Lines",
        billingAddress: "21, Diamond Colony, Civil Lines",
        GSTIN: "MHNG98PL67T",
        phone: 9823045678,
        email: "neha.kulkarni@hotmail.com",
        state: "Maharashtra",
        zip: 440001
    },
    {
        id: "PLMNB",
        name: "Suresh Iyer",
        city: "Coimbatore",
        shippingAddress: "48, Green Acres, RS Puram",
        billingAddress: "48, Green Acres, RS Puram",
        GSTIN: "TNCO23LM45P",
        phone: 9876540123,
        email: "suresh.iyer@gmail.com",
        state: "Tamil Nadu",
        zip: 641002
    },
    {
        id: "MKJIO",
        name: "Pooja Mehta",
        city: "Jaipur",
        shippingAddress: "25, Pink City Apartments, C-Scheme",
        billingAddress: "25, Pink City Apartments, C-Scheme",
        GSTIN: "RJJP12OP56Q",
        phone: 9988776655,
        email: "pooja.mehta@gmail.com",
        state: "Rajasthan",
        zip: 302001
    },
    {
        id: "UYTRD",
        name: "Nikhil Jain",
        city: "Indore",
        shippingAddress: "9, Silver Springs, Vijay Nagar",
        billingAddress: "9, Silver Springs, Vijay Nagar",
        GSTIN: "MPIN34QR12L",
        phone: 9123456701,
        email: "nikhil.jain@gmail.com",
        state: "Madhya Pradesh",
        zip: 452010
    },
    {
        id: "LKJHG",
        name: "Manish Kumar",
        city: "Patna",
        shippingAddress: "67, Maurya Vihar, Boring Road",
        billingAddress: "67, Maurya Vihar, Boring Road",
        GSTIN: "BHPN56LM89Q",
        phone: 9876543211,
        email: "manish.kumar@gmail.com",
        state: "Bihar",
        zip: 800001
    }
];


export const ProductsData = [
    {
        SKU: "SKU12345",
        name: "Laptop",
        desc: "High-performance laptop with 16GB RAM and 512GB SSD.",
        price: 1200,
        discount: 10,
        GST: "GST",
        GST_VALUE: 18,
        status: "INSTOCK"
    },
    {
        SKU: "SKU12359",
        name: "Digital Camera",
        desc: "24MP digital camera with 4K video recording.",
        price: 600,
        discount: 10,
        GST: "GST",
        GST_VALUE: 18,
        status: "OUT OF STOCK"
    },
    {
        SKU: "SKU12345",
        name: "Laptop",
        desc: "High-performance laptop with 16GB RAM and 512GB SSD.",
        price: 1200,
        discount: 10,
        GST: "GST",
        GST_VALUE: 18,
        status: "INSTOCK"
    },
    {
        SKU: "SKU12346",
        name: "Smartphone",
        desc: "Latest smartphone with 128GB storage and dual cameras.",
        price: 800,
        discount: 5,
        GST: "IGST",
        GST_VALUE: 12,
        status: "OUT OF STOCK"
    },
    {
        SKU: "SKU12347",
        name: "Headphones",
        desc: "Noise-cancelling over-ear headphones with Bluetooth connectivity.",
        price: 200,
        discount: 15,
        GST: "GST",
        GST_VALUE: 18,
        status: "INSTOCK"
    },
    {
        SKU: "SKU12348",
        name: "Smartwatch",
        desc: "Waterproof smartwatch with heart rate monitor and GPS.",
        price: 300,
        discount: 7,
        GST: "IGST",
        GST_VALUE: 22,
        status: "INSTOCK"
    },
    {
        SKU: "SKU12349",
        name: "Tablet",
        desc: "10.2-inch tablet with 64GB storage and Wi-Fi connectivity.",
        price: 400,
        discount: 12,
        GST: "GST",
        GST_VALUE: 12,
        status: "OUT OF STOCK"
    },
    {
        SKU: "SKU12350",
        name: "Gaming Console",
        desc: "Next-gen gaming console with 1TB storage.",
        price: 500,
        discount: 10,
        GST: "IGST",
        GST_VALUE: 18,
        status: "INSTOCK"
    },
    {
        SKU: "SKU12351",
        name: "Wireless Mouse",
        desc: "Ergonomic wireless mouse with adjustable DPI.",
        price: 50,
        discount: 8,
        GST: "GST",
        GST_VALUE: 18,
        status: "OUT OF STOCK"
    },
    {
        SKU: "SKU12352",
        name: "Keyboard",
        desc: "Mechanical keyboard with customizable RGB lighting.",
        price: 100,
        discount: 5,
        GST: "IGST",
        GST_VALUE: 12,
        status: "INSTOCK"
    },
    {
        SKU: "SKU12353",
        name: "Monitor",
        desc: "27-inch 4K UHD monitor with HDR support.",
        price: 350,
        discount: 10,
        GST: "GST",
        GST_VALUE: 18,
        status: "INSTOCK"
    },
    {
        SKU: "SKU12354",
        name: "Printer",
        desc: "All-in-one wireless inkjet printer with scanner and copier.",
        price: 150,
        discount: 5,
        GST: "IGST",
        GST_VALUE: 18,
        status: "OUT OF STOCK"
    },
    {
        SKU: "SKU12355",
        name: "External Hard Drive",
        desc: "1TB portable external hard drive with USB 3.0.",
        price: 75,
        discount: 12,
        GST: "GST",
        GST_VALUE: 18,
        status: "INSTOCK"
    },
    {
        SKU: "SKU12356",
        name: "Router",
        desc: "Dual-band wireless router with high-speed connectivity.",
        price: 120,
        discount: 8,
        GST: "IGST",
        GST_VALUE: 12,
        status: "INSTOCK"
    },
    {
        SKU: "SKU12357",
        name: "Webcam",
        desc: "HD webcam with built-in microphone.",
        price: 60,
        discount: 10,
        GST: "GST",
        GST_VALUE: 18,
        status: "OUT OF STOCK"
    },
    {
        SKU: "SKU12358",
        name: "Smart Speaker",
        desc: "Voice-controlled smart speaker with AI assistant.",
        price: 180,
        discount: 7,
        GST: "IGST",
        GST_VALUE: 18,
        status: "INSTOCK"
    },
];