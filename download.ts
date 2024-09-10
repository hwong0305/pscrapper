import type { Carousel } from './models/carousel';
import type { SinglePicture } from './models/singlePicture';
import type { SingleVideo } from './models/singleVideo';
import type { Stories } from './models/stories';

function isCarousel(json: Carousel | SinglePicture | SingleVideo | Stories): json is Carousel {
  return 'items' in json && 'carousel_media' in json.items[0];
}

function isStories(json: Carousel | SinglePicture | SingleVideo | Stories): json is Stories {
  return 'data' in json;
}

function isSinglePicture(json: SinglePicture | SingleVideo): json is SinglePicture {
  return json.items[0].media_type === 1;
}

function isSingleVideo(json: SinglePicture | SingleVideo): json is SingleVideo {
  return json.items[0].media_type === 2;
}

export const downloadIg = (json: any) => {
  const imgSrc: string[] = [];
  const videoSrc: string[] = [];

  // Case Carousel
  if (isCarousel(json)) {
    json.items[0].carousel_media.forEach(media => {
      if (media.media_type === 1) {
        imgSrc.push(media.image_versions2.candidates[0].url);
      } else {
        imgSrc.push(media.image_versions2.candidates[0].url);
        videoSrc.push(media.video_versions![0].url);
      }
    });
  } else if (isStories(json)) {
    json.data.reels_media[0].items.forEach(media => {
      if (media.__typename === 'GraphStoryImage') {
        imgSrc.push(media.display_url);
      } else {
        imgSrc.push(media.display_url);
        videoSrc.push(media.video_resources![0].src);
      }
    });
  } else if (isSinglePicture(json)) {
    imgSrc.push(json.items[0].image_versions2.candidates[0].url);
  } else if (isSingleVideo(json)) {
    imgSrc.push(json.items[0].image_versions2.candidates[0].url);
    imgSrc.push(json.items[0].image_versions2.additional_candidates.first_frame.url);
    imgSrc.push(json.items[0].image_versions2.additional_candidates.igtv_first_frame.url);
    videoSrc.push(json.items[0].video_versions[0].url);
  }

  return {
    imgSrc,
    videoSrc,
  };
};
