<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.4/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
<script src="https://unpkg.com/split-type"></script>

<script>
document.addEventListener('DOMContentLoaded', () => {
  let animHeading1 = document.querySelectorAll('.dm-single-heading-1');

  animHeading1.forEach((headingElement1, index) => {
    let dmSplitHeading1 = new SplitType(headingElement1.querySelector('h2'), { types: 'words' });

    gsap.from(dmSplitHeading1.words, {
      scrollTrigger: {
        trigger: headingElement1,
        start: 'top 80%'
      },
      y: 30,
      opacity: 0,
      duration: 0.3,
      stagger: 0.1
    });
  });
});
</script>

<script>
document.addEventListener('DOMContentLoaded', () => {
  let animHeadingPara1 = document.querySelectorAll('.dm-heading1');

  animHeadingPara1.forEach((headingElement1, index) => {
    let dmSplitHeading1 = new SplitType(headingElement1.querySelector('h2'), { types: 'words' });
    let dmSplitParagraph1 = new SplitType(document.querySelectorAll('.dm-paragraph1')[index].querySelector('p'), { types: 'lines' });

    let headingParaTimeline1 = gsap.timeline({
      scrollTrigger: {
        trigger: headingElement1,
        scroller: 'body',
        start: 'top 80%'
      }
    });

    headingParaTimeline1
      .from(dmSplitHeading1.words, {
        y: 30,
        opacity: 0,
        duration: 0.3,
        stagger: 0.1
      })
      .from(dmSplitParagraph1.lines, {
        y: 30,
        opacity: 0,
        duration: 0.3,
        stagger: 0.1
      }, "-=0.2"); // overlap the animations slightly
  });
});
</script>