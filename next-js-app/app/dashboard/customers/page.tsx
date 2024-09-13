import CustomerData from "@/components/dashboard/customers/CustomerData"

function Customers() {
    return (
        <div>
            {/* <div className='text-4xl text-center text-green-400'>Customers Page</div> */}
            <CustomerData className="w-screen md:w-[82.9vw]"/>
        </div>

    )
}

export default Customers