import { useEffect, useState } from "react";
import Chart from "react-apexcharts";

function ResponseChart() {
    const [data, setData] = useState([]);
    const testAPI = async () => {
        const start = performance.now();
        await fetch("/api/health");
        const end = performance.now();
        const latency = Math.round(end - start);
        setData(prev => {
            const updated = [...prev, latency];
            if (updated.length > 15) updated.shift();
            return updated;
        });
    };

    useEffect(() => {
        testAPI();
        const interval = setInterval(testAPI, 5000);
        return () => clearInterval(interval);
    }, []);

    const options = {
        chart: {
            type: "line",
            toolbar: { show: true }
        },

        stroke: {
            curve: "smooth"
        },

        xaxis: {
            categories: data.map((_, i) => `T${i + 1}`)
        },

        title: {
            text: "API Response Time (ms)"
        }

    };

    return (
        <div className="bg-white shadow rounded-lg p-6">
            <Chart
                options={options}
                series={[{ name: "Latency", data: data }]}
                type="line"
                height={300}
            />
        </div>
    );

}

export default ResponseChart;