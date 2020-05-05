import Link from "next/link";
import { getDefaultImage } from "../../lib/api";
import { useState, useEffect } from "react";

const SliderCard = ({ post }) => {
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
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%"
            }}
          />
        );
      } else {
        setDefaultImage(
          <img
            className="img-fluid"
            src={`${defimg.fields.file.url}?fm=jpg&fl=progressive`}
            alt="post-thumbnail"
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%"
            }}
          />
        );
      }
    }
    dummy();
  }, []);

  return (
    <div className="slider-item">
      <div className="slider-item-content">
        <div
          className="post-thumb mb-4"
          style={{
            position: "relative",
            overflow: "hidden",
            paddingBottom: "100%",
            width: "100%"
          }}
        >
          <Link
            href="/blog/posts/[slug]"
            as={`/blog/posts/${post.fields.slug}`}
          >
            <a>{defaultImage ? defaultImage : ""}</a>
          </Link>
        </div>
        <div className="slider-post-content">
          <span className="cat-name text-color font-sm font-extra text-uppercase letter-spacing">
            {post.fields.tags.join(" , ")}
          </span>
          <h3 className="post-title mt-1">
            <Link
              href="/blog/posts/[slug]"
              as={`/blog/posts/${post.fields.slug}`}
            >
              <a>{post.fields.title}</a>
            </Link>
          </h3>
          <span className=" text-muted  text-capitalize">
            {new Date(post.fields.publishDate).toDateString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SliderCard;
