import {NextApiRequest, NextApiResponse} from 'next';


export default function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        res.status(200).send([
            {
                'id': 1,
                'img': '/assets/img/course/course-thumb-01.jpg',
                'icon': '/assets/img/icon/course-avata-01.png',
                'title': 'The Complete 2022 Web Development Camp',
                'cls_text': '35 Classes',
                'st_text': '291 Students',
                'start_text': '4.7',
                'course_title': 'Design',
                'course_link': '/course-details',
                'course_name': 'Development',
                'course_price': '29.99'
            },
            {
                'id': 2,
                'img': '/assets/img/course/course-thumb-02.jpg',
                'icon': '/assets/img/icon/course-avata-02.png',
                'title': 'Complete Web Design from Figma to Webflow',
                'cls_text': '40 Classes',
                'st_text': '300 Students',
                'start_text': '4.7',
                'course_title': 'Design',
                'course_link': '/course-details',
                'course_name': 'Development',
                'course_price': '30.00'
            },
            {
                'id': 3,
                'img': '/assets/img/course/course-thumb-03.jpg',
                'icon': '/assets/img/icon/course-avata-03.png',
                'title': 'SEO: Structured Data Markup for Web Masters',
                'cls_text': '30 Classes',
                'st_text': '400 Students',
                'start_text': '4.7',
                'course_title': 'Design',
                'course_link': '/course-details',
                'course_name': 'Development',
                'course_price': '25.00'
            },
            {
                'id': 4,
                'img': '/assets/img/course/course-thumb-04.jpg',
                'icon': '/assets/img/icon/course-avata-04.png',
                'title': 'Complete Web Design from Figma Freelancing',
                'cls_text': '28 Classes',
                'st_text': '200 Students',
                'start_text': '4.7',
                'course_title': 'Design',
                'course_link': '/course-details',
                'course_name': 'Development',
                'course_price': '20.00'
            },
            {
                'id': 5,
                'img': '/assets/img/course/course-thumb-05.jpg',
                'icon': '/assets/img/icon/course-avata-05.png',
                'title': 'Dreamweaver - Coding your first website using',
                'cls_text': '28 Classes',
                'st_text': '200 Students',
                'start_text': '4.7',
                'course_title': 'Design',
                'course_link': '/course-details',
                'course_name': 'Development',
                'course_price': '20.00'
            },
            {
                'id': 6,
                'img': '/assets/img/course/course-thumb-06.jpg',
                'icon': '/assets/img/icon/course-avata-06.png',
                'title': 'How to Write Great Web Content - Better Search!',
                'cls_text': '28 Classes',
                'st_text': '200 Students',
                'start_text': '4.7',
                'course_title': 'Design',
                'course_link': '/course-details',
                'course_name': 'Development',
                'course_price': '20.00'
            }
        ]);
    } catch (err) {
        res.status(500).json({error: 'failed to load data'});
    }

}