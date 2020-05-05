import webmention from "send-webmention";

export default async (req, res) => {
  const bod = req.body;
  if (bod.fields.inReplyTo) {
    webmention(
      {
        source: `https://manitajaddini.com/blog/posts/${bod.fields.slug["en-US"]}`,
        target: bod.fields.inReplyTo["en-US"].inReplyTo
      },
      function(err, obj) {
        if (err) {
          res.status(200).send("err");
        } else {
          res.status(200).send("ok");
        }
      }
    );
  } else {
    res.status(200).send("There is no inReplyTo address");
  }
};
