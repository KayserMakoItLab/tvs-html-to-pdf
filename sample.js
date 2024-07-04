const fs = require("fs").promises;
const path = require("path");

const getHTMLFile = async () => {
  const imagePath = path.join(__dirname, "image1.jpg");

  try {
    const data = await fs.readFile(imagePath);

    const base64Image = data.toString("base64");

    return `<!DOCTYPE html>
<html>
<head>
    <title>HTML content</title>
</head>
<body style="background-color: red;">
    <img style='margin:-8px;' width='796px' height='1126px' src="data:image/jpeg;base64,${base64Image}" alt="image 1">
    <section id="1">
    <a href="#2"><h1>Sample</h1></a>
    <div>
        <p>
        </p>
        <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Integer interdum felis nec orci mattis, ac dignissim mauris commodo.</li>
        </ul>
        <p></p>
        <p>
        </p>
        <ul>
            <li>In et augue non turpis faucibus tincidunt a et lectus.</li>
            <li>Nulla congue nisi vel diam hendrerit, at pulvinar massa aliquam.</li>
        </ul>
        <p></p>
    </div>
    <h1>Ipsum Paragraphs</h1>
    <div>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet magna turpis. Donec a tellus in
            mi pharetra volutpat at et nulla. Aenean porttitor fringilla diam et pretium. Fusce id velit mauris. Aenean
            ultrices orci dolor, sed tristique eros molestie eget. Fusce non ultrices odio. Sed nisi ex, porttitor non
            fermentum eu, rutrum quis mauris. Morbi scelerisque sollicitudin semper. Nunc vitae pharetra tortor, vel
            gravida ante. Integer euismod velit nisi, quis sollicitudin neque dictum nec. Morbi magna nulla, scelerisque
            a malesuada at, scelerisque at quam. Aliquam sit amet lorem congue, pellentesque metus non, aliquet purus.
            Integer a metus augue. Ut venenatis cursus ante, sed venenatis quam consequat id. Fusce rhoncus elementum
            felis, eu volutpat magna lacinia id. Proin ac sagittis nulla, a molestie turpis.
        </p>
        <p>
            Praesent sagittis leo ac congue faucibus. Phasellus pellentesque faucibus nisl fringilla pharetra. Morbi
            iaculis mollis viverra. Etiam eget lectus ac eros finibus cursus. Sed sed odio ac nisi semper tempus. Nam
            semper congue dui quis dictum. Nullam molestie vehicula mi, ac faucibus augue cursus vitae. Praesent orci
            lectus, tempor non enim a, accumsan volutpat mi. Donec tempus faucibus nisi quis mollis. Duis vestibulum
            risus id purus dignissim, euismod tristique libero volutpat.
        </p>
    </div>
    </section>
    <section id="2">
    <a href="#3"><h1>Sample 2</h1></a>
    <div>
        <p>
        </p>
        <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Integer interdum felis nec orci mattis, ac dignissim mauris commodo.</li>
        </ul>
        <p></p>
        <p>
        </p>
        <ul>
            <li>In et augue non turpis faucibus tincidunt a et lectus.</li>
            <li>Nulla congue nisi vel diam hendrerit, at pulvinar massa aliquam.</li>
        </ul>
        <p></p>
    </div>
    <h1>Ipsum Paragraphs 2</h1>
    <div>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet magna turpis. Donec a tellus in
            mi pharetra volutpat at et nulla. Aenean porttitor fringilla diam et pretium. Fusce id velit mauris. Aenean
            ultrices orci dolor, sed tristique eros molestie eget. Fusce non ultrices odio. Sed nisi ex, porttitor non
            fermentum eu, rutrum quis mauris. Morbi scelerisque sollicitudin semper. Nunc vitae pharetra tortor, vel
            gravida ante. Integer euismod velit nisi, quis sollicitudin neque dictum nec. Morbi magna nulla, scelerisque
            a malesuada at, scelerisque at quam. Aliquam sit amet lorem congue, pellentesque metus non, aliquet purus.
            Integer a metus augue. Ut venenatis cursus ante, sed venenatis quam consequat id. Fusce rhoncus elementum
            felis, eu volutpat magna lacinia id. Proin ac sagittis nulla, a molestie turpis.
        </p>
        <p>
            Praesent sagittis leo ac congue faucibus. Phasellus pellentesque faucibus nisl fringilla pharetra. Morbi
            iaculis mollis viverra. Etiam eget lectus ac eros finibus cursus. Sed sed odio ac nisi semper tempus. Nam
            semper congue dui quis dictum. Nullam molestie vehicula mi, ac faucibus augue cursus vitae. Praesent orci
            lectus, tempor non enim a, accumsan volutpat mi. Donec tempus faucibus nisi quis mollis. Duis vestibulum
            risus id purus dignissim, euismod tristique libero volutpat.
        </p>
    </div>
    </section>
    <section id="3">
    <a href="#4"><h1>Sample 3</h1></a>
    <div>
        <p>
        </p>
        <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Integer interdum felis nec orci mattis, ac dignissim mauris commodo.</li>
        </ul>
        <p></p>
        <p>
        </p>
        <ul>
            <li>In et augue non turpis faucibus tincidunt a et lectus.</li>
            <li>Nulla congue nisi vel diam hendrerit, at pulvinar massa aliquam.</li>
        </ul>
        <p></p>
    </div>
    <h1>Ipsum Paragraphs 3</h1>
    <div>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet magna turpis. Donec a tellus in
            mi pharetra volutpat at et nulla. Aenean porttitor fringilla diam et pretium. Fusce id velit mauris. Aenean
            ultrices orci dolor, sed tristique eros molestie eget. Fusce non ultrices odio. Sed nisi ex, porttitor non
            fermentum eu, rutrum quis mauris. Morbi scelerisque sollicitudin semper. Nunc vitae pharetra tortor, vel
            gravida ante. Integer euismod velit nisi, quis sollicitudin neque dictum nec. Morbi magna nulla, scelerisque
            a malesuada at, scelerisque at quam. Aliquam sit amet lorem congue, pellentesque metus non, aliquet purus.
            Integer a metus augue. Ut venenatis cursus ante, sed venenatis quam consequat id. Fusce rhoncus elementum
            felis, eu volutpat magna lacinia id. Proin ac sagittis nulla, a molestie turpis.
        </p>
        <p>
            Praesent sagittis leo ac congue faucibus. Phasellus pellentesque faucibus nisl fringilla pharetra. Morbi
            iaculis mollis viverra. Etiam eget lectus ac eros finibus cursus. Sed sed odio ac nisi semper tempus. Nam
            semper congue dui quis dictum. Nullam molestie vehicula mi, ac faucibus augue cursus vitae. Praesent orci
            lectus, tempor non enim a, accumsan volutpat mi. Donec tempus faucibus nisi quis mollis. Duis vestibulum
            risus id purus dignissim, euismod tristique libero volutpat.
        </p>
    </div>
    </section>
    <section id="4">
    <a href="#5"><h1>Sample 4</h1></a>
    <div>
        <p>
        </p>
        <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Integer interdum felis nec orci mattis, ac dignissim mauris commodo.</li>
        </ul>
        <p></p>
        <p>
        </p>
        <ul>
            <li>In et augue non turpis faucibus tincidunt a et lectus.</li>
            <li>Nulla congue nisi vel diam hendrerit, at pulvinar massa aliquam.</li>
        </ul>
        <p></p>
    </div>
    <h1>Ipsum Paragraphs 4</h1>
    <div>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet magna turpis. Donec a tellus in
            mi pharetra volutpat at et nulla. Aenean porttitor fringilla diam et pretium. Fusce id velit mauris. Aenean
            ultrices orci dolor, sed tristique eros molestie eget. Fusce non ultrices odio. Sed nisi ex, porttitor non
            fermentum eu, rutrum quis mauris. Morbi scelerisque sollicitudin semper. Nunc vitae pharetra tortor, vel
            gravida ante. Integer euismod velit nisi, quis sollicitudin neque dictum nec. Morbi magna nulla, scelerisque
            a malesuada at, scelerisque at quam. Aliquam sit amet lorem congue, pellentesque metus non, aliquet purus.
            Integer a metus augue. Ut venenatis cursus ante, sed venenatis quam consequat id. Fusce rhoncus elementum
            felis, eu volutpat magna lacinia id. Proin ac sagittis nulla, a molestie turpis.
        </p>
        <p>
            Praesent sagittis leo ac congue faucibus. Phasellus pellentesque faucibus nisl fringilla pharetra. Morbi
            iaculis mollis viverra. Etiam eget lectus ac eros finibus cursus. Sed sed odio ac nisi semper tempus. Nam
            semper congue dui quis dictum. Nullam molestie vehicula mi, ac faucibus augue cursus vitae. Praesent orci
            lectus, tempor non enim a, accumsan volutpat mi. Donec tempus faucibus nisi quis mollis. Duis vestibulum
            risus id purus dignissim, euismod tristique libero volutpat.
        </p>
    </div>
    </section>
    <section id="5"><a href="#1"><h1>Sample 5</h1></a>
    <div>
        <p>
        </p>
        <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Integer interdum felis nec orci mattis, ac dignissim mauris commodo.</li>
        </ul>
        <p></p>
        <p>
        </p>
        <ul>
            <li>In et augue non turpis faucibus tincidunt a et lectus.</li>
            <li>Nulla congue nisi vel diam hendrerit, at pulvinar massa aliquam.</li>
        </ul>
        <p></p>
    </div>
    <h1>Ipsum Paragraphs 5</h1>
    <div>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet magna turpis. Donec a tellus in
            mi pharetra volutpat at et nulla. Aenean porttitor fringilla diam et pretium. Fusce id velit mauris. Aenean
            ultrices orci dolor, sed tristique eros molestie eget. Fusce non ultrices odio. Sed nisi ex, porttitor non
            fermentum eu, rutrum quis mauris. Morbi scelerisque sollicitudin semper. Nunc vitae pharetra tortor, vel
            gravida ante. Integer euismod velit nisi, quis sollicitudin neque dictum nec. Morbi magna nulla, scelerisque
            a malesuada at, scelerisque at quam. Aliquam sit amet lorem congue, pellentesque metus non, aliquet purus.
            Integer a metus augue. Ut venenatis cursus ante, sed venenatis quam consequat id. Fusce rhoncus elementum
            felis, eu volutpat magna lacinia id. Proin ac sagittis nulla, a molestie turpis.
        </p>
        <p>
            Praesent sagittis leo ac congue faucibus. Phasellus pellentesque faucibus nisl fringilla pharetra. Morbi
            iaculis mollis viverra. Etiam eget lectus ac eros finibus cursus. Sed sed odio ac nisi semper tempus. Nam
            semper congue dui quis dictum. Nullam molestie vehicula mi, ac faucibus augue cursus vitae. Praesent orci
            lectus, tempor non enim a, accumsan volutpat mi. Donec tempus faucibus nisi quis mollis. Duis vestibulum
            risus id purus dignissim, euismod tristique libero volutpat.
        </p>
    </div></section>
</body>
</html>`;
  } catch (err) {
    console.error("Error reading the image file:", err);
    return `<!DOCTYPE html>
<html>
<head>
    <title>HTML content</title>
</head>
<body style="background-color: red;">
    <p>Error loading image</p>
</body>
</html>`;
  }
};

module.exports = {
  getHTMLFile,
};
