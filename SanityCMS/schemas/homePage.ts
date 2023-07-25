export default {
    name: 'homePage',
    title: 'Home Page',
    type: 'document',
    fields: [
        {
            name: 'activeHomepage',
            title: 'Active Homepage',
            type: 'boolean'
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text'
        },
        {
            name: 'heading1',
            title: 'Heading1',
            type: 'string'
        },
        {
            name: 'heading2',
            title: 'Heading2',
            type: 'string'
        },
        {
            name: 'sections',
            title: 'Sections',
            type: 'array',
            of: [
                {type: 'object', fields: [
                    {
                        name: 'title', 
                        title: 'Title', 
                        type: 'string'
                    },
                    {
                        name: 'content',
                        title: 'Content',
                        type: 'array',
                        of: [
                            {type: 'block'},
                        ]
                    },
                    {
                        name: 'backgroundColor',
                        title: 'Background Color',
                        type: 'string'
                    },
                    {
                        name: 'cta',
                        title: 'Call to Action',
                        type: 'boolean'
                    },
                    {
                        name: 'testimonials',
                        title: 'Testimonials',
                        type: 'boolean'
                    }
                ]}
            ]
        }
    ]
}