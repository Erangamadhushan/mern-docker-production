import { useEffect, useState } from "react";
import Chart from "react-apexcharts";

function UptimeChart() {
    const [dataPoints, setDataPoints] = useState([]);
    const fetchUptime = async () => {
        try {
            const res = await fetch("/api/health");
            const data = await res.json();
            setDataPoints(prev => {
                const newData = [...prev, data.uptime];
                if (newData.length > 100) {
                    newData.shift();
                }
                return newData;
            });
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchUptime();
        const interval = setInterval(fetchUptime, 5000);
        return () => clearInterval(interval);
    }, []);

    const chartOptions = {
        chart: {
            id: "uptime-chart"
        },
        xaxis: {
            categories: dataPoints.map((_, i) => `T${i + 1}`)
        }
    };

    const chartSeries = [
        {
            name: "Server Uptime (seconds)",
            data: dataPoints
        }
    ];

    return (
        <section className="py-12 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-6">
                Server Uptime Monitoring
            </h2>
            <div className="bg-white p-6 rounded-lg shadow">
                <Chart
                    options={chartOptions}
                    series={chartSeries}
                    type="line"
                    height={300}
                />
            </div>
        </section>
    );
}

export default UptimeChart;