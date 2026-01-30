import {
    faYoutube,
    faGithub,
    faInstagram,
    faTiktok,
    faTwitch
} from '@fortawesome/free-brands-svg-icons';

export const socialLinks = [
    {
        id: 'youtube',
        href: 'https://go.mineraleyt.com/youtube',
        icon: faYoutube,
        label: 'YouTube',
        colorClass: 'hover:bg-red-600'
    },
    {
        id: 'github',
        href: 'https://go.mineraleyt.com/github',
        icon: faGithub,
        label: 'GitHub',
        colorClass: 'hover:bg-gray-900'
    },
    {
        id: 'instagram',
        href: 'https://go.mineraleyt.com/instagram',
        icon: faInstagram,
        label: 'Instagram',
        colorClass: 'hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600'
    },
    {
        id: 'tiktok',
        href: 'https://go.mineraleyt.com/tiktok',
        icon: faTiktok,
        label: 'TikTok',
        colorClass: 'hover:bg-black'
    },
    {
        id: 'twitch',
        href: 'https://go.mineraleyt.com/twitch',
        icon: faTwitch,
        label: 'Twitch',
        colorClass: 'hover:bg-purple-700'
    }
];
