import { useEffect, useState } from "react";

function StatusCards() {
    const [health, setHealth] = useState(null);
    const fetchHealth = async () => {
        const res = await fetch("/api/health");
        const data = await res.json();
        setHealth(data);

    };

    useEffect(() => {
        fetchHealth();
        const interval = setInterval(fetchHealth, 5000);
        return () => clearInterval(interval);
    }, []);

    if (!health) return null;

    const cards = [
        { title: "API Status", value: health.api, color: "text-green-500" },
        { title: "Database", value: health.database, color: "text-blue-500" },
        { title: "Server Uptime", value: `${Math.floor(health.uptime)} sec`, color: "text-purple-500" }
    ];

    return cards.map((card, index) => (
        <div key={index} className="bg-white shadow rounded-lg p-6">
            <p className="text-gray-500">{card.title}</p>
            <p className={`text-xl font-bold ${card.color}`}>
                {card.value}
            </p>
        </div>
    ));

}

export default StatusCards;