function TechStack() {

    const tech = [
        "React (Vite)",
        "Node.js",
        "Express",
        "MongoDB",
        "Docker",
        "Nginx",
        "GitHub Actions CI/CD"
    ];

    return (
        <section className="py-12 px-6 max-w-5xl mx-auto">

            <h2 className="text-2xl font-bold text-center mb-6">
                Tech Stack
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

                {tech.map((item, index) => (
                    <div
                        key={index}
                        className="bg-gray-100 rounded-lg p-4 text-center shadow-sm"
                    >
                        {item}
                    </div>
                ))}

            </div>

        </section>
    );
}

export default TechStack;