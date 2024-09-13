import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import Link from 'next/link'

function PriceCard() {
    return (
        <Card className="">
            <CardHeader className="pb-2">
                <CardDescription>Total Recevied</CardDescription>
                <CardTitle className="text-2xl">$1,329</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="text-xs text-muted-foreground">+25% from last week</div>
            </CardContent>
        </Card>
    )
}


function AddInvoiceCard() {
    return (
        <div><Card className="sm:col-span-2">
            <CardHeader className="pb-3">
                <CardTitle>Your Invoices</CardTitle>
                <CardDescription className="">
                    Introducing Our Dynamic Dashboard for Seamless Management and
                    Insightful Analysis of Your Business.
                </CardDescription>
            </CardHeader>
            <CardFooter>
                <Link href="/dashboard/invoices/create-invoice"><Button>Create New Invoice</Button></Link>
            </CardFooter>
        </Card></div>
    )
}



function LatestInvoices() {
    return (
        <Card>
            <CardHeader className="">
                <CardTitle>Latest Invoices</CardTitle>
                <CardDescription>Latest Invoices from your store.</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader className='bg-accent'>
                        <TableRow>
                            <TableHead>Customer</TableHead>
                            <TableHead className="hidden sm:table-cell">Type</TableHead>
                            <TableHead className="hidden sm:table-cell">Status</TableHead>
                            <TableHead className="hidden md:table-cell">Date</TableHead>
                            <TableHead className="text-right">Amount</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow className="">
                            <TableCell>
                                <div className="font-medium">Liam Johnson</div>
                                <div className="hidden text-sm text-muted-foreground md:inline">
                                    liam@example.com
                                </div>
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">Sale</TableCell>
                            <TableCell className="hidden sm:table-cell">
                                <Badge className="text-xs" variant="secondary">
                                    Fulfilled
                                </Badge>
                            </TableCell>
                            <TableCell className="hidden md:table-cell">2023-06-23</TableCell>
                            <TableCell className="text-right">$250.00</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <div className="font-medium">Olivia Smith</div>
                                <div className="hidden text-sm text-muted-foreground md:inline">
                                    olivia@example.com
                                </div>
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">Refund</TableCell>
                            <TableCell className="hidden sm:table-cell">
                                <Badge className="text-xs" variant="outline">
                                    Declined
                                </Badge>
                            </TableCell>
                            <TableCell className="hidden md:table-cell">2023-06-24</TableCell>
                            <TableCell className="text-right">$150.00</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <div className="font-medium">Noah Williams</div>
                                <div className="hidden text-sm text-muted-foreground md:inline">
                                    noah@example.com
                                </div>
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                                Subscription
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                                <Badge className="text-xs" variant="secondary">
                                    Fulfilled
                                </Badge>
                            </TableCell>
                            <TableCell className="hidden md:table-cell">2023-06-25</TableCell>
                            <TableCell className="text-right">$350.00</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <div className="font-medium">Emma Brown</div>
                                <div className="hidden text-sm text-muted-foreground md:inline">
                                    emma@example.com
                                </div>
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">Sale</TableCell>
                            <TableCell className="hidden sm:table-cell">
                                <Badge className="text-xs" variant="secondary">
                                    Fulfilled
                                </Badge>
                            </TableCell>
                            <TableCell className="hidden md:table-cell">2023-06-26</TableCell>
                            <TableCell className="text-right">$450.00</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <div className="font-medium">Liam Johnson</div>
                                <div className="hidden text-sm text-muted-foreground md:inline">
                                    liam@example.com
                                </div>
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">Sale</TableCell>
                            <TableCell className="hidden sm:table-cell">
                                <Badge className="text-xs" variant="secondary">
                                    Fulfilled
                                </Badge>
                            </TableCell>
                            <TableCell className="hidden md:table-cell">2023-06-23</TableCell>
                            <TableCell className="text-right">$250.00</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}
export { AddInvoiceCard, LatestInvoices, PriceCard }
