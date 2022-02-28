export const sanityConfig = {
    dataset: '<#< sanity.dataset >#>',
    projectId: '<#< sanity.projectId >#>',
    apiVersion: '2021-10-21',
    useCdn: (process.env.NODE_ENV === 'production'),
}