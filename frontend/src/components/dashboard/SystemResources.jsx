import { useEffect, useState } from "react";

function SystemResources() {
    const [data, setData] = useState(null);


    useEffect(() => {
        const fetchResources = async () => {
            const res = await fetch("/api/system");
            const json = await res.json();
            setData(json);

        };
        fetchResources();
        const interval = setInterval(fetchResources, 5000);
        return () => clearInterval(interval);

    }, []);

    if (!data) return null;
    return (
        <div className="bg-white p-6 rounded shadow">
            <h2 className="text-xl font-bold mb-4">
                Server Resources
            </h2>
            <div className="grid grid-cols-2 gap-4">
                <div>CPU Load: {data.cpuLoad}</div>
                <div>Free Memory: {(data.freeMemory / 1024 / 1024).toFixed(2)} MB</div>
                <div>Heap Used: {(data.heapUsed / 1024 / 1024).toFixed(2)} MB</div>
                <div>System Uptime: {Math.floor(data.systemUptime)} sec</div>
            </div>
        </div>
    );
}

export default SystemResources;