import Link from "next/link";
import { getDefaultImage } from "../../lib/api";
import { useState, useEffect } from "react";

const RelatedPostCard = ({ post }) => {
  const [defaultImage, setDefaultImage] = useState(null);

  useEffect(() => {
    async function dummy() {
      const defimg = await getDefaultImage();

      if (post.fields.heroImage) {
        setDefaultImage(
          <img
            className="img-fluid"
            src={`${post.fields.heroImage.fields.file.url}?fm=jpg&fl=progressive`}
            alt="post-thumbnail"
          />
        );
      } else {
        setDefaultImage(
          <img
            className="img-fluid"
            src={`${defimg.fields.file.url}?fm=jpg&fl=progressive`}
            alt="post-thumbnail"
          />
        );
      }
    }
    dummy();
  }, []);

  return (
    <div className="col-lg-4 col-md-4 col-sm-6">
      <div className="post-block-wrapper mb-4 mb-lg-0">
        <Link href="/blog/posts/[slug]" as={`/blog/posts/${post.fields.slug}`}>
          <a>{defaultImage ? defaultImage : ""}</a>
        </Link>
        <div className="post-content mt-3">
          <h5>
            <Link
              href="/blog/posts/[slug]"
              as={`/blog/posts/${post.fields.slug}`}
            >
              <a>{post.fields.title}</a>
            </Link>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default RelatedPostCard;
