export default function xmlToJson(xml) {

  // Create the return object
  let obj = {};

  if (xml.nodeType === 1) {
    // Element node
    if (xml.attributes.length > 0) {
      // Attributes
      obj["@attributes"] = {};
      for (let i = 0; i < xml.attributes.length; i++) {
        const attribute = xml.attributes[i];
        obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
      }
    }
  } else if (xml.nodeType === 3) {
    // Text node
    obj = xml.nodeValue;
  }

  // Children nodes
  if (xml.hasChildNodes()) {
    for (let i = 0; i < xml.childNodes.length; i++) {
      const item = xml.childNodes[i];
      const nodeName = item.nodeName;

      if (typeof obj[nodeName] === "undefined") {
        obj[nodeName] = xmlToJson(item);
      } else {
        if (typeof obj[nodeName].push === "undefined") {
          const old = obj[nodeName];
          obj[nodeName] = [];
          obj[nodeName].push(old);
        }
        obj[nodeName].push(xmlToJson(item));
      }
    }
  }

  return obj;
};
