import { useEffect, useState } from "react";

function DockerContainers() {
    const [containers, setContainers] = useState([]);

    useEffect(() => {
        const fetchContainers = async () => {
            const res = await fetch("/api/docker");
            const data = await res.json();
            setContainers(data);
        };
        fetchContainers();
        const interval = setInterval(fetchContainers, 10000);
        return () => clearInterval(interval);

    }, []);

    return (
        <div className="bg-white p-6 rounded shadow">
            <h2 className="text-xl font-bold mb-4">
                Docker Containers
            </h2>
            <table className="w-full">
                <thead>
                    <tr className="text-left border-b">
                        <th>Name</th>
                        <th>Image</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {containers.map((c, i) => (
                        <tr key={i} className="border-b">
                            <td>{c.Names}</td>
                            <td>{c.Image}</td>
                            <td className="text-green-600">{c.Status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default DockerContainers;