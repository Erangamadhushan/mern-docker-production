import { useState } from "react";

function ApiTester() {

    const [response, setResponse] = useState("");

    const testAPI = async () => {
        try {
            const res = await fetch("/api/users");
            const data = await res.json();

            setResponse(JSON.stringify(data, null, 2));
        } catch (err) {
            setResponse("API request failed");
        }
    };

    return (
        <section className="py-12 px-6 max-w-5xl mx-auto">

            <h2 className="text-2xl font-bold mb-4 text-center">
                API Tester
            </h2>

            <div className="text-center">
                <button
                    onClick={testAPI}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                    Run API Request
                </button>
            </div>

            <pre className="bg-gray-900 text-green-400 p-4 rounded-lg mt-6 overflow-auto">
                {response}
            </pre>

        </section>
    );
}

export default ApiTester;