export default {
  get: jest.fn(() => Promise.resolve({
    data: {
      items: [{
        snippet: {
          channelTitle: 'channelTitle1',
          description: 'description1',
          title: 'title1',
          thumbnails: {},
        },
      }],
    },
  })),
};
