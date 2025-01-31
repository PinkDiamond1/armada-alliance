const getPagesForTemplate = require('../getPagesForTemplate')

module.exports = {
    id: 'RuleDetailPage',
    name: 'Rule',
    type: 'Template',
    getPages: async (ctx, { component }) => getPagesForTemplate(component.id),
    components: [
        { type: 'Layout' },
        {
            type: 'PageHeader',
            resolve: (ctx, props) => ({
                title: props.title,
                pageType: 'Rule ' + props.number,
                identities: props.identities
            })
        },
        {
            type: 'PageExcerpt',
            resolve: (ctx, props) => ({
                alignLeft: !!props.mdxSource,
                excerpt: props.description
            })
        },
        {
            type: 'PageContent',
            resolve: (ctx, props) => ({
                mdxSource: props.mdxSource,
                filePath: props.filePath,
                updatedAt: props.updatedAt
            })
        }
    ]
}