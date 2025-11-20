
import { useSelector } from "react-redux";

const Home = () => {
    const { users, loading, error } = useSelector((state) => state.data);

    return (
        <div>
            <h1 className="text-3xl font-semibold mb-6">Welcome to the Dashboard</h1>
            <p className="text-gray-700 mb-6">
                This dashboard demonstrates API integration, searching, filtering, pagination, Redux state
                management and responsive UI using TailwindCSS.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                <div className="p-6 bg-white shadow rounded-lg border">
                    <h2 className="text-lg font-medium text-gray-600">Total Users</h2>
                    <p className="text-3xl font-bold mt-2">
                        {loading ? "Loading..." : users.length}
                    </p>
                </div>

                <div className="p-6 bg-white shadow rounded-lg border">
                    <h2 className="text-lg font-medium text-gray-600">API Status</h2>
                    <p className="text-xl font-semibold mt-2">
                        {error ? "❌ API Error" : "✅ Online"}
                    </p>
                </div>

                <div className="p-6 bg-white shadow rounded-lg border">
                    <h2 className="text-lg font-medium text-gray-600">Features</h2>
                    <ul className="list-disc ml-5 mt-2 text-gray-700">
                        <li>API Integration</li>
                        <li>Search + Filter</li>
                        <li>Pagination</li>
                        <li>Redux State Management</li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Home;
