// Carasoul JavaScript For Image Slider 
const images = document.querySelector('.carousel-images');
    const totalImages = images.children.length;
    let index = 0;

    document.getElementById('next').addEventListener('click', () => {
      index = (index + 1) % totalImages;
      images.style.transform = `translateX(-${index * 300}px)`;
    });

    document.getElementById('prev').addEventListener('click', () => {
      index = (index - 1 + totalImages) % totalImages;
      images.style.transform = `translateX(-${index * 300}px)`;
    });