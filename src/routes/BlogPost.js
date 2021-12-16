import React from 'react';

import 'styles/routes/BlogPost.scss';
import postImg_1 from 'img/blog_post.png';

const BlogPost = () => {
  return (
    <main className="BlogPost">
      <div className="scroll-area">
        <section className="post">
          <h1 className="post__title">어디든 자유롭게 꾸며봐</h1>
          <div className="post-contents">
            <div className="post-contents__img">
              <img src={postImg_1} alt="포스팅 이미지" />
            </div>
            <p className="post-contents__text">
              안녕하세요 오늘은 어쩌고 저쩌고. 대충 조각스티커랑 판스티커가 왜
              다른지 뭐가 다른지 리무버블스티커, 종이스티커, 백릿스티커, 배면
              인쇄(양면)스티커 등등 알려드릴거에요!
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default BlogPost;
