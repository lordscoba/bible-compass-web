export interface NavInterface {
  text: String;
  id: any;
}

/**FOOTER */

// ABOUT US
export interface AboutUsInterface {
  textOne: String;
  textTwo: String;
}

export type AboutUsType = {
  data: Array<AboutUsInterface>;
};

// HELPFULL LINKS
export interface HelpfulLinkInterface {
  text: String;
  link: String;
}

export type HelpfulLinkType = {
  data: Array<HelpfulLinkInterface>;
};

// LATEST POSTS
export interface LatestPostInterface {
  text: String;
  image: any;
  date: any;
}

export type LatestPostType = {
  data: Array<LatestPostInterface>;
};

// CONTACT US

export interface ContactUsInterface {
  text: String;
  icon: any;
  name: String;
}

export type ContactUsType = {
  data: Array<ContactUsInterface>;
};

//OUR SERVICES

export interface OurServicesInterface {
  text: String;
  icon: any;
  heading: String;
}
