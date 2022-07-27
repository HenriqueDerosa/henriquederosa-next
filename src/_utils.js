import PrismicDOM from 'prismic-dom'

export const PRISMIC_ENTRY_POINT = process.env.PRISMIC_ENTRY_POINT;

const Elements = PrismicDOM.RichText.Elements;

const linkResolver = function(doc) {
  // Pretty URLs for known types
  if (doc.type === 'blog') return "/post/" + doc.uid;
  if (doc.type === 'page') return "/" + doc.uid;
  // Fallback for other types, in case new custom types get created
  return "/doc/" + doc.id;
};
  
const htmlSerializer = function (type, element, content, children) {
  switch(type) {

    case Elements.heading2: 
      return '<h1 class="heading-class">' + children.join('') + '</h1>';
    case Elements.paragraph: 
      return '<p class="paragraph-class">' + children.join('') + '</p>';

    case Elements.image: 
      return '<img src="' + element.url + '" alt="' + element.alt + '">';

    default: 
      return null;
  }
};

export const htmlResolver = (data) => PrismicDOM.RichText.asHtml(data, null, htmlSerializer);
