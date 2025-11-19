import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, setSearch, setPage } from "../features/dataSlice";
import Table from "../components/Table";

export default function Data() {
    const dispatch = useDispatch();
    const { users, loading, error, search, page, perPage } = useSelector((s) => s.data);

    useEffect(() => {
        if (!users || users.length === 0) dispatch(fetchUsers());
    }, [dispatch]);

    const filtered = (users || []).filter((u) => {
        const q = (search || "").trim().toLowerCase();
        if (!q) return true;
        return (
            (u.name || "").toLowerCase().includes(q) ||
            (u.email || "").toLowerCase().includes(q) ||
            (u.address?.city || "").toLowerCase().includes(q)
        );
    });

    const total = filtered.length;
    const totalPages = Math.max(1, Math.ceil(total / perPage));
    const from = (page - 1) * perPage;
    const pageItems = filtered.slice(from, from + perPage);

    return (
        <div className="p-6">
            <div className="flex items-center justify-between mb-4">

                <h2 className="text-2xl font-semibold">Users</h2>

                <div className="w-full max-w-md ml-6 mt-8">
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => dispatch(setSearch(e.target.value))}
                        placeholder="Search by name, email or city..."
                        className="w-full border rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>
            </div>

            {loading && (
                <div className="p-4 bg-white rounded-md shadow-sm mb-4">
                    <p className="text-gray-600">Loading data, please wait...</p>
                </div>
            )}

            {error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-md mb-4">
                    <p className="text-red-700">Error: {error}</p>
                </div>
            )}

            <Table rows={pageItems} />

            <div className="mt-4 flex items-center justify-between">
                <div className="text-sm text-gray-600">
                    Showing {Math.min(total === 0 ? 0 : from + 1, total)} - {Math.min(from + perPage, total)} of {total}
                </div>

                <div className="flex items-center gap-2">
                    <button
                        onClick={() => dispatch(setPage(Math.max(1, page - 1)))}
                        disabled={page <= 1}
                        className="px-3 py-1 border rounded disabled:opacity-50"
                    >
                        Prev
                    </button>

                    <div className="text-sm">
                        Page {page} of {totalPages}
                    </div>

                    <button
                        onClick={() => dispatch(setPage(Math.min(totalPages, page + 1)))}
                        disabled={page >= totalPages}
                        className="px-3 py-1 border rounded disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}
