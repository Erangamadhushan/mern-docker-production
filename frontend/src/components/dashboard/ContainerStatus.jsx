function ContainerStatus() {

    const containers = [
        { name: "Frontend", status: "Running" },
        { name: "Backend", status: "Running" },
        { name: "MongoDB", status: "Running" },
        { name: "Nginx", status: "Running" }
    ];

    return (
        <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">
                Container Status
            </h2>
            <div className="grid md:grid-cols-4 gap-4">
                {containers.map((c, i) => (
                    <div key={i} className="bg-gray-100 p-4 rounded">
                        <p>{c.name}</p>
                        <p className="text-green-600 font-bold">
                            {c.status}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );

}

export default ContainerStatus;