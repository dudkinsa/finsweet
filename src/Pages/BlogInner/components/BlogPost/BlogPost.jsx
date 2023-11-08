import React from 'react';
import styles from './blogPost.module.scss';
import image from './img/image.jpg';
import decorHorizontal from './img/decor-horizontal.svg';

const BlogPost = () => {
  return (
    <div className={styles.blogPost}>
      <div className="container">
      <div className={styles.blogPost__image}>
            <img src={image} alt="image" />
            <img className={styles.blogPost__decorHorizontal} src={decorHorizontal} alt="image" />
          </div>
        <div className={styles.blogPost__wrapper}>
          
          <div className={styles.post}>
            <h3 className={styles.post__title}>
              Transform Your Idea Into Reality with Ether a Leading Digital
              Agency
            </h3>
            <p className={styles.post__text}>
              Writing UX copies can be a little frustrating and confusing, and
              sometimes we are unsure about how to get the right word. To crack
              the code for the UX copies, we at Zeta Design wanted to build a
              Figma plugin for the larger design community. The plugin is called
              the Ghost UXWriter and has a set of UX copies cataloged and
              categorized with a voice and tone variation ranging from plain,
              casual to playful. The intention to build this Figma plugin
              originated from our Medium blog post, ‘Designing voice and tone
              for error messages.
            </p>
            <p className={styles.post__text}>
              Writing UX copies can be a little frustrating and confusing, and
              sometimes we are unsure about how to get the right word. To crack
              the code for the UX copies, we at Zeta Design wanted to build a
              Figma plugin for the larger design community. The plugin is called
              the Ghost UXWriter and has a set of UX copies cataloged.
            </p>
            <p className={styles.post__text}>
              Writing UX copies can be a little frustrating and confusing, and
              sometimes we are unsure about how to get the right word. To crack
              the code for the UX copies, we at Zeta Design wanted to build a
              Figma plugin for the larger design community. The plugin is called
              the Ghost UXWriter and has a set of UX copies cataloged.
            </p>
            <p className={styles.post__text}>
              Writing UX copies can be a little frustrating and confusing, and
              sometimes we are unsure about how to get the right word. To crack
              the code for the UX copies, we at Zeta Design wanted to build a
              Figma plugin for the larger design community. The plugin is called
              the Ghost UXWriter and has a set of UX copies cataloged and
              categorized with a voice and tone variation ranging from plain,
              casual to playful. The intention to build this Figma plugin
              originated from our Medium blog post, ‘Designing voice.
            </p>
            <h4 className={styles.post__subtitle}>
              Transform Your Idea Into Reality with Ether a Leading Digital
              Agency
            </h4>
            <p className={styles.post__text}>
              Step 1: Download the plugin from Figma community, search Ghost
              UXWriter Step 2: Open the plugin on your artboard Step 3: Search
              for your copy or look through the different categories of the
              copies Step 4: Select the type of error you are looking for. You
              will get three different copies for each error Step 5: Tap on the
              cards to insert text in your frames And you are all geared up to
              make your UX copies more fun and exciting 😎
            </p>

            <h4 className={styles.post__subtitle}>
              Transform Your Idea Into Reality with Ether a Leading Digital
              Agency
            </h4>
            <p className={styles.post__text}>
              Writing UX copies can be a little frustrating and confusing, and
              sometimes we are unsure about how to get the right word. To crack
              the code for the UX copies, we at Zeta Design wanted to build a
              Figma plugin for the larger design community. The plugin is called
              the Ghost UXWriter and has a set of UX copies cataloged and
              categorized with a voice and tone variation ranging from plain,
              casual to playful. The intention to build this Figma plugin
              originated from our Medium blog post, ‘Designing voice and tone
              for error messages.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
