import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface SocialLinkProps {
    href: string;
    icon: IconDefinition;
    label: string;
    colorClass: string;
}

export const SocialLink = ({ href, icon, label, colorClass }: SocialLinkProps) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex flex-col items-center justify-center p-4 bg-gray-800/80 backdrop-blur-sm rounded-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg text-white/90 hover:text-white border-2 border-cyan-500/50 ${colorClass}`}
    >
        <FontAwesomeIcon icon={icon} className="w-6 h-6 mb-2" />
        <span className="text-lg font-medium">{label}</span>
    </a>
);
