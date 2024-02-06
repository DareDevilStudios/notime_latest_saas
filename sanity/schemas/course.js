export const course = {
    name: 'course',
    title: 'Course',
    type: 'document',
    fields: [
        {
            name: 'courseName',
            title: 'Course Name',
            type: 'string',
        },
        {
            name: 'numberOfLessons',
            title: 'Number of Lessons',
            type: 'number',
        },
        {
            name: 'duration',
            title: 'Duration',
            type: 'object',
            fields: [
                {
                    name: 'hours',
                    title: 'Hours',
                    type: 'number',
                },
                {
                    name: 'minutes',
                    title: 'Minutes',
                    type: 'number',
                },
            ],
        },
        {
            name: 'level',
            title: 'Level',
            type: 'string',
        },
        {
            name: 'rating',
            title: 'Rating',
            type: 'number',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
        },
        {
            name: 'author',
            title: 'Author',
            type: 'object',
            fields: [
                {
                    name: 'author_name',
                    title: 'Author Name',
                    type: 'string',
                },
                {
                    name: 'author_image',
                    title: 'Author Image',
                    type: 'image',
                },
            ],
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
        },
        {
            name: 'actualprice',
            title: 'Actual Price',
            type: 'number',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'string' }],
        },
        {
            name: 'sampleVideo',
            title: 'Sample Video',
            type: 'object',
            fields: [
                {
                    name: 'video',
                    title: 'Video',
                    type: 'file',
                },
                {
                    name: 'length',
                    title: 'Length',
                    type: 'number',
                },
            ],
        },
        {
            name: 'learnings',
            title: 'Learnings',
            type: 'array',
            of: [{ type: 'string' }],
        },
        {
            name: 'prerequisites',
            title: 'Prerequisites',
            type: 'array',
            of: [{ type: 'string' }],
        },
        {
            name: 'language',
            title: 'Language',
            type: 'string',
        },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'contentName',
                            title: 'Content Name',
                            type: 'string',
                        },
                        {
                            name: 'video',
                            title: 'Video',
                            type: 'file',
                        },
                        {
                            name: 'videoLength',
                            title: 'Video Length',
                            type: 'number',
                        },
                        {
                            name: 'assignment',
                            title: 'Assignment',
                            type: 'object',
                            fields: [
                                {
                                    name: 'image',
                                    title: 'Image',
                                    type: 'image',
                                },
                                {
                                    name: 'description',
                                    title: 'Description',
                                    type: 'text',
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};
