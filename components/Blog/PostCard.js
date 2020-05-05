import Link from "next/link";
import { getDefaultImage } from "../../lib/api";
import { useState, useEffect } from "react";

const PostCard = ({ post }) => {
  const [defaultImage, setDefaultImage] = useState(null);

  useEffect(() => {
    async function dummy() {
      const defimg = await getDefaultImage();

      if (post.fields.heroImage) {
        setDefaultImage(
          <img
            className="card-img-top"
            src={`${post.fields.heroImage.fields.file.url}?fm=jpg&fl=progressive`}
            alt="post-thumbnail"
          />
        );
      } else {
        setDefaultImage(
          <img
            className="card-img-top"
            src={`${defimg.fields.file.url}?fm=jpg&fl=progressive`}
            alt="post-thumbnail"
          />
        );
      }
    }
    dummy();
  }, []);

  return (
    <Link href="/blog/posts/[slug]" as={`/blog/posts/${post.fields.slug}`}>
      <a>
        <div className="card">
          {defaultImage ? defaultImage : ""}
          <div className="card-body">
            <span className="cat-name text-color font-extra text-sm text-uppercase letter-spacing-1 small">
              {post.fields.tags.join(" , ")}
            </span>
            <h3 className="card-title">{post.fields.title}</h3>
            <span className="text-muted letter-spacing text-uppercase font-sm">
              {new Date(post.fields.publishDate).toDateString()}
            </span>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default PostCard;
