const FoodBlogCard = ({ post }) => {
  return (
    <div className="card">
      <a href="/blog/blog-single">
        <img
          className="card-img-top probootstrap-animate"
          src={`${post.fields.heroImage.fields.file.url}?fm=jpg&fl=progressive`}
          alt="Card image cap"
        />
      </a>
    </div>
  );
};

export default FoodBlogCard;
