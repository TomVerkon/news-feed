import { Section } from '../Section';
import { Category, Post } from '../../shared/types';

type FeedProps = {
  posts: Post[];
  categories: Category[];
};

export const Feed = ({ posts, categories }: FeedProps) => {
  console.log(categories);
  return (
    <>
      {categories.map((currentCategory) => {
        const inSection = posts.filter(
          (post) => post.category === currentCategory
        );

        return (
          <Section
            key={currentCategory}
            title={currentCategory}
            posts={inSection}
          />
        );
      })}
    </>
  );
};
