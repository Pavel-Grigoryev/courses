import {NextApiRequest, NextApiResponse} from 'next';


export default function handler(req: NextApiRequest, res: NextApiResponse) {
    debugger
    const {id} = req.query;
    const coursesDetails = [
        {
            id: 1,
            img: '/assets/img/course/course-thumb-01.jpg',
            author: {
                ava: '/assets/img/course/c-details-ava-01.png',
                name: 'Emilia Jonas',
                link: '#'
            },
            category: ['Design', 'Development'],
            title: 'The Complete 2022 Web Development Camp',
            cls_text: '35 Classes',
            st_text: '291 Students',
            rating: {
                stars: '4.7',
                numberOfratings: '125'
            },
            details: {
                course_price: '29.99',
                lessons: '36',
                quizess: '6',
                students: '105',
                duration: '16 Hours',
                skillLevel: 'Beginner',
                language: 'English',
                certificate: true
            },
            description: 'In this course, you\'ll embark on a transformative journey into the world of web design, honing your skills to craft captivating user interfaces and seamless user experiences. Whether you\'re a novice looking to start your design career or a seasoned professional seeking to enhance your skills, this course is designed to empower you with the knowledge and expertise needed to excel in the dynamic field of UI/UX design.',
            instructor: {
                ava: '/assets/img/course/c-details-ava-thumb-01.jpg',
                name: 'Hossain Mahmud',
                award: 'Award Winning Chemical & User Interface Design Training',
                numberOfstudents: '2,35,687 Students',
                about: 'Hossain Mahmud is not just an expert, he\'s an award-winning visionary in the realms of chemical engineering and user interface design. His passion for these disciplines has driven him to achieve excellence and recognition on both national and international stages. His journey began with a profound love for science and technology, which eventually led him to become a thought leader in chemical processes and user-centric design.'
            },
            review: [
                {
                    id: 1,
                    img: '/assets/img/icon/c-details-avata-01.png',
                    name: 'Brooklyn Simmons',
                    review_text: 'Enrolling in this course was a game-changer for my career. I had a basic understanding of web design, but this masterclass took my skills to a whole new level. The instructor\'s expertise in Adobe XD and UI/UX design was evident in every lesson. I now create websites with confidence and have even started freelancing as a web designer. Highly recommended!',
                    review_time: 'a week ago'
                },
                {
                    id: 2,
                    img: '/assets/img/icon/c-details-avata-02.png',
                    name: 'Leslie Alexander',
                    review_text: 'As a complete beginner in web design, I was apprehensive about tackling such a comprehensive course. However, this masterclass exceeded my expectations. The instructor\'s teaching style is approachable and clear, making complex concepts easy to understand. I appreciate the emphasis on hands-on projects, which allowed me to apply what I learned in real-world scenarios',
                    review_time: 'a week ago'
                },
                {
                    id: 3,
                    img: '/assets/img/icon/c-details-avata-03.png',
                    name: 'Dianne Russell',
                    review_text: 'I\'ve been working in the design field for years, but I wanted to specialize in UI/UX design. This course provided the perfect opportunity. The instructor\'s deep knowledge of Adobe XD and design principles was evident throughout. I particularly enjoyed the sections on user-centered design and creating interactive prototypes. This masterclass has truly expanded my skill set.</>',
                    review_time: 'a week ago'
                },
            ]
        },
        {
            id: 2,
            img: '/assets/img/course/course-thumb-02.jpg',
            author: {
                ava: '/assets/img/course/c-details-ava-01.png',
                name: 'John Smith',
                link: '#'
            },
            category: ['SEO', 'Development'],
            title: 'Complete Web Design from Figma to Webflow',
            cls_text: '40 Classes',
            st_text: '300 Students',
            rating: {
                stars: '4.7',
                numberOfratings: '150'
            },
            details: {
                course_price: '30.00',
                lessons: '30',
                quizess: '8',
                students: '150',
                duration: '24 Hours',
                skillLevel: 'Beginner',
                language: 'English',
                certificate: true
            },
            description: 'In this course, you\'ll embark on a transformative journey into the world of web design, honing your skills to craft captivating user interfaces and seamless user experiences. Whether you\'re a novice looking to start your design career or a seasoned professional seeking to enhance your skills, this course is designed to empower you with the knowledge and expertise needed to excel in the dynamic field of UI/UX design.',
            instructor: {
                ava: '/assets/img/course/c-details-ava-thumb-01.jpg',
                name: 'David Brown',
                numberOfstudents: '1,358,687 Students',
                about: 'Hossain Mahmud is not just an expert, he\'s an award-winning visionary in the realms of chemical engineering and user interface design. His passion for these disciplines has driven him to achieve excellence and recognition on both national and international stages. His journey began with a profound love for science and technology, which eventually led him to become a thought leader in chemical processes and user-centric design.'
            },
            review: [
                {
                    id: 1,
                    img: '/assets/img/icon/c-details-avata-01.png',
                    name: 'Brooklyn Simmons',
                    review_text: 'Enrolling in this course was a game-changer for my career. I had a basic understanding of web design, but this masterclass took my skills to a whole new level. The instructor\'s expertise in Adobe XD and UI/UX design was evident in every lesson. I now create websites with confidence and have even started freelancing as a web designer. Highly recommended!',
                    review_time: 'a week ago'
                },
                {
                    id: 2,
                    img: '/assets/img/icon/c-details-avata-02.png',
                    name: 'Leslie Alexander',
                    review_text: 'As a complete beginner in web design, I was apprehensive about tackling such a comprehensive course. However, this masterclass exceeded my expectations. The instructor\'s teaching style is approachable and clear, making complex concepts easy to understand. I appreciate the emphasis on hands-on projects, which allowed me to apply what I learned in real-world scenarios',
                    review_time: 'a week ago'
                },
                {
                    id: 3,
                    img: '/assets/img/icon/c-details-avata-03.png',
                    name: 'Dianne Russell',
                    review_text: 'I\'ve been working in the design field for years, but I wanted to specialize in UI/UX design. This course provided the perfect opportunity. The instructor\'s deep knowledge of Adobe XD and design principles was evident throughout. I particularly enjoyed the sections on user-centered design and creating interactive prototypes. This masterclass has truly expanded my skill set.</>',
                    review_time: 'a week ago'
                },
            ]
        },
        {
            id: 3,
            img: '/assets/img/course/course-thumb-01.jpg',
            author: {
                ava: '/assets/img/course/c-details-ava-01.png',
                name: 'Emilia Jonas',
                link: '#'
            },
            category: ['SEO', 'Development'],
            title: 'SEO: Structured Data Markup for Web Masters',
            cls_text: '30 Classes',
            st_text: '400 Students',
            rating: {
                stars: '4.7',
                numberOfratings: '205'
            },
            details: {
                course_price: '25',
                lessons: '41',
                quizess: '8',
                students: '185',
                duration: '40 Hours',
                skillLevel: 'Beginner',
                language: 'English',
                certificate: true
            },
            description: 'In this course, you\'ll embark on a transformative journey into the world of web design, honing your skills to craft captivating user interfaces and seamless user experiences. Whether you\'re a novice looking to start your design career or a seasoned professional seeking to enhance your skills, this course is designed to empower you with the knowledge and expertise needed to excel in the dynamic field of UI/UX design.',
            instructor: {
                ava: 'dd',
                name: 'Hossain Mahmud',
                numberOfstudents: '2,35,687 Students',
                about: 'Hossain Mahmud is not just an expert, he\'s an award-winning visionary in the realms of chemical engineering and user interface design. His passion for these disciplines has driven him to achieve excellence and recognition on both national and international stages. His journey began with a profound love for science and technology, which eventually led him to become a thought leader in chemical processes and user-centric design.'
            },
            review: [
                {
                    id: 1,
                    img: '/assets/img/icon/c-details-avata-01.png',
                    name: 'Brooklyn Simmons',
                    review_text: 'Enrolling in this course was a game-changer for my career. I had a basic understanding of web design, but this masterclass took my skills to a whole new level. The instructor\'s expertise in Adobe XD and UI/UX design was evident in every lesson. I now create websites with confidence and have even started freelancing as a web designer. Highly recommended!',
                    review_time: 'a week ago'
                },
                {
                    id: 2,
                    img: '/assets/img/icon/c-details-avata-02.png',
                    name: 'Leslie Alexander',
                    review_text: 'As a complete beginner in web design, I was apprehensive about tackling such a comprehensive course. However, this masterclass exceeded my expectations. The instructor\'s teaching style is approachable and clear, making complex concepts easy to understand. I appreciate the emphasis on hands-on projects, which allowed me to apply what I learned in real-world scenarios',
                    review_time: 'a week ago'
                },
                {
                    id: 3,
                    img: '/assets/img/icon/c-details-avata-03.png',
                    name: 'Dianne Russell',
                    review_text: 'I\'ve been working in the design field for years, but I wanted to specialize in UI/UX design. This course provided the perfect opportunity. The instructor\'s deep knowledge of Adobe XD and design principles was evident throughout. I particularly enjoyed the sections on user-centered design and creating interactive prototypes. This masterclass has truly expanded my skill set.</>',
                    review_time: 'a week ago'
                },
            ]
        },
        {
            id: 4,
            img: '/assets/img/course/course-thumb-01.jpg',
            author: {
                ava: '/assets/img/course/c-details-ava-01.png',
                name: 'Emilia Jonas',
                link: '#'
            },
            category: ['Design', 'Development'],
            title: 'Complete Web Design from Figma Freelancing',
            cls_text: '28 Classes',
            st_text: '200 Students',
            rating: {
                stars: '4.7',
                numberOfratings: '165'
            },
            details: {
                course_price: '20.00',
                lessons: '36',
                quizess: '6',
                students: '105',
                duration: '16 Hours',
                skillLevel: 'Beginner',
                language: 'English',
                certificate: true
            },
            description: 'In this course, you\'ll embark on a transformative journey into the world of web design, honing your skills to craft captivating user interfaces and seamless user experiences. Whether you\'re a novice looking to start your design career or a seasoned professional seeking to enhance your skills, this course is designed to empower you with the knowledge and expertise needed to excel in the dynamic field of UI/UX design.',
            instructor: {
                ava: 'dd',
                name: 'Hossain Mahmud',
                numberOfstudents: '2,35,687 Students',
                about: 'Hossain Mahmud is not just an expert, he\'s an award-winning visionary in the realms of chemical engineering and user interface design. His passion for these disciplines has driven him to achieve excellence and recognition on both national and international stages. His journey began with a profound love for science and technology, which eventually led him to become a thought leader in chemical processes and user-centric design.'
            },
            review: [
                {
                    id: 1,
                    img: '/assets/img/icon/c-details-avata-01.png',
                    name: 'Brooklyn Simmons',
                    review_text: 'Enrolling in this course was a game-changer for my career. I had a basic understanding of web design, but this masterclass took my skills to a whole new level. The instructor\'s expertise in Adobe XD and UI/UX design was evident in every lesson. I now create websites with confidence and have even started freelancing as a web designer. Highly recommended!',
                    review_time: 'a week ago'
                },
                {
                    id: 2,
                    img: '/assets/img/icon/c-details-avata-02.png',
                    name: 'Leslie Alexander',
                    review_text: 'As a complete beginner in web design, I was apprehensive about tackling such a comprehensive course. However, this masterclass exceeded my expectations. The instructor\'s teaching style is approachable and clear, making complex concepts easy to understand. I appreciate the emphasis on hands-on projects, which allowed me to apply what I learned in real-world scenarios',
                    review_time: 'a week ago'
                },
                {
                    id: 3,
                    img: '/assets/img/icon/c-details-avata-03.png',
                    name: 'Dianne Russell',
                    review_text: 'I\'ve been working in the design field for years, but I wanted to specialize in UI/UX design. This course provided the perfect opportunity. The instructor\'s deep knowledge of Adobe XD and design principles was evident throughout. I particularly enjoyed the sections on user-centered design and creating interactive prototypes. This masterclass has truly expanded my skill set.</>',
                    review_time: 'a week ago'
                },
            ]
        },
        {
            id: 5,
            img: '/assets/img/course/course-thumb-01.jpg',
            author: {
                ava: '/assets/img/course/c-details-ava-01.png',
                name: 'Emilia Jonas',
                link: '#'
            },
            category: ['Webdev', 'Development'],
            title: 'Dreamweaver - Coding your first website using',
            cls_text: '28 Classes',
            st_text: '200 Students',
            rating: {
                stars: '4.7',
                numberOfratings: '525'
            },
            details: {
                course_price: '20.00',
                lessons: '36',
                quizess: '6',
                students: '105',
                duration: '76 Hours',
                skillLevel: 'Beginner',
                language: 'English',
                certificate: true
            },
            description: 'In this course, you\'ll embark on a transformative journey into the world of web design, honing your skills to craft captivating user interfaces and seamless user experiences. Whether you\'re a novice looking to start your design career or a seasoned professional seeking to enhance your skills, this course is designed to empower you with the knowledge and expertise needed to excel in the dynamic field of UI/UX design.',
            instructor: {
                ava: '/assets/img/course/c-details-ava-thumb-01.jpg',
                name: 'Hossain Mahmud',
                numberOfstudents: '2,35,687 Students',
                about: 'Hossain Mahmud is not just an expert, he\'s an award-winning visionary in the realms of chemical engineering and user interface design. His passion for these disciplines has driven him to achieve excellence and recognition on both national and international stages. His journey began with a profound love for science and technology, which eventually led him to become a thought leader in chemical processes and user-centric design.'
            },
            review: [
                {
                    id: 1,
                    img: '/assets/img/icon/c-details-avata-01.png',
                    name: 'Brooklyn Simmons',
                    review_text: 'Enrolling in this course was a game-changer for my career. I had a basic understanding of web design, but this masterclass took my skills to a whole new level. The instructor\'s expertise in Adobe XD and UI/UX design was evident in every lesson. I now create websites with confidence and have even started freelancing as a web designer. Highly recommended!',
                    review_time: 'a week ago'
                },
                {
                    id: 2,
                    img: '/assets/img/icon/c-details-avata-02.png',
                    name: 'Leslie Alexander',
                    review_text: 'As a complete beginner in web design, I was apprehensive about tackling such a comprehensive course. However, this masterclass exceeded my expectations. The instructor\'s teaching style is approachable and clear, making complex concepts easy to understand. I appreciate the emphasis on hands-on projects, which allowed me to apply what I learned in real-world scenarios',
                    review_time: 'a week ago'
                },
                {
                    id: 3,
                    img: '/assets/img/icon/c-details-avata-03.png',
                    name: 'Dianne Russell',
                    review_text: 'I\'ve been working in the design field for years, but I wanted to specialize in UI/UX design. This course provided the perfect opportunity. The instructor\'s deep knowledge of Adobe XD and design principles was evident throughout. I particularly enjoyed the sections on user-centered design and creating interactive prototypes. This masterclass has truly expanded my skill set.</>',
                    review_time: 'a week ago'
                },
            ]
        },
        {
            id: 6,
            img: '/assets/img/course/course-thumb-06.jpg',
            author: {
                ava: '/assets/img/course/c-details-ava-01.png',
                name: 'Emilia Jonas',
                link: '#'
            },
            category: ['Design', 'Development'],
            title: 'Dreamweaver - Coding your first website using',
            cls_text: '28 Classes',
            st_text: '200 Students',
            rating: {
                stars: '4.7',
                numberOfratings: '125'
            },
            details: {
                course_price: '20.00',
                lessons: '36',
                quizess: '6',
                students: '105',
                duration: '52 Hours',
                skillLevel: 'Beginner',
                language: 'English',
                certificate: true
            },
            description: 'In this course, you\'ll embark on a transformative journey into the world of web design, honing your skills to craft captivating user interfaces and seamless user experiences. Whether you\'re a novice looking to start your design career or a seasoned professional seeking to enhance your skills, this course is designed to empower you with the knowledge and expertise needed to excel in the dynamic field of UI/UX design.',
            instructor: {
                ava: '/assets/img/course/c-details-ava-thumb-01.jpg',
                name: 'Hossain Mahmud',
                numberOfstudents: '2,35,687 Students',
                about: 'Hossain Mahmud is not just an expert, he\'s an award-winning visionary in the realms of chemical engineering and user interface design. His passion for these disciplines has driven him to achieve excellence and recognition on both national and international stages. His journey began with a profound love for science and technology, which eventually led him to become a thought leader in chemical processes and user-centric design.'
            },
            review: [
                {
                    id: 1,
                    img: '/assets/img/icon/c-details-avata-01.png',
                    name: 'Brooklyn Simmons',
                    review_text: 'Enrolling in this course was a game-changer for my career. I had a basic understanding of web design, but this masterclass took my skills to a whole new level. The instructor\'s expertise in Adobe XD and UI/UX design was evident in every lesson. I now create websites with confidence and have even started freelancing as a web designer. Highly recommended!',
                    review_time: 'a week ago'
                },
                {
                    id: 2,
                    img: '/assets/img/icon/c-details-avata-02.png',
                    name: 'Leslie Alexander',
                    review_text: 'As a complete beginner in web design, I was apprehensive about tackling such a comprehensive course. However, this masterclass exceeded my expectations. The instructor\'s teaching style is approachable and clear, making complex concepts easy to understand. I appreciate the emphasis on hands-on projects, which allowed me to apply what I learned in real-world scenarios',
                    review_time: 'a week ago'
                },
                {
                    id: 3,
                    img: '/assets/img/icon/c-details-avata-03.png',
                    name: 'Dianne Russell',
                    review_text: 'I\'ve been working in the design field for years, but I wanted to specialize in UI/UX design. This course provided the perfect opportunity. The instructor\'s deep knowledge of Adobe XD and design principles was evident throughout. I particularly enjoyed the sections on user-centered design and creating interactive prototypes. This masterclass has truly expanded my skill set.</>',
                    review_time: 'a week ago'
                },
            ]
        },
    ];

    try {
        if (id) {
            const course = coursesDetails.find(cour => cour.id === +id);
                res.status(200).json(course);
        }
    } catch (err) {
        res.status(500).json({error: 'failed to load data'});
    }

}
