function Architecture() {
    return (
        <section className="py-12 px-6 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">
                System Architecture
            </h2>

            <div className="bg-gray-100 rounded-lg p-6 text-center font-mono text-sm">
                <pre>
{`Browser
   │
   ▼
Nginx Reverse Proxy
   │
   ├── React Frontend
   └── Node Backend
           │
           ▼
        MongoDB`}
                </pre>
            </div>
        </section>
    );
}

export default Architecture;