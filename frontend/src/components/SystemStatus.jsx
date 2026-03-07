import { useEffect, useState } from "react";

function SystemStatus() {

    const [status, setStatus] = useState("Checking...");

    useEffect(() => {

        fetch("/api/users")
            .then(() => setStatus("Backend Running"))
            .catch(() => setStatus("Backend Offline"));

    }, []);

    return (
        <section className="py-12 px-6 max-w-5xl mx-auto">

            <h2 className="text-2xl font-bold mb-6 text-center">
                System Status
            </h2>

            <div className="flex justify-center">

                <div className="bg-white shadow-lg rounded-lg p-6 w-64 text-center">

                    <p className="text-gray-600">Backend API</p>

                    <p className="mt-2 font-semibold text-green-600">
                        {status}
                    </p>

                </div>

            </div>

        </section>
    );
}

export default SystemStatus;