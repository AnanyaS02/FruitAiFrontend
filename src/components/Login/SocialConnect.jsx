function SocialConnect() {
    const socialIcons = [
      { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/05b9bca86f58ef43ae31131e2be210ea29dbd257d71f9e4eed0ea1fad9eee168?placeholderIfAbsent=true&apiKey=c3b1bc105c9143f1b7f25c77e5c1b16e', alt: 'Facebook' },
      { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/6b012897d9431ca2c7b1b38d2656823e43a3dfb0117dab989b14c7dd5aa8c877?placeholderIfAbsent=true&apiKey=c3b1bc105c9143f1b7f25c77e5c1b16e', alt: 'Twitter' },
      { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a989d617c7af637241b88b346e723249f1d92177b81f82d6405f1ec97ae2f9e5?placeholderIfAbsent=true&apiKey=c3b1bc105c9143f1b7f25c77e5c1b16e', alt: 'LinkedIn' },
      { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7efaf56bd8beb1573d4b7b51fb2ae7c6c241ab2723e31aeb8c011e17b4ad102f?placeholderIfAbsent=true&apiKey=c3b1bc105c9143f1b7f25c77e5c1b16e', alt: 'Instagram' }
    ];
  
    return (
      <div className="flex gap-5 items-start p-2">
        {socialIcons.map((icon, index) => (
          <img
            key={index}
            loading="lazy"
            src={icon.src}
            alt={icon.alt}
            className="object-contain shrink-0 aspect-square w-[39px]"
          />
        ))}
      </div>
    );
  }
  
  export default SocialConnect;