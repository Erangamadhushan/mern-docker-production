import StatusCards from "./dashboard/StatusCards";
import TradingChart from "./dashboard/TradingChart";
import ResponseChart from "./dashboard/ResponseChart";
import ContainerStatus from "./dashboard/ContainerStatus";
import SystemResources from "./dashboard/SystemResources";
import DockerContainers from "./dashboard/DockerContainers";
import { Suspense } from "react";

function DashboardLayout() {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold mb-6">
                System Monitoring Dashboard
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatusCards />
            </div>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
                <TradingChart />
                <ResponseChart />
            </div>

            <div className="mt-6">
                <ContainerStatus />
            </div>
            <div className="mt-6">
                <SystemResources />
            </div>
            <div className="mt-6">
                <Suspense fallback={<div>Loading Docker Containers...</div>}>
                    <DockerContainers />
                </Suspense>
            </div>
        </div>
    );

}

export default DashboardLayout;