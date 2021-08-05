const video1 = {
  kind: "youtube#searchResult",
  etag: "G92NWfwsZsCq390K5iD559vVeII",
  id: {
    kind: "youtube#video",
    videoId: "nmXMgqjQzls"
  },
  snippet: {
    publishedAt: "2019-09-30T23:25:15Z",
    channelId: "UCPGzT4wecuWM0BH9mPiulXg",
    title: "Video Tour | Welcome to Wizeline Guadalajara",
    description: "Follow Hector Padilla, Wizeline Director of Engineering, for a lively tour of our office.\n\nIn 2018, Wizeline opened its stunning new office in Guadalajara, Jalisco, Mexico, home to over 400 employees. Wizeline has drawn attention for designing an office and culture focused on employee wellness and cultivating talent, earning a Super Espacios award by WeWork, Expansion Mexico, and Top Companies.\n\nRead more about the office here: https://www.wizeline.com/creating-first-class-facilities/\n\nIf you're interested in working with Wizeline and want to experience the culture and tour our offices live, contact us at www.wizeline.com/contact/",
    thumbnails: {
      default: {
        url: "https://i.ytimg.com/vi/nmXMgqjQzls/default.jpg",
        width: 120,
        height: 90
      },
      medium: {
        url: "https://i.ytimg.com/vi/nmXMgqjQzls/mqdefault.jpg",
        width: 320,
        height: 180
      },
      high: {
        url: "https://i.ytimg.com/vi/nmXMgqjQzls/hqdefault.jpg",
        width: 480,
        height: 360
      },
      standard: {
        url: "https://i.ytimg.com/vi/nmXMgqjQzls/sddefault.jpg",
        width: 640,
        height: 480
      },
      maxres: {
        url: "https://i.ytimg.com/vi/nmXMgqjQzls/maxresdefault.jpg",
        width: 1280,
        height: 720
      }
    },
    channelTitle: "Wizeline",
    liveBroadcastContent: "none",
    publishTime: "2019-09-30T23:25:15Z"
  }
};

const video2 = {
  kind: "youtube#searchResult",
  etag: "ueozCHRXKH-xvUmyQzSZDISp7hU",
  id: {
    kind: "youtube#video",
    videoId: "8yOjGeylZwo"
  },
  snippet: {
    publishedAt: "2017-05-23T22:25:56Z",
    channelId: "UCPGzT4wecuWM0BH9mPiulXg",
    title: "San Francisco to Guadalajara: Why I Moved From the Bay Area to Mexico for My Career",
    description: "Claire Wright is a Project Manager at Wizeline, and made the move from Silicon Valley to Guadalajara last year. Watch Claire’s Collaboration Without Borders story to learn about her time abroad, and why she’s having the most valuable experiences of her career!\n\nUp for a challenge? Apply today: www.wizeline.com/careers",
    thumbnails: {
      default: {
        url: "https://i.ytimg.com/vi/8yOjGeylZwo/default.jpg",
        width: 120,
        height: 90
      },
      medium: {
        url: "https://i.ytimg.com/vi/8yOjGeylZwo/mqdefault.jpg",
        width: 320,
        height: 180
      },
      high: {
        url: "https://i.ytimg.com/vi/8yOjGeylZwo/hqdefault.jpg",
        width: 480,
        height: 360
      },
      standard: {
        url: "https://i.ytimg.com/vi/8yOjGeylZwo/sddefault.jpg",
        width: 640,
        height: 480
      },
      maxres: {
        url: "https://i.ytimg.com/vi/8yOjGeylZwo/maxresdefault.jpg",
        width: 1280,
        height: 720
      }
    },
    channelTitle: "Wizeline",
    liveBroadcastContent: "none",
    publishTime: "2017-05-23T22:25:56Z"
  }
};

const video3 = {
  kind: "youtube#searchResult",
  etag: "KsRD9Z8baZn5L9onmhwjdL-x0gI",
  id: {
    kind: "youtube#video",
    videoId: "NkZkhISXZ_Q"
  },
  snippet: {
    publishedAt: "2020-12-10T23:55:35Z",
    channelId: "UCPGzT4wecuWM0BH9mPiulXg",
    title: "Wizeline Hiring Process Overview",
    description: "Have you ever wondered what is Wizeline looking for in a Software Engineer and how our hiring process looks? Look no further!\n\nIn this video, we explain everything you need to know before applying. From the skills needed, day-to-day main activities, how is it like to be interviewed at Wizeline, and what could help you achieve a successful outcome.",
    thumbnails: {
      default: {
        url: "https://i.ytimg.com/vi/NkZkhISXZ_Q/default.jpg",
        width: 120,
        height: 90
      },
      medium: {
        url: "https://i.ytimg.com/vi/NkZkhISXZ_Q/mqdefault.jpg",
        width: 320,
        height: 180
      },
      high: {
        url: "https://i.ytimg.com/vi/NkZkhISXZ_Q/hqdefault.jpg",
        width: 480,
        height: 360
      },
      standard: {
        url: "https://i.ytimg.com/vi/NkZkhISXZ_Q/sddefault.jpg",
        width: 640,
        height: 480
      },
      maxres: {
        url: "https://i.ytimg.com/vi/NkZkhISXZ_Q/maxresdefault.jpg",
        width: 1280,
        height: 720
      }
    },
    channelTitle: "Wizeline",
    liveBroadcastContent: "none",
    publishTime: "2020-12-10T23:55:35Z"
  }
};

module.exports = {
  useVideos: () => [video1, video2, video3],
};
