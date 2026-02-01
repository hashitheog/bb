export interface Package {
    id: string;
    title: string;
    type: 'hajj' | 'umrah' | 'tourism';
    price: number;
    duration: string;
    image: string;
    rating: number;
    reviews: number;
    featured?: boolean;
    description: string;
    amenities: string[];
    itinerary: {
        day: number;
        title: string;
        description: string;
    }[];
    dates: string[];
}

export const packages: Package[] = [
    {
        id: 'p1',
        title: 'Royal Makkah Retreat',
        type: 'umrah',
        price: 2400,
        duration: '10 Days',
        image: '/hotel_makkah.jpg',
        rating: 4.9,
        reviews: 124,
        featured: true,
        description: 'Experience the spiritual embrace of Makkah with our signature package. Stay steps away from the Haram in 5-star luxury, with guided Tawaf and private transfers.',
        amenities: ['5-Star Hotel', 'Private Transport', 'Visa Processing', 'zydr'],
        dates: ['Oct 15, 2026', 'Nov 01, 2026', 'Dec 10, 2026'],
        itinerary: [
            { day: 1, title: 'Arrival in Jeddah', description: 'VIP Airport pickup and transfer to Makkah Hotel.' },
            { day: 2, title: 'Umrah Performance', description: 'Guided Umrah rituals with a dedicated scholar.' },
            { day: 3, title: 'Ziyarat', description: 'Tour of historical sites including Jabal al-Noor.' }
        ]
    },
    {
        id: 'p2',
        title: 'Supreme Hajj Experience',
        type: 'hajj',
        price: 12500,
        duration: '21 Days',
        image: '/hajj_tents.jpg',
        rating: 5.0,
        reviews: 85,
        featured: true,
        description: 'The pinnacle of Hajj services. Complete peace of mind with VIP Mina tents, direct train access, and 24/7 concierge support throughout the Manasik.',
        amenities: ['VIP Mina Tents', 'Full Board Meals', 'Scholar Guidance', 'Express Train'],
        dates: ['Jun 15, 2026'],
        itinerary: [
            { day: 1, title: 'Arrival', description: 'Landing and settlement in Aziziyah.' },
            { day: 8, title: 'Mina', description: 'Transfer to VIP tents in Mina.' },
            { day: 9, title: 'Arafat', description: 'The day of Wuquf in our air-conditioned marquee.' }
        ]
    },
    {
        id: 'p3',
        title: 'Madinah Spiritual Tour',
        type: 'umrah',
        price: 1800,
        duration: '7 Days',
        image: '/madinah_mosque.jpg',
        rating: 4.8,
        reviews: 92,
        description: 'Immerse yourself in the City of the Prophet. Enjoy close proximity to the Rawdah and educational sessions on Seerah.',
        amenities: ['Rawdah Booking', '4-Star Hotel', 'Breakfast', 'Museum Tour'],
        dates: ['Weekly Departures'],
        itinerary: [
            { day: 1, title: 'Arrival in Madinah', description: 'Transfer to hotel near Masjid An-Nabawi.' },
            { day: 2, title: 'Salam', description: 'Group Salam to the Prophet (PBUH).' }
        ]
    }
];
