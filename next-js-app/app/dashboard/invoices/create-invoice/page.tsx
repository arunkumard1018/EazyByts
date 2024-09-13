import { Button } from "@/components/ui/button";
import { Building2 } from "lucide-react";
import Link from "next/link";

function Invoice() {
    const business = []
    return (
        <div>
            {business.length === 0 ? <AddOrganasation /> : <div>Create Invoice</div>}
        </div>

    )
}





const AddOrganasation = () => {
    return (
        <div className='text-xl flex flex-col justify-center items-center h-[70vh] px-4 text-center space-x-2 space-y-2' >
            <div className="flex justify-center items-center">
                <Building2 className="bg-background" />
            </div>
            <p className="text-2xl">No Business Details Available</p>
            <p className="">Add Your Business Details to Create Invoice</p>
            <Link href="/dashboard/business/create-business"><Button>Add Business Details</Button></Link>
        </div>
    )


}

export default Invoice