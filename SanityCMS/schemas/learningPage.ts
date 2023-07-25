export default {
    name: 'learningPage',
    title: 'Learning Page',
    type: 'document',
    fields: [
        {
            name: 'activeLearningPage',
            title: 'Active Learning Page',
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
                            {type: 'object', fields: [
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
                                    name: 'slug',
                                    title: 'Slug',
                                    type: 'slug'
                                },
                                {
                                    name: 'timestamp',
                                    title: 'Timestamp',
                                    type: 'datetime',
                                    options: {
                                        dateFormat: 'MM-DD-YYYY',
                                        timeFormat: 'hh:mm A'
                                    },
                                    autofill: {
                                        method: 'timestamp',
                                        param: 'MM-DD-YYYY'
                                    }
                                },
                                {
                                    name: 'image',
                                    title: 'Image',
                                    type: 'image'
                                },
                                {
                                    name: 'content',
                                    title: 'Content',
                                    type: 'array',
                                    of: [
                                        {type: 'block'},
                                    ]
                                }
                            ]},
                        ]
                    },
                    {
                        name: 'backgroundColor',
                        title: 'Background Color',
                        type: 'string'
                    }
                ]}
            ]
        }
    ]
}