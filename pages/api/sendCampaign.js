import Mailchimp from "mailchimp-api-v3";
import { getImage, getSingleEntry } from "../../lib/api";
import emailHtml from "../../lib/emailHtml";

const groupIDs = {
  all: "bfd3cbe7db",
  philosophy: "2a1cc1517d",
  math: "bcb953edb7",
  programming: "45840cfd50",
  introspection: "182ba8a2ee",
  languages: "afd75afdca",
  food: "780ec22ad7"
};

const mailchimp = new Mailchimp(process.env.MAILCHIMPAPIKEY);

export default async (req, res) => {
  // testing with contentful there should be JSON.parse but testing with post man there shouln't be
  const bod = JSON.parse(req.body);

  const campaign = await mailchimp.post("/campaigns", {
    type: "regular",
    recipients: {
      list_id: "8f5932d8e6",
      segment_opts: {
        match: "any",
        conditions: [
          {
            condition_type: "Interests",
            field: "interests-581d41ebd5",
            op: "interestcontains",
            value: [
              groupIDs.all,
              ...Object.keys(groupIDs)
                .filter(p => bod.fields.tags["en-US"].includes(p))
                .map(p => groupIDs[p])
            ]
          }
        ]
      }
    },
    settings: {
      subject_line: "New post from Mani's blog",
      title: "New post from Mani's blog",
      from_name: "Mani",
      reply_to: "mtajaldini@gmail.com",
      auto_footer: true
    }
  });

  const mainImage = bod.fields.heroImage
    ? await getImage(bod.fields.heroImage["en-US"].sys.id)
    : null;

  await mailchimp.put(`/campaigns/${campaign.id}/content`, {
    html: emailHtml({
      tags: bod.fields.tags["en-US"].join(" , "),
      title: bod.fields.title["en-US"],
      date: new Date(bod.fields.publishDate["en-US"]).toDateString(),
      imageUrl: mainImage ? `https:${mainImage.fields.file.url}` : null,
      desc: bod.fields.description["en-US"],
      slug: bod.fields.slug["en-US"]
    })
  });

  const sendResult = await mailchimp.post(
    `/campaigns/${campaign.id}/actions/send`
  );

  res.status(200).send(sendResult);
};
