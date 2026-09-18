import { homeSections } from "../data/homeSections";

const JumpNav = () => {
    return (
        <div className="bg-[var(--bg-primary)] pt-10 pb-2">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 overflow-x-auto">
                <div className="flex w-max mx-auto gap-1 p-1.5 rounded-full bg-white shadow-[0_1px_4px_rgba(0,0,0,0.06)]">
                    {homeSections.map((section) => (
                        <a
                            key={section.id}
                            href={`/#${section.id}`}
                            className="px-4 sm:px-5 py-2.5 text-sm whitespace-nowrap rounded-full text-[#4a4a4a] hover:bg-[#1a1a1a] hover:text-white transition-colors"
                        >
                            {section.nav}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default JumpNav;
