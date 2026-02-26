import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ParallaxSection = ({
  children,
  speed = 0.5,
  direction = 'vertical',
  className = '',
  ...props
}) => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;

    if (!section || !content) return;

    let animation;

    if (direction === 'vertical') {
      animation = gsap.to(content, {
        y: () => -section.offsetHeight * speed,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    } else if (direction === 'horizontal') {
      animation = gsap.to(content, {
        x: () => -section.offsetWidth * speed * 0.5,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    }

    return () => {
      if (animation) animation.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === section) trigger.kill();
      });
    };
  }, [speed, direction]);

  return (
    <div ref={sectionRef} className={className} {...props}>
      <div ref={contentRef}>{children}</div>
    </div>
  );
};

export default ParallaxSection;
