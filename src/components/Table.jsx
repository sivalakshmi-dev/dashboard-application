import React from "react";

export default function Table({ rows = [] }) {
    if (!rows || rows.length === 0) {
        return (
            <div className="p-4 bg-white rounded-md shadow-sm">
                <p className="text-gray-600">No records to display.</p>
            </div>
        );
    }

    return (
        <div className="overflow-x-auto bg-white rounded-md shadow-sm">
            <table className="min-w-full divide-y">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">ID</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Name</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Email</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">City</th>
                    </tr>
                </thead>

                <tbody className="bg-white divide-y">
                    {rows.map((r) => (
                        <tr key={r.id} className="hover:bg-gray-50">
                            <td className="px-4 py-3 text-sm text-gray-800">{r.id}</td>
                            <td className="px-4 py-3 text-sm text-gray-800">{r.name}</td>
                            <td className="px-4 py-3 text-sm text-gray-800">{r.email}</td>
                            <td className="px-4 py-3 text-sm text-gray-800">{r.address?.city ?? "-"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
