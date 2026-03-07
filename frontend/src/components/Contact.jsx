function Contact() {

    return (
        <section className="bg-gray-900 text-white py-12 text-center">

            <h2 className="text-2xl font-bold mb-4">
                Developer
            </h2>

            <p className="mb-4">
                Eranga Madhushan
            </p>

            <div className="flex justify-center gap-6">

                <a
                    href="https://github.com/Erangamadhushan"
                    className="text-blue-400 hover:underline"
                >
                    GitHub
                </a>

                <a
                    href="https://www.linkedin.com/in/eranga-madhushan-78a0b8329"
                    className="text-blue-400 hover:underline"
                >
                    LinkedIn
                </a>

            </div>

        </section>
    );
}

export default Contact;