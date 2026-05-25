import { fetchCustomers } from "@/app/lib/data";
import CustomersTable from "@/app/ui/customers/table";
import { Metadata } from "next";
import Search from "@/app/ui/search";
import { Suspense } from "react";

export const metadata: Metadata = {
	title: "Customers",
};

export default async function Page() {
	const customers = await fetchCustomers();

	return (
		<div>
			<h1 className="text-2xl font-semibold mb-4">Customers</h1>

			<Suspense fallback={<div>Loading search...</div>}>
				<Search placeholder="Search customers..." />
			</Suspense>

			<CustomersTable customers={customers} />
		</div>
	);
}
